<template>
    <div class="bg-amber-50 text-blue-900 py-2 px-6 max-w-[75%] w-full shadow-md md:flex justify-between items-center mt-6 rounded-xl relative">
        <div class="flex items-center justify-between w-full md:w-auto">
            <img :src="logo" alt="Logo" class="h-12 w-auto shadow-sm rounded-full border-1">
            <!-- Botão Hamburger (apenas mobile) -->
            <button 
                @click="open = !open" 
                class="md:hidden text-blue-900 focus:outline-none"
                aria-label="Menu"
            >
                <i :class="open ? 'bi bi-x-lg text-2xl' : 'bi bi-list text-2xl'"></i>
            </button>
        </div>
        
        <!-- Menu de Links -->
        <div 
            :class="[
                'md:flex md:items-center',
                open ? 'block' : 'hidden md:block'
            ]"
            class="absolute md:static top-full right-0 md:left-auto md:right-auto md:w-auto w-40 md:bg-transparent bg-amber-50 md:shadow-none shadow-md md:rounded-none rounded-t-xl rounded-b-xl z-50"
        >
            <ul class="md:flex md:items-center gap-10 uppercase font-bold text-sm md:py-0 py-4 px-6 md:px-0">
                <li class="md:mx-4 md:my-0 my-4 text-center" v-for="link in Links" :key="link.name">
                    <a :href="link.link" class="hover:text-green-700 block">{{link.name}}</a>
                </li>
            </ul>
        </div>
        
        <!-- Ícones Sociais -->
        <div 
            :class="[
                'flex items-center gap-3',
                open ? 'flex top-[calc(100%+120px)]' : 'hidden md:flex top-full',
                'absolute md:static right-0 md:left-auto md:right-auto md:w-auto w-40 md:bg-transparent bg-amber-50 md:shadow-none shadow-md rounded-t-xl rounded-b-xl md:rounded-none justify-center md:justify-end md:py-0 py-4 px-6 md:px-0 z-50'
            ]"
        >
            <i class="bi bi-instagram text-xl cursor-pointer hover:text-green-700"></i>
            <i class="bi bi-facebook text-xl cursor-pointer hover:text-green-700"></i>
            <i class="bi bi-tiktok text-xl cursor-pointer hover:text-green-700"></i>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
import logo from '../assets/logo.png'

export default {
    setup() {
        const open = ref(false)
        const Links = [
            { name: "Serviços", link: "#" },
            { name: "Sobre nós", link: "#" },
            { name: "Contato", link: "#" },
        ]
        
        return {
            Links,
            logo,
            open
        }
    }
}
</script>