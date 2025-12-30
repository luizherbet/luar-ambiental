<template>
    <div class="bg-white text-blue-900 px-4 max-w-[90%] w-full shadow-md md:flex justify-between items-center mt-6 rounded-lg relative z-20 header-padding overflow-visible">
        <div class="flex items-center justify-between w-full md:w-auto md:gap-1 gap-2 relative">
            <!-- Logo dentro do menu (lado esquerdo) -->
            <div class="logo-container flex items-center">
                <img :src="logo" alt="Logo" class="logo-image">
            </div>
            
            <!-- Botão Hamburger (apenas mobile) -->
            <button 
                @click="open = !open" 
                class="md:hidden text-blue-900 focus:outline-none p-1 z-40 relative"
                aria-label="Menu"
            >
                <i :class="open ? 'bi bi-x-lg text-xl' : 'bi bi-list text-xl'"></i>
            </button>
        </div>
        
        <!-- Menu Mobile (Links + Ícones Sociais) -->
        <div 
            :class="[
                'md:hidden',
                open ? 'block' : 'hidden'
            ]"
            class="absolute top-full right-0 w-48 bg-white shadow-md rounded-lg z-50 mt-2"
        >
            <!-- Menu de Links -->
            <ul class="uppercase font-bold text-sm py-3 px-6">
                <li class="my-3 text-center" v-for="link in Links" :key="link.name">
                    <a :href="link.link" @click="handleLinkClick($event, link.link)" class="hover:text-green-700 block">{{link.name}}</a>
                </li>
            </ul>
            
            <!-- Ícones Sociais -->
            <div class="flex items-center justify-center gap-3 pb-3 px-4 border-t border-gray-200 pt-3">
                <a
                    v-for="(social, index) in socialLinks"
                    :key="index"
                    :href="social.url"
                    target="_blank"
                    rel="noopener"
                    :aria-label="social.name"
                    class="text-xl hover:text-green-700"
                >
                    <i :class="`bi ${social.icon}`"></i>
                </a>
            </div>
        </div>
        
        <!-- Menu Desktop (Links) -->
        <div class="hidden md:flex md:items-center">
            <ul class="flex items-center gap-4 uppercase font-bold text-sm">
                <li class="mx-1" v-for="link in Links" :key="link.name">
                    <a :href="link.link" @click="handleLinkClick($event, link.link)" class="hover:text-green-700">{{link.name}}</a>
                </li>
            </ul>
        </div>
        
        <!-- Ícones Sociais Desktop -->
        <div class="hidden md:flex items-center gap-2">
            <a
                v-for="(social, index) in socialLinks"
                :key="index"
                :href="social.url"
                target="_blank"
                rel="noopener"
                :aria-label="social.name"
                class="text-xl hover:text-green-700"
            >
                <i :class="`bi ${social.icon}`"></i>
            </a>
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
            { name: "Cursos", link: "#servicos" },
            { name: "Serviços", link: "#servicos-detalhados" },
            { name: "Quem somos", link: "#sobre-nos" },
            { name: "Equipe", link: "#nossa-equipe" },
        ]

        const socialLinks = [
            { name: 'LinkedIn', url: 'https://www.linkedin.com/company/luar-ambiental/', icon: 'bi-linkedin' },
            { name: 'Facebook', url: 'https://www.facebook.com/share/1ARc1bH6k4/?mibextid=wwXIfr', icon: 'bi-facebook' },
            { name: 'Instagram', url: 'https://www.instagram.com/ambiental.luar?igsh=MW5lb2ozZ3RqMXZoNg%3D%3D&utm_source=qr', icon: 'bi-instagram' },
            { name: 'TikTok', url: 'https://www.tiktok.com/@ambiental.luar?_r=1&_t=ZS-92X6z43Uwk5', icon: 'bi-tiktok' },
        ]

        const handleLinkClick = (event, link) => {
            if (link.startsWith('#')) {
                event.preventDefault()
                open.value = false // Fecha o menu mobile
                
                const targetId = link.substring(1)
                const targetElement = document.getElementById(targetId)
                
                if (targetElement) {
                    // Aguarda um pouco para garantir que o menu mobile fechou
                    setTimeout(() => {
                        let scrollPosition = 0
                        const extraOffset = 80 // Offset adicional para ir um pouco mais abaixo
                        
                        if (targetId === 'servicos') {
                            // Para cursos/serviços, precisa rolar até o final do carousel (100vh) + offset adicional
                            scrollPosition = window.innerHeight + extraOffset
                        } else if (targetId === 'servicos-detalhados') {
                            // Para serviços detalhados, calcula a posição normal com offset adicional
                            const headerHeight = 120
                            const rect = targetElement.getBoundingClientRect()
                            scrollPosition = rect.top + window.pageYOffset - headerHeight + extraOffset
                        } else if (targetId === 'nossa-historia') {
                            // Para nossa história, que está dentro de sobre-nos, calcula a posição dentro da seção
                            const headerHeight = 120
                            const rect = targetElement.getBoundingClientRect()
                            scrollPosition = rect.top + window.pageYOffset - headerHeight + extraOffset
                        } else if (targetId === 'nossa-equipe') {
                            // Para nossa equipe, calcula a posição normal com offset adicional
                            const headerHeight = 120
                            const rect = targetElement.getBoundingClientRect()
                            scrollPosition = rect.top + window.pageYOffset - headerHeight + extraOffset
                        } else {
                            // Para outras seções, calcula a posição normal com offset adicional
                            const headerHeight = 120
                            const rect = targetElement.getBoundingClientRect()
                            scrollPosition = rect.top + window.pageYOffset - headerHeight + extraOffset
                        }
                        
                        window.scrollTo({
                            top: Math.max(0, scrollPosition),
                            behavior: 'smooth'
                        })
                    }, 100)
                }
            }
        }
        
        return {
            Links,
            logo,
            open,
            handleLinkClick,
            socialLinks
        }
    }
}
</script>

<style scoped>
.header-padding {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    display: flex;
    align-items: center;
    min-height: 60px;
}

@media (min-width: 768px) {
    .header-padding {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        min-height: 80px;
    }
}

.logo-container {
    display: flex;
    align-items: center;
    z-index: 30;
    height: 100%;
}

.logo-image {
    height: 65px;
    width: auto;
    object-fit: contain;
    display: block;
    border: 1px solid gray;
    border-radius: 100%;
    margin-left: 10px;
}

@media (min-width: 768px) {
    .logo-image {
        max-height: 80px;
    }
}

</style>