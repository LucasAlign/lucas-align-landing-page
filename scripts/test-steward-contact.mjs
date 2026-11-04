import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const html=readFileSync('artifacts/lucas-align/public/steward/index.html','utf8');
const make=()=>({hidden:false,disabled:false,value:'',events:{},addEventListener(n,f){this.events[n]=f},focus(){},setCustomValidity(){},reportValidity(){}});
const buttons=[...html.matchAll(/data-contact="([^"]+)"/g)].map(m=>Object.assign(make(),{dataset:{contact:m[1]}}));
assert.equal(buttons.length,7);
const error=make(),success=make(),submit=make(),close=make(),done=make();
const form=make();form.elements={name:make(),interest:make()};form.querySelector=()=>submit;form.reset=()=>{};
const dialog=make();dialog.querySelector=s=>({'.formError':error,'.formSuccess':success,'.contactClose':close}[s]);dialog.showModal=()=>{dialog.open=true};dialog.close=()=>{dialog.open=false;dialog.events.close()};
const document={body:{style:{overflow:''}},getElementById:id=>({'steward-contact':dialog,'steward-contact-form':form,'contact-done':done}[id]),querySelectorAll:()=>buttons};
let status=201,payload;
vm.runInNewContext(readFileSync('artifacts/lucas-align/public/steward/contact.js','utf8'),{document,FormData:class{constructor(){return new Map(Object.entries({name:' Test Person ',email:'test@example.com',organization:'Test church',interest:'Ministry inquiry',message:'Test inquiry'}))}},fetch:async(url,options)=>{assert.equal(url,'/api/contact');payload=JSON.parse(options.body);return {status}},AbortController,setTimeout,clearTimeout});
for(const button of buttons){button.events.click();assert.equal(dialog.open,true);assert.equal(form.elements.interest.value,button.dataset.contact);close.events.click();assert.equal(dialog.open,false);assert.equal(document.body.style.overflow,'')}
buttons[0].events.click();await form.events.submit({preventDefault(){}});assert.equal(success.hidden,false);assert.equal(form.hidden,true);assert.equal(payload.source,'steward');assert.equal(payload.name,'Test Person');assert.equal(submit.disabled,false);
close.events.click();buttons[0].events.click();status=500;await form.events.submit({preventDefault(){}});assert.equal(error.hidden,false);assert.equal(form.hidden,false);assert.equal(success.hidden,true);assert.equal(submit.disabled,false);
console.log('PASS: all 7 CTA handlers, interest selection, close/reset, contact payload, success, and failure/retry states');
