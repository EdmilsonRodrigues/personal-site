import { Component } from '@angular/core';
import { Content } from '../../services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
    standalone: true,
    selector: 'app-about',
    imports: [TranslatePipe],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {
    title: Content = {
        'en': 'My Story & Interests',
        'pt': 'Minha História e Interesses'
    }

    previousExperiences: Content = {
        'en': 'Previous Experiences',
        'pt': 'Experiências Pregressas'
    }

    developerHistory: Content = {
        'en': 'History as a Developer',
        'pt': 'História como desenvolvedor'
    }

    beyondCode: Content = {
        'en': 'Beyond the Code',
        'pt': 'Além do Código'
    }

    cta: Content = {
        'en': 'Let\'s Connect!',
        'pt': 'Vamos Conversar!'
    }


    previousExperiencesParagraphs: Content[] = [
        {
            'en': 'My name is Edmilson Rodrigues, and my history with programming started on 2018, when I was still in High School '
                + 'in a Chemistry Technician course, where I was leadering the night shift of the Environmental Microbiology Lab. '
                + 'We decided to create a <span class="text-green-600">Data Science</span> group in the lab so we could draw some '
                + 'new conclusions with the huge amounts of temporal limnological data that we gathered from our analysis. '
                + 'That\'s when I started studying Python.'
            ,
            'pt': 'Me chamo Edmilson Rodrigues, e minha história com a programação começou em 2018, quando eu ainda estava no ensino '
                + 'médio, em um curso de Técnico em Química, onde eu era o líder do turno noturno do Laboratório de Microbiologia '
                + 'Ambiental. Nós havíamos decidido criar um grupo de <span class="text-green-600">Ciência de Dados</span> no '
                + 'laboratório para que pudéssemos tirar novas conclusões a partir das enormes quantidades de dados limnológicos '
                + 'temporais que havíamos juntado das nossas análises. Foi aí que comecei a estudar Python.'
        },
        {
            'en': 'I started with some books of introduction to Python and Python for Data Analysis alongside some YouTube courses. '
                + 'Looking back now, that lab and that <a class="text-blue-600" href="https://www.youtube.com/c/CursoemV%C3%ADdeo" '
                + 'target="_blank">YouTube Channel</a> shaped me in the professional I am today.',
            'pt': 'Eu comecei com alguns livros de introdução ao Python e Python para Análise de Dados, juntamente com cursos do '
                + 'YouTube. Olhando pra trás agora, aquele laboratório e aquele <a class="text-blue-600" target="_blank"'
                + 'href="https://www.youtube.com/c/CursoemV%C3%ADdeo">canal do YouTube</a> me moldaram no profissional que sou hoje.'
        },
        {
            'en': 'In 2019, the same channel that was making the Python course, started also a GNU/Linux course, and that was '
                + 'the moment that the <span class="font-semibold text-orange-600">Free Software</span> mindset entered my mind. I '
                + 'migrated to GNU/Linux in that same month, and finished my year sharpening my skills of both Python and '
                + 'Chemistry/Microbiology, thinking about mixing both these knowledges to create something new in the future and, '
                + 'maybe one day, be able to contribute to the Free Software movement.',
            'pt': 'Em 2019, o mesmo canal que estava dando os cursos de Python começou também um curso de GNU/Linux, e esse foi '
                + 'o momento em que a mentalidade de <span class="font-semibold text-orange-600">Software Livre</span> entrou na '
                + 'minha cabeça. Migrei para o GNU/Linux naquele mesmo mês e finalizei meu ano afiando minhas habilidades ambas '
                + 'de Python e Química/Microbiologia, pensanod em misturar ambos esses conhecimentos para criar algo novo no futuro '
                + 'e, talvez um dia, estar apto a contribuir para o movimento do Software Livre.'
        },
        {
            'en': 'After this, I continued using Python and finding a way to put it in every internship I got, but, when the pandemic '
                + 'came, I had to quit my latest internship. Then, I decided to focus solely in learning more about Python and '
                + 'becoming a better programmer, since I was already at home. In the end of 2021, when the pandemic was starting to '
                + 'fade, I got a new job in the Quality Control of a nutrition industry, and there was the first time that I was '
                + 'able to use my programming skills to solve real business problems, and, when the production was slower, and I had '
                + 'free time, I started writing solutions to some repetitive works that we got there. These were my first experiences '
                + 'with <span class="text-red-600">Robotic Process Automation</span> and the design of Desktop Applications.',
            'pt': 'Depois disso, continuei usando Python e encontrando uma maneira de inserí-lo em cada estágio que consegui, mas, '
                + 'quando a pandemia chegou, tive que sair do meu último estágio. Em seguida, decidi focar somente em me aprofundar '
                + 'em Python e em me tornar um programador melhor, já que já estava preso em casa. No final de 2021, quando a pandemia '
                + 'começou a acabar, eu consegui um novo emprego no Controle de Qualidade de uma indústria de nutrição, e lá foi a '
                + 'primeira vez em que fui capaz de utilizar minhas habilidades de programação para resolver problemas reais de '
                + 'uma empresa, e, quando a produção estava mais lenta e eu tinha tempo libre, comecei a escrever soluções para alguns '
                + 'trabalhos repetitivos que tínhamos lá. Essas foram minhas primeiras experiências com <span class="text-red-600">'
                + 'Automação Robótica de Processos</span> e o desenvolvimento de Aplicações para Desktop.'
        },

    ] //Welcome to my journey! I'm a passionate developer with a knack form turning complex problems into elegant code. My path into technology began with a fascination for how things work, leading me down a rabbit hole of programming languages, system architectures, and the endless possibilities of the digital world.
    // Over the years, I've honed my skills in various domains, always eager to learn and adapt to new challenges. From crafting robust backend systems to designing intuitive user interfaces, I thrive on bringing ideas to life. My experience spans across different industries, giving me a broad perspective on how technology can solve real-world problems.
    developerHistoryParagraphs: Content[] = [
        {
            'en': 'In the end of 2023, I was in the undergraduation, in Biology, following the natural flow of my former '
                + 'profession, when, after some time thinking about my interests, what most captivated me, and what I wanted for my '
                + 'future as a professional, I decided that though I always loved the nartural sciences, creating solutions and '
                + 'solving problems was what drove me to where I was, and the ability to do it with coding, alongside my '
                + 'old desire to be a part of the Free Software community not only as user, but as contributor, made me '
                + 'migrate to Tech, and, with the support of my family, decided to focus 100% of my time in becoming a better '
                + 'software developer and start working as a <span class="text-red-600">Software Engineer</span>.',
            'pt': 'No final de 2023, eu estava na graduação, cursando biologia, seguindo o fluxo natural da minha antiga carreira, '
                + 'quando, depois de algum tempo pensando nos meus interesses, no que me mais me cativava, e no que eu queria '
                + 'para o meu futuro como profissional, decidi que, embora eu sempre tenha amado as ciências naturais, criar '
                + 'soluções e resolver problemas era o que me havia me levado para onde eu estava, e a capacidade de fazê-lo com '
                + 'código, juntamente do meu antigo desejo de ser parte da comunidade de Software Livre, não somente como usuário, '
                + 'mas como contribuidor, me fizeram migrar para a programação, e, com o apoio da minha família, decidi focar 100% '
                + 'do meu tempo livre em me tornar um desenvolvedor de software melhor para trabalhar como <span class="text-red-600">'
                + 'Engenheiro de Software</span>.'
        },
        {
            'en': 'In the beginning of 2024 I started earning my first freelancing contracts, starting building APIs and RPAs in '
                + 'Python. It didn\'t take long until I started working on bigger projects, building MVP of SaaS for startups, '
                + 'management systems and automations for small and medium companies, which required me to widen my knowledge, '
                + 'learning new languages and paradigms, and making me a <span class="text-yellow-600">Full Stack Developer</span>.',
            'pt': 'No começo de 2024, eu estava ganhando meus primeiros contratos de freelancer, começando a construir APIs e RPAs '
                + 'em Python. Não demorou muito até que eu começasse a trabalhar em projetos maiores, construindo MVP de SaaS para '
                + 'startups, assim como sistemas de gerenciamento e automações para pequenas e médias empresas, o que me fez ter de '
                + 'expandir meus conhecimentos, aprendendo novas linguagens, paradigmas e me tornando um <span class="text-yellow-600'
                + '"> Desenvolvedor Full Stack</span>.'
        },
        {
            'en': 'In end of 2024, I also decided to use the knowledge I gathered through this freelancing experience to contribute '
                + 'to Free Software initiatives, and my first contribution was to the Python Library Libjuju. This first experience '
                + 'in open source contributions expanded my view, since it was the first time I worked on software written by people '
                + 'with decades of experience above me. This changed my view, and was followed by other contributions, including to '
                + '<span class="text-green-600">FastAPI</span>, an extremely fast and efficient Web Framework for Python, that I '
                + 'usually use for my contracts.',
            'pt': 'No final de 2024, eu também decidi usar o conhecimento que juntei através da minha experiência como freelancer '
                + 'para contribuir para iniciativas de Software Livre, e minha primeira contribuição foi para a biblioteca Python '
                + 'Libjuju. Essa primeira experiência com contribuições de código aberto expandiram minhas perspectivas, já que foi '
                + 'a primeira vez que eu trabalhei com software escrito por pessoas com décadas de experiência acima de mim. Isso '
                + 'mudou minha perspectiva, e a isso seguiu-se outras contribuições, incluindo ao <span class="text-green-600">FastAPI'
                + '</span>, um Framework Web extremamente rápido e eficiente, que costumo usar em meus contratos.'
        },
        {
            'en': 'Since then, I continue operating as a freelancer building automations, management systems, and web applications '
                + 'for companies and individuals who want to speed up their processes, turn manual steps into automated ones, deploy '
                + 'cloud applications in a cheap and effective way, or turn their vision into software solutions for their customers.'
                + 'If you are interested in any of these services, <span class="text-blue-600">Let\'s have a chat</span>!',
            'pt': 'Desde então, continuo operando como freelancer construindo automações, sistemas de gerenciamento, e aplicações web '
                + 'para empresas e indivíduos que queiram acelerar seus processos, tornarem passos manuais em automatizados, lançar '
                + 'aplicações na nuvem de forma barata e efetiva, ou transformar suas visões em soluções de software para seus '
                + 'clientes. Caso você se interesse em qualquer um desses serviços, <span class="text-blue-600">Vamos conversar'
                + '</span>!'
        },
    ]
    beyondCodeParagraphs: Content[] = [
        {
            'en': 'Well, if you are reading this, it\'s because you want to know more about me outside of the business. <br />'
                + 'My name is Edmilson Rodrigues, and I am a Brazilian Developer, with a huge interest for movies, theater, '
                + 'musicals, books, and languages (both human and programming). I have a family, composed by my spouse Maria '
                + 'and our two daughters, our hamsters Lilo and Ophelia.',
            'pt': 'Bom, se você está lendo isso, é porque quer saber um pouco mais sobre mim além do âmbito profissional. <br />'
                + 'Me chamo Edmilson Rodrigues, e sou um Desenvolvedor Brasileiro, com um grande interesse em cinema, teatro, '
                + 'musicais, livros e linguagens (ambas humanas e de programação). Tenho uma família, composta por meu cônjuge '
                + 'Maria e nossas duas filhas, nossas hamsters Lilo e Ophelia.'
        },
        {
            'en': 'I am passionate about travelling, learning different cultures, languages, and about history and the life '
                + 'in other parts of the world. I believe that the best source of knowledge are the books, and that\'s why '
                + 'I am always reading something, usually technical books, but I also enjoy magic realism, fantasy and sci-fy!',
            'pt': 'Sou apaixonado por viajar, conhecer culturas diferentes, idiomas, e saber mais sobre história e a vida '
                + 'em outras partes do mundo. Acredito que a melhor fonte de conhecimento são os livros, e por isso sempre estou '
                + 'lendo algo, normalmente livros técnicos, mas também adoro realismo mágico, fantasia e ficção científica!'
        },
        {
            'en': 'I am a huge defender of the Free Software movement, my favorite distro is Ubuntu, so far, but I have experience '
                + 'with Fedora, OpenSUSE, Debian and Mint. I prefer GNOME environments, rather than KDE, my favorite editor is '
                + 'GNU Emacs. I also enjoy home labs, currently building my own with Raspberry Pi. I think that\'s it about me.',
            'pt': 'Sou um grande defensor do movimento Software Livre, minha distro GNU/Linux favorita é o Ubuntu, até agora, mas '
                + 'tenho experiência com Fedora, OpenSUSE, Debian e Mint. Prefiro ambientes GNOME à ambientes KDE, e meu editor '
                + 'favorito é o GNU Emacs. Também adoro Home Labs, e estou construindo o meu com Raspbery PI. Acredito que isso '
                + ' baste sobre mim.'
        },

    ]
}
