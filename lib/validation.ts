export function validCnpj(input:string){
 const n=input.toUpperCase().replace(/[.\/\-\s]/g,'');
 if(!/^[A-Z0-9]{12}\d{2}$/.test(n)||/^(.)\1+$/.test(n))return false;
 const digit=(s:string,w:number[])=>{const r=[...s].reduce((v,c,i)=>v+(c.charCodeAt(0)-48)*w[i],0)%11;return r<2?0:11-r};
 const a=digit(n.slice(0,12),[5,4,3,2,9,8,7,6,5,4,3,2]);
 const b=digit(n.slice(0,12)+a,[6,5,4,3,2,9,8,7,6,5,4,3,2]);return n.slice(-2)===`${a}${b}`;
}
export function normalizedPhone(s:string){let n=s.replace(/\D/g,'');if(n.length>=12&&n.startsWith('55'))n=n.slice(2);return /^\d{10,11}$/.test(n)&&Number(n.slice(0,2))>=11?n:null;}
