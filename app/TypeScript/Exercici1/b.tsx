interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
    habilidades: string[]
};

const usuario: Usuario = {
    id: 1,
    nombre: "Ana",
    email: "ana@example.com",
    activo: true,
    habilidades: ["JS", "HTML", "CSS"]
}
    
function obtenerResumenUsuario(usuario: Usuario): string {
    return `${usuario.nombre} (${usuario.email}) - ${usuario.habilidades.length} habilidades`;
}