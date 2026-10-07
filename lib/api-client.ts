// Public API origin; credentials are stored only by the server.
export const API_ORIGIN=(import.meta.env as unknown as Record<string,string>).VITE_CAROL_API_ORIGIN||'https://carol-componentes-industriais.safc-conceicao87.chatgpt.site';
export async function apiFetch(path:string,init:RequestInit={}){
 const r=await fetch(new URL(path,API_ORIGIN),{...init,credentials:'omit'});
 if(r.ok&&(path==='/api/catalog'||path==='/api/manage/catalog')){
  const data=await r.json() as {products:Record<string,unknown>[]};
  const base=location.pathname.startsWith('/carol-componentes/')?'/carol-componentes/':'/';
  const fix=(v:unknown):unknown=>typeof v==='string'&&v.startsWith('/images/')?base+v.slice(1):Array.isArray(v)?v.map(fix):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).map(([k,x])=>[k,fix(x)])):v;
  return Response.json(fix(data),{status:r.status,headers:r.headers});
 }
 return r;
}
