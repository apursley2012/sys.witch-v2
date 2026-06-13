import{j as e}from"../../assets/jsx-runtime.js";import{S as n}from"../sigils/Sigil.js";import{m as r}from"../../assets/proxy.js";import"../../data/sigils.js";const c=({project:a,onClick:s,isActive:t})=>e.jsxs(r.button,{onClick:s,className:`
        relative w-full aspect-square max-w-[300px] mx-auto rounded-full flex items-center justify-center group focus:outline-none
        ${t?"scale-105":"hover:scale-105"} transition-transform duration-500
      `,"aria-label":`View details for ${a.title}`,children:[e.jsx(r.div,{className:`
          absolute inset-0 rounded-full border-2 border-dashed
          ${t?"border-neon-magenta shadow-glow-magenta":"border-neon-magenta/30 group-hover:border-neon-magenta/70"}
          transition-colors duration-300
        `,animate:{rotate:t?360:0},transition:{duration:20,repeat:1/0,ease:"linear"}}),e.jsx(r.div,{className:`
          absolute inset-4 rounded-full border border-dotted
          ${t?"border-neon-purple shadow-glow-purple":"border-neon-purple/30 group-hover:border-neon-purple/70"}
          transition-colors duration-300
        `,animate:{rotate:t?-360:0},transition:{duration:15,repeat:1/0,ease:"linear"}}),e.jsxs("div",{className:"absolute inset-8 rounded-full bg-surface-elevated/80 backdrop-blur-sm border border-neon-magenta/20 flex flex-col items-center justify-center p-4 text-center z-10 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 opacity-20 mix-blend-luminosity group-hover:opacity-40 transition-opacity duration-500",style:{backgroundImage:`url(${a.image})`,backgroundSize:"cover",backgroundPosition:"center"}}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent to-base/90"}),e.jsx(n,{id:"projects",size:32,color:t?"magenta":"purple",className:`mb-2 relative z-10 transition-colors duration-300 ${t?"drop-shadow-glow-magenta":""}`}),e.jsx("h3",{className:`
          font-display text-sm md:text-base tracking-wider relative z-10 transition-colors duration-300
          ${t?"text-neon-magenta text-glow-magenta":"text-text-primary group-hover:text-neon-magenta"}
        `,children:a.title})]}),e.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[0,90,180,270].map((o,i)=>e.jsx("div",{className:"absolute top-1/2 left-1/2 w-6 h-6 -ml-3 -mt-3 flex items-center justify-center",style:{transform:`rotate(${o}deg) translateY(-150px) rotate(-${o}deg)`},children:e.jsx(n,{id:`rune-${i%7+1}`,size:12,color:"magenta",className:`opacity-50 ${t?"opacity-100 drop-shadow-glow-magenta":""}`})},o))})]});export{c as S};
