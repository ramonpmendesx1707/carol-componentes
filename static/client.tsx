import {createRoot} from 'react-dom/client';
import Experience from '../app/experience';
import {validCnpj,normalizedPhone} from '../lib/validation';
import {GET as shipping} from '../app/api/frete/route';
import '../app/globals.css';
import '../app/movement.css';

// GitHub Pages has no Worker/D1. Keep this preview adapter out of server builds.
const base=import.meta.env.BASE_URL;
const originalFetch=window.fetch.bind(window);
window.fetch=async(input,init)=>{
 const url=new URL(typeof input==='string'?input:input instanceof URL?input.href:input.url,location.href);
 if(url.origin===location.origin&&url.pathname==='/api/frete')return shipping(new Request(url));
 if(url.origin===location.origin&&url.pathname==='/api/contato'){
  try{
   const p=JSON.parse(String(init?.body||'{}')),phone=normalizedPhone(String(p.phone||''));
   if(!validCnpj(String(p.cnpj||''))||!phone)return Response.json({error:'Confira CNPJ e telefone.'},{status:400});
   const cnpj=String(p.cnpj).replace(/[^a-z0-9]/ig,'').toUpperCase();
   const text=['Olá! Gostaria de uma cotação com a Carol Componentes — Joinville.',`CNPJ: ${cnpj}`,`Telefone: ${phone}`,p.name?`Nome: ${p.name}`:'',`Interesse: ${p.source||'Contato geral'}`,...(p.items||[]).map((i:{qty:number;name:string;variant:string})=>`${i.qty} × ${i.name}${i.variant?' | '+i.variant:''}`),p.message?`Mensagem: ${p.message}`:''].filter(Boolean).join('\n');
   // Store the latest draft only on this device; no internal delivery is claimed.
   localStorage.setItem('carol-contact-draft',JSON.stringify({...p,cnpj,phone}));
   return Response.json({id:p.id,simulated:true,whatsappUrl:`https://api.whatsapp.com/send?phone=5547996180088&text=${encodeURIComponent(text)}`});
  }catch{return Response.json({error:'Não foi possível preparar a conversa. Confira seus dados e tente novamente.'},{status:400})}
 }
 return originalFetch(input,init);
};
const pathname=decodeURIComponent(location.pathname.slice(base.length));
const slug=pathname.startsWith('produto/')?pathname.slice(8).replace(/\/$/,''):undefined;
createRoot(document.getElementById('root')!).render(<Experience initialProduct={slug}/>);
