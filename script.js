// ============ TESTIMONIALS MARQUEE ============
const testimonials1 = [
  {
    text: "Excelente profissional! Tive ótimos resultados! Confio muito no trabalho dele.",
    name: "Adriele Salles",
    role: "Paciente",
    gradient: "from-orange-50 to-white",
    border: "border-orange-100"
  },
  {
    text: "As orientações foram fundamentais para alcançar meu objetivo sem sofrimento.",
    name: "Alberto Bernardo",
    role: "Paciente",
    gradient: "from-emerald-50 to-white",
    border: "border-emerald-100"
  },
  {
    text: "Profissional de excelência. Excelente ouvinte e acompanhamento nota 10! Antes de tudo, um ser humano de excelência. Informações precisas. Gratidão!",
    name: "Ana Paula Sales",
    role: "Paciente",
    gradient: "from-neutral-50 to-white",
    border: "border-neutral-200"
  }
];

const testimonials2 = [
  {
    text: "Excelente, de um conhecimento ímpar. O melhor profissional que já me orientou.",
    name: "Carolina Mattos",
    role: "Paciente",
    gradient: "from-rose-50 to-white",
    border: "border-rose-100"
  },
  {
    text: "Em pouco mais de um mês, meus resultados foram extremamente satisfatórios — sem sofrimento. Em 3 meses de acompanhamento: -7kg e uma ótima recomposição corporal incrível!",
    name: "Emilly Ferreira",
    role: "Paciente",
    gradient: "from-violet-50 to-white",
    border: "border-violet-100"
  }
];

function renderTestimonialCard(t) {
  const card = document.createElement('article');
  card.className = `testimonial-card bg-gradient-to-br ${t.gradient} ${t.border} border`;
  
  const stars = Array(5).fill('<i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>').join('');
  
  card.innerHTML = `
    <div class="flex items-center mb-3">
      <div class="flex gap-0.5 text-orange-500">
        ${stars}
      </div>
    </div>
    <p class="text-neutral-700 leading-snug text-sm mb-3">"${t.text}"</p>
    <div class="flex items-center justify-between pt-3 border-t ${t.border}">
      <div>
        <div class="font-semibold text-neutral-900 text-xs">
          ${t.name}
        </div>
        <div class="text-[10px] text-neutral-500">
          ${t.role}
        </div>
      </div>
    </div>
  `;
  
  return card;
}

function renderTestimonials() {
  const marquee1 = document.getElementById('testimonials-marquee-1');
  const marquee2 = document.getElementById('testimonials-marquee-2');
  
  marquee1.innerHTML = '';
  marquee2.innerHTML = '';
  
  // Render marquee 1 (left) - twice for infinite loop
  [testimonials1, testimonials1].forEach(set => {
    set.forEach(t => {
      marquee1.appendChild(renderTestimonialCard(t));
    });
  });
  
  // Render marquee 2 (right) - twice for infinite loop
  [testimonials2, testimonials2].forEach(set => {
    set.forEach(t => {
      marquee2.appendChild(renderTestimonialCard(t));
    });
  });
  
  lucide.createIcons();
}

// Initialize testimonials on page load
document.addEventListener('DOMContentLoaded', () => {
  renderTestimonials();
  initCustomPhoneInput('imc');
  initCustomPhoneInput('sch');
});

function initCustomPhoneInput(fieldId) {
  const dropdown = document.getElementById(`${fieldId}-dropdown`);
  if (dropdown) {
    renderCountryDropdown(fieldId);
  }
}
const defaultConfig = {
  hero_headline: "Transforme seu corpo e sua saúde com ciência e equilíbrio",
  hero_subheadline: "Acompanhamento nutricional 100% online, personalizado e baseado em evidências científicas. Resultados reais para quem busca performance, emagrecimento e saúde a longo prazo.",
  doctor_name: "Dr. Thierry Teles",
  doctor_crn: "CRN5 - N° 18982 · Nutrição Esportiva",
  philosophy_quote: "Eu penso que se a dieta gera fome constante, não se encaixa na sua rotina ou exige um esforço impossível de sustentar, o problema não está na sua dedicação, está na estratégia.",
  final_cta_title: "Seu próximo capítulo começa com uma decisão",
  whatsapp_number: "+5575998855519",
  contact_email: "thierry.nutri@gmail.com",
  whatsapp_url: "https://wa.me/5575998855519",
  logo_url: "https://res.cloudinary.com/dantppsek/image/upload/v1778031414/WhatsApp_Image_2026-04-30_at_13.19.35_2_an5nzr.jpg",
  primary_color: "#EA580C",
  secondary_color: "#047857",
  background_color: "#FAF8F4",
  text_color: "#1a1a1a",
  accent_color: "#F59E0B",
  font_family: "Fraunces"
};

// Gerenciamento de estado do usuário (dados do IMC reutilizáveis)
let userSessionData = {};

function onConfigChange(config) {
  const c = { ...defaultConfig, ...config };
  document.getElementById('hero-headline').innerHTML = c.hero_headline.replace(/ciência/i, '<span class="italic" style="color:' + c.primary_color + '">ciência</span>').replace(/equilíbrio/i, '<span class="italic" style="color:' + c.secondary_color + '">equilíbrio</span>');
  document.getElementById('hero-subheadline').textContent = c.hero_subheadline;
  document.getElementById('doctor-name-display').textContent = c.doctor_name;
  document.getElementById('nav-name').textContent = c.doctor_name.split(' ').slice(0, 2).join(' ');
  document.getElementById('doctor-crn-display').textContent = c.doctor_crn;
  document.getElementById('nav-crn').textContent = c.doctor_crn.split('·')[0].trim();
  document.getElementById('final-cta-title-display').textContent = c.final_cta_title;
  
  // Atualizar logo
  if (c.logo_url && document.getElementById('nav-logo')) {
    document.getElementById('nav-logo').src = c.logo_url;
  }
  
  document.body.style.background = c.background_color;
  document.body.style.color = c.text_color;
  document.querySelectorAll('.font-serif').forEach(el => {
    el.style.fontFamily = `${c.font_family}, Fraunces, serif`;
  });
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities: (config) => ({
      recolorables: [
        { get: () => config.background_color || defaultConfig.background_color, set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); } },
        { get: () => config.secondary_color || defaultConfig.secondary_color, set: (v) => { config.secondary_color = v; window.elementSdk.setConfig({ secondary_color: v }); } },
        { get: () => config.text_color || defaultConfig.text_color, set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); } },
        { get: () => config.primary_color || defaultConfig.primary_color, set: (v) => { config.primary_color = v; window.elementSdk.setConfig({ primary_color: v }); } },
        { get: () => config.accent_color || defaultConfig.accent_color, set: (v) => { config.accent_color = v; window.elementSdk.setConfig({ accent_color: v }); } }
      ],
      borderables: [],
      fontEditable: { get: () => config.font_family || defaultConfig.font_family, set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); } },
      fontSizeable: undefined
    }),
    mapToEditPanelValues: (config) => new Map([
      ["hero_headline", config.hero_headline || defaultConfig.hero_headline],
      ["hero_subheadline", config.hero_subheadline || defaultConfig.hero_subheadline],
      ["doctor_name", config.doctor_name || defaultConfig.doctor_name],
      ["doctor_crn", config.doctor_crn || defaultConfig.doctor_crn],
      ["philosophy_quote", config.philosophy_quote || defaultConfig.philosophy_quote],
      ["final_cta_title", config.final_cta_title || defaultConfig.final_cta_title],
      ["whatsapp_number", config.whatsapp_number || defaultConfig.whatsapp_number],
      ["contact_email", config.contact_email || defaultConfig.contact_email],
      ["logo_url", config.logo_url || defaultConfig.logo_url]
    ])
  });
}

// ============ DATA SDK ============
let leadsCount = 0;
const dataHandler = {
  onDataChanged(data) {
    leadsCount = data.length;
  }
};
if (window.dataSdk) {
  window.dataSdk.init(dataHandler);
}

// ============ INTERNATIONAL PHONE INPUT ============
let itiInstances = {};

// Lista de países principais com flags
const countryList = [
  { code: 'br', flag: '🇧🇷', name: 'Brasil', dialCode: '+55' },
  { code: 'ar', flag: '🇦🇷', name: 'Argentina', dialCode: '+54' },
  { code: 'us', flag: '🇺🇸', name: 'EUA', dialCode: '+1' },
  { code: 'pt', flag: '🇵🇹', name: 'Portugal', dialCode: '+351' },
  { code: 'mx', flag: '🇲🇽', name: 'México', dialCode: '+52' },
  { code: 'es', flag: '🇪🇸', name: 'Espanha', dialCode: '+34' },
  { code: 'fr', flag: '🇫🇷', name: 'França', dialCode: '+33' },
  { code: 'it', flag: '🇮🇹', name: 'Itália', dialCode: '+39' },
  { code: 'de', flag: '🇩🇪', name: 'Alemanha', dialCode: '+49' },
  { code: 'gb', flag: '🇬🇧', name: 'Reino Unido', dialCode: '+44' },
  { code: 'au', flag: '🇦🇺', name: 'Austrália', dialCode: '+61' },
  { code: 'jp', flag: '🇯🇵', name: 'Japão', dialCode: '+81' },
];

let currentCountryState = {
  imc: { flag: '🇧🇷', code: '+55', name: 'Brasil' },
  sch: { flag: '🇧🇷', code: '+55', name: 'Brasil' }
};

function toggleCountryDropdown(event, fieldId) {
  event.stopPropagation();

  const dropdown = document.getElementById(`${fieldId}-dropdown`);
  const selector = event.target.closest('.country-flag-selector');
  const toggle = document.getElementById(`${fieldId}-toggle`);

  if (!dropdown || !selector || !toggle) return;

  const isOpen = dropdown.classList.contains('show');

  document.querySelectorAll('.country-dropdown-menu').forEach(d => d.classList.remove('show'));
  document.querySelectorAll('.country-dropdown-toggle').forEach(t => t.classList.remove('open'));

  if (!isOpen) {
    const rect = selector.getBoundingClientRect();

    let left = rect.left;

    // Evita sair da tela no mobile
    if (left + 280 > window.innerWidth) {
      left = window.innerWidth - 296;
    }

    dropdown.style.position = 'fixed';
    dropdown.style.top = `${rect.bottom + 8}px`;
    dropdown.style.left = `${Math.max(16, left)}px`;
    dropdown.style.width = '280px';
    dropdown.style.zIndex = '999999';

    dropdown.classList.add('show');
    toggle.classList.add('open');

    const searchInput = dropdown.querySelector('.country-search-input');

    if (searchInput) {
      setTimeout(() => searchInput.focus(), 100);
    }
  }
}

function renderCountryDropdown(fieldId) {
  const dropdown = document.getElementById(`${fieldId}-dropdown`);
  if (!dropdown) return;
  
  const searchHtml = `<input type="text" class="country-search-input" placeholder="Buscar país..." onkeyup="filterCountries(this, '${fieldId}')">`;
  const countriesHtml = countryList.map((country) => `
    <div class="country-item ${currentCountryState[fieldId]?.code === country.dialCode ? 'selected' : ''}" 
         onclick="selectCountry(event, '${fieldId}', '${country.flag}', '${country.dialCode}', '${country.name}')">
      <span class="country-item-flag">${country.flag}</span>
      <div class="country-item-info">
        <span class="country-item-name">${country.name}</span>
        <span class="country-item-code">${country.dialCode}</span>
      </div>
    </div>
  `).join('');
  
  dropdown.innerHTML = searchHtml + countriesHtml;
}

function filterCountries(input, fieldId) {
  const searchTerm = input.value.toLowerCase();
  const dropdown = document.getElementById(`${fieldId}-dropdown`);
  const items = dropdown.querySelectorAll('.country-item');
  
  items.forEach(item => {
    const name = item.querySelector('.country-item-name').textContent.toLowerCase();
    const code = item.querySelector('.country-item-code').textContent.toLowerCase();
    
    if (name.includes(searchTerm) || code.includes(searchTerm)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function selectCountry(event, fieldId, flag, dialCode, name) {
  const dropdown = document.getElementById(`${fieldId}-dropdown`);
  const toggle = document.getElementById(`${fieldId}-toggle`);
  const flagEl = document.getElementById(`${fieldId}-flag`);
  const codeEl = document.getElementById(`${fieldId}-code`);
  const phoneInput = document.getElementById(`${fieldId}-whatsapp`);
  
  currentCountryState[fieldId] = { flag, code: dialCode, name };
  
  if (flagEl) flagEl.textContent = flag;
  if (codeEl) codeEl.textContent = dialCode;
  
  // Atualizar selected state
  document.querySelectorAll(`#${fieldId}-dropdown .country-item`).forEach(item => {
    item.classList.remove('selected');
  });
  event.target.closest('.country-item').classList.add('selected');
  
  // Fechar dropdown
  if (dropdown) dropdown.classList.remove('show');
  if (toggle) toggle.classList.remove('open');
  
  // Focar no campo de telefone e abrir teclado
  if (phoneInput) {
    setTimeout(() => {
      phoneInput.focus();
      phoneInput.click();
    }, 100);
  }
}

// Fechar dropdown ao clicar fora
document.addEventListener('click', (e) => {
  if (!e.target.closest('.country-flag-selector') && !e.target.closest('.country-dropdown-menu')) {
    document.querySelectorAll('.country-dropdown-menu').forEach(d => d.classList.remove('show'));
    document.querySelectorAll('.country-dropdown-toggle').forEach(t => t.classList.remove('open'));
  }
});

function initPhoneInput(inputId) {
  // Legacy support - não fazer nada
}

function getFullPhoneNumber(inputId) {
  try {
    const input = document.getElementById(inputId);
    if (!input) return '';
    
    const fieldId = input.dataset.field || (inputId.includes('imc') ? 'imc' : 'sch');
    const dialCode = currentCountryState[fieldId]?.code || '+55';
    let number = input.value.trim();
    
    // Remove caracteres especiais
    number = number.replace(/\D/g, '');
    
    // Se não começa com o código do país, adicionar
    if (!number.startsWith(dialCode.replace('+', ''))) {
      return `${dialCode}${number}`;
    }
    
    return `${dialCode}${number}`;
  } catch (error) {
    console.error(`Erro ao obter telefone de ${inputId}:`, error);
    const input = document.getElementById(inputId);
    return input ? input.value.trim() : '';
  }
}

// ============ NAVBAR SCROLL ============
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 20) {
    nav.classList.add('shadow-sm');
  } else {
    nav.classList.remove('shadow-sm');
  }
});

// ============ IMC CALCULATOR ============
function classifyBMI(bmi) {
  if (bmi < 18.5) return {
    label: 'Abaixo do peso',
    color: 'bg-sky-100 text-sky-800',
    risk: '(Risco baixo)',
    oms: '⚠️ Classificação OMS (IMC < 18.5):\nVocê está abaixo do peso. A OMS recomenda investigação de causas (desnutrição, metabolismo acelerado, treino intenso). Uma intervenção nutricional AGORA previne complicações de saúde.',
    strategies: [
      'Aumento calórico gradual e monitorado',
      'Ganho de massa magra estruturado',
      'Otimização de micronutrientes',
      'Fortalecimento e recuperação',
      'Autonomia nutricional sustentável'
    ]
  };
  if (bmi < 25) return {
    label: 'Peso ideal',
    color: 'bg-emerald-100 text-emerald-800',
    risk: '(Risco baixo)',
    oms: '✓ Classificação OMS (IMC 18.5 - 24.9):\nParabéns! Seu IMC está na faixa saudável. O foco agora é recomposição corporal e otimização de performance.',
    strategies: [
      'Recomposição corporal (ganho + perda)',
      'Otimização de performance esportiva',
      'Melhora de marcadores metabólicos',
      'Educação nutricional definitiva',
      'Manutenção vitalícia com autonomia'
    ]
  };
  if (bmi < 30) return {
    label: 'Sobrepeso',
    color: 'bg-amber-100 text-amber-800',
    risk: '(Risco moderado)',
    oms: '⚠️ Classificação OMS (IMC 25 - 29.9):\nVocê está na faixa de sobrepeso. A OMS alerta que aumenta riscos cardiovasculares, metabólicos e de diabetes tipo 2. Uma intervenção nutricional estratégica AGORA previne progressão para obesidade.',
    strategies: [
      'Redução gradual e segura (0.5-1 kg/semana)',
      'Preservação de massa muscular',
      'Melhora de marcadores cardiovasculares',
      'Reversão de resistência insulínica',
      'Criação de hábitos sustentáveis'
    ]
  };
  if (bmi < 35) return {
    label: 'Obesidade Grau I',
    color: 'bg-orange-100 text-orange-800',
    risk: '(Risco alto)',
    oms: '⚠️ Classificação OMS (IMC 30 - 34.9):\nVocê está na faixa de obesidade grau I. A OMS enfatiza risco aumentado de doenças cardiometabólicas. Uma estratégia estruturada AGORA transforma sua saúde.',
    strategies: [
      'Perda progressiva de peso (6-9 kg/trimestre)',
      'Monitoramento clínico próximo',
      'Melhora de exames e inflamação',
      'Reversão de comorbidades',
      'Mudança permanente de estilo de vida'
    ]
  };
  return {
    label: 'Obesidade Grau II+',
    color: 'bg-rose-100 text-rose-800',
    risk: '(Risco muito alto)',
    oms: '⚠️ Classificação OMS (IMC ≥ 35):\nVocê está na faixa de obesidade severa. A OMS recomenda intervenção nutricional imediata e acompanhamento médico. Uma abordagem humanizada e científica traz resultados significativos.',
    strategies: [
      'Redução de peso com segurança clínica',
      'Readequação metabólica gradual',
      'Melhora significativa de saúde',
      'Reversão de condições associadas',
      'Reconstrução completa de hábitos'
    ]
  };
}

document.getElementById('imc-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = document.getElementById('imc-submit');
  const submitText = document.getElementById('imc-submit-text');
  
  try {
    submitBtn.disabled = true;
    submitText.textContent = 'Processando...';

    // Obter dados com proteção contra erros
    let name, email, whatsapp, weight, height, goal, difficulty;
    
    try {
      name = document.getElementById('imc-name').value.trim();
      email = document.getElementById('imc-email').value.trim();
      whatsapp = getFullPhoneNumber('imc-whatsapp');
      weight = parseFloat(document.getElementById('imc-weight').value);
      height = parseFloat(document.getElementById('imc-height').value) / 100;
      goal = document.getElementById('imc-goal').value;
      difficulty = document.getElementById('imc-difficulty').value;
    } catch (error) {
      console.error('Erro ao obter dados do formulário:', error);
      showToast('Erro', 'Verifique os dados do formulário');
      return;
    }

    // Validar dados básicos
    if (!name || !email) {
      showToast('Campos obrigatórios', 'Preencha nome e email');
      return;
    }

    // Se não conseguir telefone, continuar mesmo assim (não é travante)
    if (!whatsapp) {
      console.warn('Telefone não obtido, continuando...');
    }

    // Guardar dados para reutilização no agendamento
    userSessionData = { name, email, whatsapp, weight, height: height * 100, goal, difficulty };

    // Calcular IMC
    const bmi = weight / (height * height);
    const bmiRounded = Math.round(bmi * 10) / 10;
    const classification = classifyBMI(bmi);

    // Verificar limite de dados
    if (leadsCount >= 999) {
      showToast('Limite atingido', 'Contate para mais informações.');
      return;
    }

    // Salvar no Data SDK
    if (window.dataSdk) {
      try {
        const result = await window.dataSdk.create({
          name, email, whatsapp: whatsapp || 'não informado', weight, height: height * 100,
          goal, difficulty, bmi: bmiRounded, classification: classification.label,
          createdAt: new Date().toISOString(), type: 'lead_imc',
          plan: '', day_preference: '', time_preference: ''
        });
        
        if (!result.isOk) {
          console.error('Erro ao salvar dados:', result.error);
          showToast('Atenção', 'IMC calculado, mas dados não foram salvos. Tente novamente.');
          // Continuar mesmo assim para mostrar o resultado
        }
      } catch (sdkError) {
        console.error('Erro SDK:', sdkError);
        showToast('Atenção', 'Cálculo feito, mas houve erro ao salvar.');
      }
    }

    // Exibir resultado
    try {
      document.getElementById('imc-step-1').classList.add('hidden');
      const resultDiv = document.getElementById('imc-result');
      resultDiv.classList.remove('hidden');

      document.getElementById('imc-value').textContent = bmiRounded;
      const classEl = document.getElementById('imc-class-badge');
      classEl.textContent = classification.label;
      classEl.className = 'inline-block mt-3 px-5 py-2 rounded-full text-sm font-bold ' + classification.color;
      document.getElementById('imc-risk-level').textContent = classification.risk;
      document.getElementById('imc-oms-text').textContent = classification.oms;

      const minWeight = 18.5 * (height * height);
      const maxWeight = 24.9 * (height * height);
      const idealWeight = (minWeight + maxWeight) / 2;
      const difference = weight - idealWeight;
      const diffText = difference > 0 ? `+${difference.toFixed(1)} kg acima do ideal` : `${Math.abs(difference).toFixed(1)} kg abaixo do ideal`;

      document.getElementById('weight-range-display').textContent = `${minWeight.toFixed(1)} - ${maxWeight.toFixed(1)} kg`;
      document.getElementById('weight-target-display').textContent = `${idealWeight.toFixed(1)} kg`;
      document.getElementById('weight-diff-display').textContent = diffText;

      classification.strategies.forEach((strat, idx) => {
        const elem = document.getElementById(`strat-${idx + 1}`);
        if (elem) elem.textContent = strat;
      });

      showToast('Pronto!', 'Veja sua análise personalizada abaixo.');
    } catch (displayError) {
      console.error('Erro ao exibir resultado:', displayError);
      showToast('Cálculo feito', 'Houve erro ao exibir resultado. Recarregue a página.');
    }

  } catch (error) {
    console.error('Erro geral no IMC:', error);
    showToast('Ops!', 'Erro ao processar. Tente novamente.');
  } finally {
    // Sempre restaurar o botão
    submitBtn.disabled = false;
    submitText.textContent = 'Salvar e Calcular IMC';
  }
});

function resetImcForm() {
  document.getElementById('imc-form').reset();
  document.getElementById('imc-step-1').classList.remove('hidden');
  document.getElementById('imc-result').classList.add('hidden');
}

// ============ SCHEDULE MODAL - NEW FLOW ============
let currentPlan = null;
let currentUserData = {};

function openScheduleModal(plan) {
  currentPlan = plan;
  
  // Se houver dados da sessão (do IMC), usar; caso contrário, vazio
  currentUserData = userSessionData && Object.keys(userSessionData).length > 0 
    ? { ...userSessionData } 
    : {};
  
  const planNames = {
  retorno: 'Retorno / acompanhamento',
  unica: 'Consulta única — R$ 300',
  trimestral: 'Trimestral — R$ 757',
  semestral: 'Semestral — R$ 1.297'
};
  
  document.getElementById('plan-name-display').textContent = planNames[plan] || plan;
  
  // Pré-preencher campos se houver dados
  if (currentUserData.name) document.getElementById('sch-name').value = currentUserData.name;
  if (currentUserData.email) document.getElementById('sch-email').value = currentUserData.email;
  if (currentUserData.whatsapp) document.getElementById('sch-whatsapp').value = currentUserData.whatsapp;
  if (currentUserData.weight) document.getElementById('sch-weight').value = currentUserData.weight;
  if (currentUserData.height) document.getElementById('sch-height').value = currentUserData.height;
  if (currentUserData.goal) document.getElementById('sch-goal').value = currentUserData.goal;
  
  document.getElementById('sch-step-1').classList.remove('hidden');
  document.getElementById('sch-step-2').classList.add('hidden');
  
  const modal = document.getElementById('schedule-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.classList.add('modal-open');
}

function closeScheduleModal() {
  const modal = document.getElementById('schedule-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.classList.remove('modal-open');
  resetScheduleFlow();
}

function resetScheduleFlow() {
  document.getElementById('sch-step-1').classList.remove('hidden');
  document.getElementById('sch-step-2').classList.add('hidden');
  document.getElementById('schedule-form-step1').reset();
  document.getElementById('schedule-form-step2').reset();
  document.querySelectorAll('.day-btn, .time-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('sch-day').value = '';
  document.getElementById('sch-time').value = '';
  currentUserData = {};
}

function resetScheduleForm() {
  document.getElementById('schedule-form-step1').reset();
}

// Step 1: Submit and go to Step 2
document.getElementById('schedule-form-step1').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('sch-name').value.trim();
  const email = document.getElementById('sch-email').value.trim();
  const whatsapp = getFullPhoneNumber('sch-whatsapp');
  const weight = document.getElementById('sch-weight').value;
  const height = document.getElementById('sch-height').value;
  const goal = document.getElementById('sch-goal').value;
  
  if (!name || !email || !whatsapp) {
    showToast('Campos obrigatórios', 'Preencha nome, email e WhatsApp');
    return;
  }
  
  currentUserData = { name, email, whatsapp, weight, height, goal };
  
  document.getElementById('sch-step-1').classList.add('hidden');
  document.getElementById('sch-step-2').classList.remove('hidden');
});

// Day buttons
document.querySelectorAll('.day-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('sch-day').value = btn.dataset.day;
  });
});

// Time buttons
document.querySelectorAll('.time-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('sch-time').value = btn.dataset.time;
  });
});

// Step 2: Submit and send to WhatsApp
document.getElementById('schedule-form-step2').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const day = document.getElementById('sch-day').value;
  const time = document.getElementById('sch-time').value;
  
  if (!day || !time) {
    showToast('Selecione', 'Escolha dia e turno');
    return;
  }
  
  const btn = document.getElementById('sch-submit-2');
  btn.disabled = true;
  
  if (leadsCount >= 999) {
    showToast('Limite atingido', 'Entre em contato pelo WhatsApp.');
    btn.disabled = false;
    return;
  }
  
  const planNames = {
    unica: 'Consulta única',
    trimestral: 'Trimestral',
    semestral: 'Semestral'
  };
  
  // Atualizar dados com dia e turno selecionados
  const finalData = {
    ...currentUserData,
    day_preference: day,
    time_preference: time
  };
  
  if (window.dataSdk) {
    await window.dataSdk.create({
      name: finalData.name,
      email: finalData.email,
      whatsapp: finalData.whatsapp,
      weight: finalData.weight ? parseFloat(finalData.weight) : 0,
      height: finalData.height ? parseFloat(finalData.height) : 0,
      goal: finalData.goal || '',
      difficulty: finalData.difficulty || '',
      bmi: 0,
      classification: planNames[currentPlan],
      createdAt: new Date().toISOString(),
      type: 'agendamento',
      plan: currentPlan,
      day_preference: day,
      time_preference: time
    });
  }
  
  // Montar mensagem WhatsApp com todos os dados
  const message = buildWhatsAppMessage(finalData, planNames[currentPlan]);
  
  openWhatsApp(message);
  closeScheduleModal();
  showToast('Enviado!', 'Redirecionando para WhatsApp...');
  btn.disabled = false;
});

function openPlansModal() {
  const modal = document.getElementById('plans-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.classList.add('modal-open');
}

function closePlansModal() {
  const modal = document.getElementById('plans-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.classList.remove('modal-open');
}

function selectPlanAndNavigate(plan) {
  closePlansModal();
  openScheduleModal(plan);
}
function openEntryModal() {
  const modal = document.getElementById('entry-modal');

  if (!modal) return;

  modal.classList.remove('hidden');
  modal.classList.add('flex');

  document.body.classList.add('modal-open');

  lucide.createIcons();
}

function closeEntryModal() {
  const modal = document.getElementById('entry-modal');

  if (!modal) return;

  modal.classList.add('hidden');
  modal.classList.remove('flex');

  document.body.style.overflow = '';
}

function openPatientSchedule() {
  closeEntryModal();

  openScheduleModal('retorno');
}
function openPlansFlow() {
  closeEntryModal();

  const plansSection = document.getElementById('planos');

  if (plansSection) {
    plansSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Função auxiliar para montar mensagem WhatsApp completa
function buildWhatsAppMessage(userData, planName) {
  let msg = `Olá Dr. Thierry! 👋\n\nMeu nome é ${userData.name}.\n\nQuero iniciar o acompanhamento nutricional.\n\n`;
  
  if (userData.weight) msg += `📊 Peso: ${userData.weight} kg\n`;
  if (userData.height) msg += `📏 Altura: ${userData.height} cm\n`;
  if (userData.goal) msg += `🎯 Objetivo: ${userData.goal}\n`;
  if (userData.day_preference) msg += `📅 Dia: ${userData.day_preference}\n`;
  if (userData.time_preference) msg += `⏰ Turno: ${userData.time_preference}\n`;
  
  msg += `\n📦 Plano: ${planName}\n\n`;
  msg += `Email: ${userData.email}\nWhatsApp: ${userData.whatsapp}\n\n`;
  msg += `Aguardo retorno para confirmação. Obrigado!`;
  
  return msg;
}

function openWhatsApp(message) {
  const url = (window.elementSdk?.config?.whatsapp_url) || defaultConfig.whatsapp_url;
  const finalUrl = `${url}?text=${encodeURIComponent(message)}`;
  window.open(finalUrl, '_blank', 'noopener,noreferrer');
}

// ============ TOAST ============
let toastTimer;
function showToast(title, msg) {
  clearTimeout(toastTimer);
  document.getElementById('toast-title').textContent = title;
  document.getElementById('toast-msg').textContent = msg;
  const t = document.getElementById('toast');
  t.classList.remove('hidden');
  toastTimer = setTimeout(() => t.classList.add('hidden'), 3500);
}

// Close modals on backdrop click
document.getElementById('schedule-modal').addEventListener('click', (e) => {
  if (e.target.id === 'schedule-modal') closeScheduleModal();
});

document.getElementById('plans-modal').addEventListener('click', (e) => {
  if (e.target.id === 'plans-modal') closePlansModal();
});
document.getElementById('entry-modal').addEventListener('click', (e) => {
  if (e.target.id === 'entry-modal') closeEntryModal();
});
// Init icons
lucide.createIcons();
