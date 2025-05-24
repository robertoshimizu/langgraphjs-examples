/**
 * This interface is the structure of the PACK medical procedures.
 * @param {string} titulo - The title of the procedure.
 * @param {number} pagina - The page number of the procedure.
 * @param {string} conteudo - The content of the procedure.
 */
export interface Pack {
  titulo: string
  pagina: number
  conteudo: string
}

/**
 * This const is the array of PACK medical procedures.
 * @param {string} titulo - The title of the procedure.
 * @param {number} pagina - The page number of the procedure.
 * @param {string} conteudo - The content of the procedure.
 * @returns {Arar[]} - The formatted procedure as an array of objects.
 *
 */
export const pack: Pack[] = [
  {
    titulo: 'Paciente com uma emergência',
    pagina: 24,
    conteudo: `

        Paciente com uma emergência
                
        1. Atenda o paciente com uma emergência:
          *Paciente responde à sua voz ou estímulo físico? - Se responder vá para item 2. (Avalie e maneje via aérea, respiração, circulação e nível de consciência)

        1.1. Não responde:
          *Chame ajuda, contate o SAMU (192) e, se disponível, providencie um desfibrilador.
          *Procure o pulso (carotídeo ou femoral) por no máximo 10 segundos:

        1.1.1. Sem pulso ou não tem certeza:
          *Inicie RCP (Se paciente tem uma doença terminal, considere se deve ou não prosseguir. Se RCP não for necessária, pois paciente está em cuidados paliativos, verificar texto “Cuidados Paliativos de Rotina”).
          *Faça ciclos de 30 compressões torácicas e 2 respirações (na velocidade de 100-120 compressões por minuto).
          *Se desfibrilador disponível, verifique ritmo. Se chocável, aplique 1 choque e retome RCP imediatamente.
          *Aplique adrenalina 1 mg (1:1000) EV, seguida de lavagem com 5 mL de soro fisiológico. Repita cada 3-5 minutos.
          *Se desfibrilador disponível, verifique ritmo cada 2 minutos (5 ciclos) e aplique choque se necessário. Se não disponível/não chocável, verifique pulso:
        Se pulso cheio retornar, pare RCP e verifique respiração (ver abaixo).
        Se sem pulso, continue RCP por pelo menos 30 minutos (Continue RCP por mais tempo se temperatura <35°C, afogamento, envenenamento ou overdose de medicamentos).
        *Se pulso retornar, ir para item 2.

        1.1.2. Paciente com pulso. O paciente está respirando?
        1.1.2.1. Não:
          *Verifique se as vias aéreas estão desobstruídas.
          *Faça 1 respiração a cada 6 segundos com balão de oxigênio e máscara.
          *Verifique pulso a cada 2 minutos. Se sem pulso, inicie RCP (veja acima).
          *Se respiração retornar, seguir avaliação no item 2.

        1.1.3. Paciente com pulso e respirando - Ir para item 2. 

        2. Avalie e maneje via aérea, respiração, circulação e nível de consciência:
        2.1.  Via aérea:
          *Se via aérea obstruída (roncos, gargarejos, ruídos respiratórios), abra com manobra de inclinação da cabeça e elevação do queixo. Se trauma, faça ao invés a manobra de elevação da mandíbula, mantendo o pescoço estável.
          *Remova corpos estranhos da boca e faça sucção de fluídos.
          *e inconsciente, insira cânula orofaríngea. Se houver resistência, engasgo ou vômito, utilize uma cânula nasofaríngea lubrificada.
          *Intube se incapaz de manter via aérea com cânula.

        2.2. Respiração:
          *Se falta de ar ou SaO2 < 90%, aplique oxigênio 1-6 L/min via cânula nasal.
          *Se FR < 9 ou lábios/língua azul(is), conecte bolsa-válvula-máscara ao oxigênio e ventile lentamente a cada respiração com o paciente.
          *Intube se ainda tiver dificuldade para respirar, SaO2 < 90% ou lábios/língua azul(is).
          *Se falta de ar súbita, ruídos respiratórios diminuídos/mais ressonantes/dor em um dos lados, com desvio de traqueia: provável pneumotórax hipertensivo:
        Insira um cateter calibre 14 acima da 3ª costela na linha médio clavicular. Providencie um dreno torácico.

        2.3. Circulação:
          *Estabeleça acesso EV.
          *Se PAS < 90, FC ≥ 100 ou sangramento intenso: aplique cloreto de sódio 0,9% 250 mL EV rápido, repita até PAS > 90. Pare se houver falta de ar ou novas crepitações pulmonares.
          *Pare sangramento: aplique pressão e eleve membros. Se sangramento intenso persistir, aplique torniquete acima do ferimento.

        2.4. Nível de consciência:
          *Pontuação na Escala de Coma de Glasgow (ECG): Some os pontos abaixo para ter um único resultado de até 15 pontos: Se ECG ≤ 8, intube o paciente.

        Melhor resposta motora
            Obedece comandos - 6
            Localiza a dor - 5
            Retira o estímulo à dor - 4
            Flexão anormal à dor - 3
            Extensão à dor - 2
            Nenhuma - 1

        Melhor resposta verbal
            Orientado - 5
            Confuso - 4
            Palavras inapropriadas - 3
            Sons incompreensíveis - 2
            Nenhuma - 1

        Abertura ocular
            Espontânea - 4
            Ao chamado - 3
            Na dor - 2
            Nenhuma - 1

        3. Seguimento do cuidado. Continue o manejo de acordo com o problema e os sintomas:
          *Se pupilas assimétricas ou com pouca resposta à luz, eleve a cabeça em 30 graus. Se ferido, mantenha o corpo reto e incline elevando a cabeça (não curve a coluna).
          *Imobilize o pescoço com colar cervical rígido (se disponível) e sacos de areia/blocos em ambos os lados da cabeça/pescoço se paciente ferido e >1: lesão na cabeça, ECG < 15, sensibilidade no pescoço/coluna, membro fraco/dormente ou pupilas anormais. Use prancha de imobilização se necessário para mover o paciente.
          *Identifique todos os ferimentos e procure causas: desnude o paciente e avalie frente e costas. Se ferido, utilize rolagem para virar. Então cubra e mantenha aquecido.
          *Continue avaliando o paciente de acordo com os sintomas. Se inconsciente, verificar texto “Diminuição do nível de consciência. Se ferido, verificar texto “Paciente com ferimentos”).

        `
  },
  {
    titulo: 'Diminuição do nível de consciência',
    pagina: 25,
    conteudo: `
         Diminuição do nível de consciência


 1.   	Atenda com urgência paciente com diminuição do nível de consciência:
*Primeiro avalie e maneje vias aéreas, respiração, circulação e nível de consciência (verificar texto “Paciente com uma emergência)
*Identifique todos os ferimentos e procure causas: desnude paciente e avalie frente e costas. Se ferido, utilize rolagem para evitar movimentos de coluna em casos de trauma. Então cubra e mantenha aquecido.
*Se convulsões, ferimentos ou queimaduras, também maneje conforme página do sintoma.
*Se início súbito de rebaixamento do nível de consciência e > 1: coceira/rash generalizado, edema de face/língua, falta de ar, dor abdominal intensa, vômito persistente ou exposição à possível alérgeno (Alérgeno pode ser: picada de inseto, ingestão de um medicamento ou uma comida nova nas últimas horas.), considere anafilaxia (Verificar texto “Anafilaxia”)
 
2.   	Verifique glicemia, temperatura e pupilas:
 
2.1.               Glicemia
2.1.1        < 70 mg/dL?
*Aplique glicose 50% 25mL EV em 1-3 minutos.
*Repita se glicemia ainda < 70mg/dL após 15 minutos.
*Se alcoolismo/malnutrição também aplique tiamina 200mg EV.
*Continue glicose 5% 1L EV a cada 6 horas.
 
2.1.2. 	Glicemia > 200mg/dL?
*Aplique cloreto de sódio 0,9% 20mL/Kg EV na primeira hora, então 10mL/Kg/hora EV até encaminhamento. Pare se surgirem falta de ar ou novas crepitações pulmonares.
 
2.2.              Temperatura
2.2.1. 	≤ 35°C
*Remova roupas frias/molhadas e cubra com cobertores quentes.
*Aqueça fluidos EV a 40oC (evite fluidos frios).
*Se não responder ou temperatura ≤ 32°C, também use aquecedor externo.
 
2.2.2. 	Temperatura ≥ 38°C
*Aplique ceftriaxona 2g IM.
*Se temperatura > 40°C:
Remova roupas.
Use ventilador e spray de água para resfriar paciente.
Aplique pacotes de gelo nas axilas, virilha e pescoço.
Pare assim que temperatura < 39°C.
 
2.3.              Pupilas
2.3.1. 	Ambas pupilas igualmente diminuídas (miose)
2.3.1.1.            Se uso de drogas ilícitas e/ou FR < 12 - Provável overdose por opioides.
*Aplique oxigênio via cânula nasal (1-2L/min). Se disponível, aplique naloxona 0,4mg EV. Repita cada 2-3 minutos, aumente dose em 0,4mg cada vez até FR >12, máximo de 10mg.
*Discuta ou contate o Centro de Informações Toxicológicas (0800 643 5252) ou Disque-Intoxicação (0800 722 6001).
 
2.3.1.2.            Se secreções excessivas ou contraturas musculares - Provável envenenamento por organofosforado.
*Se disponível, aplique atropina 2mg EV. Repita cada 5 minutos, dobrando dose cada vez, até secreções controladas.
*Remova roupas contaminadas e lave a pele.
*Discuta ou contate o Centro de Informações Toxicológicas (0800 643 5252) ou Disque-Intoxicação (0800 722 6001).
 
2.3.2. 	Ambas pupilas igualmente dilatadas (midríase) – Provável overdose por drogas estimulantes.
*Discuta ou contate o Centro de Informações Toxicológicas (0800 643 5252) ou Disque-Intoxicação (0800 722 6001).
 
2.3.3. 	Assimétricas ou com pouca resposta à luz
*Erga a cabeça em 30 graus. Se ferido, mantenha o corpo reto e incline elevando a cabeça (não curve a coluna).
 
3.                 Cuidados adicionais.
*Encaminhe com urgência.
*Enquanto aguarda a remoção:
Verifique PA, FC, FR, SaO2 e nível de consciência (Glasgow) a cada 15 minutos. Insira cateter urinário, se disponível.
Se PAS < 90, FC > 100, FR > 20 ou < 9, SaO2 < 90% ou queda no nível de consciência (Glasgow), reavalie e maneje vias aéreas, respiração, circulação e nível de consciência (verificar texto “Paciente com uma emergência”).
 
`
  },
  {
    titulo: 'Avalie e maneje glicemia capilar aleatória',
    pagina: 26,
    conteudo: `
   
Avalie e maneje glicemia capilar aleatória      
 1.   	Se diabetes conhecida, verificar texto “Diabetes: cuidados de rotina”). Somente verifique glicemia capilar aleatória se paciente não está bem ou tem sintomas de diabetes (sede, aumento de frequência urinaria, perda de peso).
 
2.   	Interpretação e manejo de glicemia capilar aleatória em paciente que não tem diabetes conhecida:
 
2.1.              < 55 mg/dL - Paciente tem hipoglicemia - Atenda com urgência
*Paciente está alerta?
 
2.1.1. 	Sim
*Dê glicose via oral - Uma colher de sopa de açúcar (pode ser diluída em 1 copo de água) ou meio copo de suco/refrigerante com açúcar.
*Se incapaz de ingerir, aplique glicose 50% 25mL EV em 1-3min.
*Verifique glicose após 15 minutos:
*Se glicemia persistir < 55 mg/dL, dê glicose (oral ou EV) novamente e verifique após 15 minutos. Se ainda < 55, repita glicose via oral ou EV e discuta.
*Quando glicemia estiver > 55 mg/dL, discuta para investigar a causa.
 
2.1.2. 	Não
*Se alcoolismo ou desnutrição, aplique tiamina 200mg IM.
*Aplique glicose 50% 25mL EV em 1-3min.
*Se inconsciente (Verificar texto “Diminuição do nível de consciência”)
*Se convulsionando (Verificar texto “Convulsões”)
*Verifique glicose após 15 minutos
*Se glicemia persistir < 55 mg/dL, aplique novamente glicose 50% 25mL EV em 1-3min e continue glicose 5% 1L EV cada 6 horas. Neste caso encaminhe com urgência
*Quando glicemia estiver > 55 mg/dL, discuta para investigar a causa.
 
2.2.              Glicemia entre 55-129 mg/dL – Verifique necessidade de rastrear diabetetes (Verificar texto “Diabetes: rastreio e diagnóstico”)
 
 
2.3.              Glicemia entre 130-199 mg/dL - Solicite glicemia após jejum de 8 horas e verifique resultado.
 
2.3.1. 	< 110
*Repita glicemia de jejum após 1 ano.
*Avalie e maneje risco cardiovascular (Veriricar texto “Risco Cardiovascular (RCV): avaliação”)
 
2.3.2. 	110-125
*Risco aumentado para diabetes
*Repita glicemia de jejum
 
2.3.2.1.            <126
*Repita glicemia de jejum após 1 ano.
*Avalie e maneje risco cardiovascular (Veriricar texto “Risco Cardiovascular (RCV): avaliação”)
 
2.3.2.2.            >126
*Realize uma segunda glicemia de jejum para confirmar a diabetes se a primeira for ≥ 126 (2 glicemias de jejum > 126 confirmam diabetes)
 
2.3.2.2.1.	Se confirmar >126 mg/dL ou mais
*Diagnostique diabetes
*Se < 35 anos, considere diabetes tipo 1 e discuta.
*Se ≥ 35 anos, ofereça cuidados de rotina para diabetes (Verificar texto “Diabetes: cuidados de rotina”).
 
2.3.2.2.2.	Se <126 mg/dL na confirmação
*Repita glicemia de jejum após 1 ano.
*Avalie e maneje risco cardiovascular (Veriricar texto “Risco Cardiovascular (RCV): avaliação”)
 
2.4.              Glicemia > 200 mg/dL
Tem algum dos sintomas abaixo, indicando necessidade de atenção urgente?
*Diminuição da consciência (Verificar texto “Diminuição do nível de consciência)
*Dor no peito (Verificar texto “Dor no Peito”)
*Convulsões (Verificar texto “Confusão”)
*Confusão
*Sonolência
*Respiração rápida
*Náuseas ou vômitos (Verificar texto “Náuseas ou vômitos”)
*Dor abdominal (verificar texto “Dor abdominal”)
*Temperatura ≥ 38oC
*Desidratação (Sede sucessiva, mucosas secas, turgor da pele diminuído, olhos encovados, PAS < 90, FC > 100)
 
2.4.1. 	Não
*Tem sintomas de diabetes: sede, aumento da frequência urinária, perda de peso?
 
2.4.1.1.            Não – Solicite glicemia após jejum de 8 horas e verifique resultado - De acordo com o resultado, seguir conduta conforme o item 2.3
 
2.4.1.2.            Sim – Diagnostique Diabetes
*Se < 35 anos, considere diabetes tipo 1 e discuta.
*Se ≥ 35 anos, ofereça cuidados de rotina para diabetes (Verificar texto “Diabetes: cuidados de rotina).
 
 
2.4.2. 	Sim
*Aplique cloreto de sódio 0,9% 20mL/Kg EV na primeira hora, então 10mL/Kg/hora EV até encaminhamento. Interrompa se surgirem sinais de sobrecarga hídrica, como falta de ar ou crepitações pulmonares novas.
*Encaminhe com urgência.
 


`
  },
  {
    titulo: 'Paciente com ferimentos',
    pagina: 27,
    conteudo: `
        Paciente com ferimentos
 
1.        Atenda com urgência paciente com ferimentos:
*Primeiro avalie/maneje vias aéreas, respiração, circulação e nível de consciência (verificar texto “Paciente com uma emergência”).
*Identifique ferimentos/causas: desnude, avalie frente/costas. Se trauma na cabeça ou coluna, utilize rolagem para virar. Então cubra/mantenha aquecido.
 
1.1.               Abordagem conforme a apresentação nos casos urgentes
 
1.1.1.        Hematomas e sangue na urina
*Aplique cloreto de sódio 0,9% 1L EV cada hora por 2 horas.
*Se fluxo urinário > 200mL/hora, aplique 500mL/hora.
*Pare se falta de ar piorar.
 
1.1.2. 	Ferida e ≥ 1 dos seguintes:
*Baixa perfusão abaixo da lesão: membro frio, pálido ou sem pulso.
*Sangramento excessivo ou pulsátil.
*Ferida penetrante na cabeça/pescoço/tórax/abdome.
Nestes casos, trate da seguinte maneira:
*Aplique cloreto de sódio 0,9% 250mL EV rápido, repita até PAS > 90. Pare se falta de ar ou novas crepitações pulmonares.
*Se sangramento excessivo ou pulsátil, aplique pressão direta e eleve o membro.
*Se sangramento grave e persistente, faça torniquete acima da ferida.
 
1.1.3.     Fratura e ≥ 1 dos seguintes:
*Baixa perfusão abaixo da lesão: frio, pálido, dormente, sem pulso.
*Aumento da dor, rigidez muscular, membro dormente.
*Suspeita de fratura de fêmur, pelve ou coluna.
*Fraqueza ou dormência abaixo da fratura.
*Ferida aberta próximo a fratura.
*3 costelas fraturadas.
*Deformidade grave.
Nestes casos, trate da seguinte maneira.
*Aplique morfina 5mg EV.
*Se baixa perfusão ou fraqueza/dormência abaixo da fratura: gentilmente realinhe na posição normal.
*Se fratura exposta: remova corpo estranho, irrigue com cloreto de sódio 0,9% e cubra com gase embebida em solução salina. Aplique ceftriaxona 2g IM.
*Coloque tala e imobilize articulação acima e abaixo da fratura.
*Se fratura pélvica, amarre lençóis no quadril para imobilizar.
 
1.1.4.     Ferimento na cabeça e ≥ 1 dos seguintes:
*Qualquer perda de consciência.
*Convulsão ou amnesia.
*Dor de cabeça grave.
*Suspeita de fratura craniana.
*Hematomas ao redor dos olhos ou atrás das orelhas.
*Sangue atrás do tímpano.
*Sangramento ou fluido claro do nariz ou orelha.
*Pupílas assimétricas ou pouca resposta à luz.
*Membro(s) fraco/dormente(s).
*Vômitos ≥ 2 vezes.
*≥ 1 outro trauma.
*Intoxicação por álcool/droga.
Nestes casos, trate da seguinte maneira:
*Se ECG < 15, sensibilidade no pescoço/coluna, membro fraco/dormente ou pupilas anormais: coloque colar cervical rígido (se disponível) e sacos de areia/blocos nos lados da cabeça/pescoço.
*Se pupílas assimétricas ou pouca resposta à luz, deixe o corpo reto e incline elevando a cabeça (não curve a coluna).
*Se convulsão, aplique, se disponível, fenitoína 20mg/Kg EV em 60 minutos (evite aplicar lorazepam/diazepam).
 
1.2.          Encaminhe com urgência os casos acima.
*Enquanto aguarda transporte, verifique PA, FC, FR, SaO2 e nível de consciência (Glasgow) cada 15 minutos.
*Se PAS < 90, FC > 100 ou < 50, FR > 20 ou < 9, SaO2 < 90% ou queda do nível de consciência (Glasgow), verifique e maneje via aérea, respiração, circulação e nível de consciência (verificar texto “Paciente com uma emergência”)
 
2. 	Abordagem do paciente com ferimentos que não necessita de atenção urgente
*Encaminhe no mesmo dia se gestante, distúrbio de coagulação conhecido, em uso de anticoagulante, envolvido em colisão com alta velocidade, ejetado ou atingido por veículo ou queda > 3 metros.
*Se ferimento aberto, dê reforço da vacina dT (difteria e tétano) se última dose há > 5 anos. Se < 3 doses na vida/desconhecido, complete doses e discuta/encaminhe para soro/imunoglobulina antitetânica.
*No último ano: 1) bebeu ≥ 4 doses1/vez. Uma dose é 50mL (um copinho) de destilados, 125mL (uma taça pequena) de vinho ou 330mL (uma lata ou garrafinha) de cerveja. 2) usou drogas ilegais ou 3) abusou de medicamentos com/sem prescrição? se sim para qualquer um, verificar texto “Uso de álcool/drogas”. Se violência sexual, verificar texto “Paciente em situação de violência”.
 
2.1.          Ferimento
*Aplique pressão diretamente para parar sangramento.
*Remova corpo estranho, pele solta/morta. Se sujo: irrigue com cloreto de sódio 0,9% ou solução iodopovidona diluída (Dilua 1 parte de iodopovidona com 9 partes de cloreto de sódio 0,9%).
*Se sutura necessária: suture e considere aplicar mupirocina 2% pomada e curativos não aderentes por 24 horas. Se mupirocina não disponível, considere neomicina 5mg/g + bacitracina 250UI/g.
*Não suture se > 12h (corpo), > 24h (cabeça/pescoço), restos de corpo estranho, infectado, tiro ou puntiforme fundo:
- Limpe e cubra com gaze em solução salina. Se sinais de infecção (vermelhidão, calor, dor), dê cefalexina 500mg cada 6 horas por 5 dias. Reavalie em 2 dia: se sem infecção e se necessário, suture. Se tiro/puntiforme fundo, não suture e lave/cubra cada 2 dias.
*Prescreva paracetamol ou dipirona (não prescreva se alergia) 500-1000mg cada 6 horas se necessário por até 5 dias e oriente retornar se sinais de infecção.
*Remova sutura após 5 dias (face), 4 dias (pescoço), 10 dias (pernas) ou 7 dias (resto do corpo).
*Se fraqueza/dormência abaixo da lesão, discuta. Se cicatrizar < 50% após 6 semanas ou não cicatrizar > 3 meses, verificar texto “Úlceras de pele ou feridas que não cicatrizam: diagnóstico”.
 
2.2.          Fratura
*Coloque tala e imobilize articulação acima e abaixo da fratura.
*Prescreva dipirona ou paracetamol 500-1000mg cada 6 horas e codeína 30mg cada 4 horas se necessário.
*Encaminhe mesmo dia.
 
2.3.          Ferimento na cabeça
*Observe por 2 horas antes de liberar com cuidador.
*Se dor de cabeça leve, tontura, confusão mental, provável concussão:
- Oriente repouso absoluto 2 dias. Se sem sintomas após 3 dias, aumente atividade.
- Oriente que a recuperação pode levar > 1 mês.
- Prescreva paracetamol ou dipirona 500-1000mg a cada 6 horas se necessário.
*Oriente retorno imediato se qualquer sintoma de alerta (acima) aparecer. 
`
  },
  {
    titulo: 'Convulsões',
    pagina: 28,
    conteudo: `
        Convulsões
 
1. 	Atenda com urgência paciente que está inconsciente e convulsionando ou teve > 3 convulsões na última hora:
*Se ferimento atual na cabeça (verificar texto “Paciente com ferimentos”).
*Proteja contra ferimentos amortecendo sua cabeça com as mãos ou material macio. Não coloque nada na boca. Coloque em decúbito lateral esquerdo (posição de recuperação), verifique as vias aéreas e aplique oxigênio 8 a 10L/min via máscara com reservatório, se disponível.
*Estabeleça acesso venoso.
*Verifique glicemia: se < 55 ou incapaz de medir, dê glicose 50% 25mL EV em 1-3min. Se alcoolismo/malnutrição, dê tiamina (De acordo com apresentação disponível, aplique vitamina B1+B6+B12 (100mg + 100mg + 500mcg) solução injetável 4mL IM) 200mg EV. Verifique glicemia após 15min: se < 70, dê glicose 50% 25mL EV em 1-3min então dê glicose 5% 1L EV cada 6 horas.
*Se gestante ≥ 20 semanas ou até 1 semana pós-parto, encaminhe com urgência.
*Se não for gestante ou se < 20 semanas, aplique diazepam 10mg EV lento (1-2mg/min) ou via retal (dilua 30mg de diazepam em 4mL de cloreto de sódio 0,9%, aplique via retal a 4-6cm do ânus). Se convulsão continuar, repita após 10 minutos.
*Se convulsão não responder a 2 doses de diazepam ou paciente não recuperar consciência entre as convulsões:
- Se disponível, aplique fenitoína (Fenitoína EV pode causar queda de PA e arritmia cardíaca: infusão máxima de 50mg/minuto; providencie monitoramento de PA e ECG) 20mg/Kg EV em 60 minutos (aplique em acesso diferente do diazepam). Se mantém crise, repita 10mg/Kg em 30 minutos.
- Encaminhe com urgência.
 
2. 	Abordagem do paciente que não está mais convulsionando
*Confirme se foi uma convulsão: movimentos involuntários de parte ou todo corpo, geralmente durando < 3 minutos. Pode ter mordida na língua, incontinência, sonolência e confusão após convulsão.
2.1. Sim, parece convulsão. Encaminhe paciente no mesmo dia se um ou mais dos seguintes:
*Temperatura ≥ 38°C ou rigidez de nuca/meningismo: aplique ceftriaxona 2g IM.
*Dor de cabeça nova/diferente ou que está piorando/mais frequente
*HIV sem epilepsia conhecida
*Redução do nível de consciência > 1 hora após convulsão
*Glicemia < 55 mg/dL ou > 200mg/dL uma hora após tratamento ou paciente em glibenclamida/glicazida/glimepirida/insulina
*Início súbito de dormência ou fraqueza assimétrica, dificuldade na fala ou alterações visuais
*PA ≥ 180/130 > 1 hora após convulsão
*Overdose ou abstinência de álcool/drogas
*Trauma craniano recente
*Gestante ou até 1 semana pós-parto. Se ≥ 20 semanas e acaba de convulsionar (verificar texto “Gestação: avaliação”).
 
2.1.1. Abordagem do paciente que teve uma convulsão mas não necessita encaminhamento no mesmo dia
 
*O paciente tem diagnóstico de epilepsia?
 
2.1.1.1.Sim - Ofereça cuidados de rotina para epilepsia (verificar texto “Epilepsia: cuidados de rotina”).
2.1.1.2.Não:
*Solicite eletroencefalograma (EEG), HMG, glicemia de jejum, creatinina, uréia, sódio, cálcio e magnésio e discuta/encaminhe.
*Se convulsões focais ou novas convulsões após meningite, AVC ou trauma craniano, discuta com especialista.
*Se teve ≥ 2 convulsões sem causa identificável, considere epilepsia, discuta/encaminha e ofereça cuidados de rotina (verificar texto “Epilepsia: cuidados de rotina”).
 
2.2.          Não parece convulsão
2.2.1. 	Início súbito de fraqueza ou dormência assimétrica da face (com mínimo ou nenhum envolvimento da testa), braço ou perna; dificuldade na fala ou alteração visual. - Provável derrame/AVC ou AIT (verificar texto “Derrame (AVC): diagnóstico e cuidados de rotina”. Se diagnóstico incerto: discuta ou encaminhe com prioridade.
2.2.2. 	Colapso com espasmos por < 15 segundos precedido de rubor, tontura, náuseas, sudorese e com recuperação rápida - Provável desmaio comum (verificar texto “Desmaio/queda”). Se diagnóstico incerto: discuta ou encaminhe com prioridade.
`
  },
  {
    titulo: 'Anafilaxia',
    pagina: 29,
    conteudo: `
        Anafilaxia

 
1. 	Apresentação - Paciente com anafilaxia pode ter coceira/rash generalizado, edema de face/língua, coceira/aperto na garganta, tosse, sibilos, falta de ar, tontura/desmaio, dor abdominal ou vômito.
 
2. 	Atenda com urgência paciente com possível anafilaxia. Nas últimas horas antes do início dos sintomas, paciente foi exposto a algum medicamento, alimento ou picada/ferroadas de insetos que já causou anafilaxia anteriormente? Obs. Alimentos comuns que causam anafilaxia incluem amendoim, castanhas, oleaginosas, ovo, leite, camarão e peixe.
2.1.Sim – Trate anafilaxia conforme item 3.
2.2.Não: nas últimas horas antes do início dos sintomas, paciente foi exposto a algum medicamento, alimento1 ou picada/ferroadas de insetos?
2.2.1.     Sim: PAS < 90?
2.2.1.1.Sim – Trate anafilaxia conforme item 3.
2.2.1.2.Não: Teve início súbito de ≥ 2 dos seguintes: 1) Coceira/rash generalizado ou edema de face/língua sibilos/aperto no peito, PAS < 90 ou tontura/ desmaio? 2) Falta de ar ou sibilos/aperto no peito 3) Tontura/desmaio 4) Dor abdominal ou vômito.
2.2.1.2.1.     Sim – Trate anafilaxia conforme item 3
2.2.1.2.2.     Não – Anafilaxia não é provável. Trate sintomas de conforme página do sintoma. Se dúvida, discuta.
2.2.2.     Não: Teve início súbito de coceira/rash generalizado ou edema de face/língua e mais 1 dos seguintes: falta de ar/ sibilos/aperto no peito, PAS < 90 ou tontura/desmaio?
2.2.2.1.Sim – trate anafilaxia conforme item 3.
2.2.2.2.Não - Anafilaxia não é provável. Trate sintomas de conforme página do sintoma. Se dúvida, discuta.
 
3. 	Maneje anafilaxia e encaminhe com urgência:
*Eleve as pernas ou coloque paciente deitado de barriga para cima e aplique oxigênio de 8 a 10L/min via máscara com reservatório. Se gestante ou vomitando, coloque em decúbito lateral esquerdo; ou se falta de ar, coloque sentado com as pernas estendidas.
*Aplique imediatamente adrenalina (1 mg/ml) 0,5mL IM no terço médio da face anterolateral da coxa. Repita cada 5-15 minutos se não melhorar.
*Aplique cloreto de sódio 0,9% 1-2L EV rápido independente da PA. Depois, se PAS < 90, também aplique cloreto de sódio 0,9% 500mL EV rápido, repita até PAS > 90. Continue 1L cada 6 horas. Pare se falta de ar piorar ou novas crepitações pulmonares.
*Se ferroada de inseto, remova ferrão.
*Se sibilos persistentes ou falta de ar apesar da adrenalina, aplique também bromidrato de fenoterol 5mg/mL 10-20 gotas em 4mL de cloreto de sódio 0,9% via nebulizador com oxigênio (6L/min). Se nebulizador não disponível, aplique ao invés salbutamol 400-800mcg (4-8 jatos) via espaçador. Se não melhorar, repita cada 20 minutos até 3 vezes.
*Aplique hidrocortisona 200mg IM ou EV lento e, se coceira ou urticária, aplique também prometazina 50mg IM.
 
4. 	Avalie paciente com história prévia de anafilaxia
4.1.Alérgenos. Avaliar no diagnóstico. Encaminhe para especialista para confirmar alérgenos. Alérgenos comuns incluem medicamentos, alimentos e picadas/ferroadas de inseto.
4.2. Outras alergias. Avaliar no diagnóstico.
*Se tosse recorrente, sibilos, aperto no peito ou dificuldade para respirar, exclua asma (verificar texto “Asma e DPOC: diagnóstico”). Se asma conhecida, ofereça cuidados de rotina (verificar texto “Asma: cuidados de rotina”).
*Se placas secas, descamativas e pruriginosas em punho, tornozelo, dobra de cotovelo ou atrás do joelho, provável eczema (verificar texto “Coceira com rash generalizado”).
*Se coceira, vermelhidão, pápulas elevadas que aparecem repentinamente e geralmente desaparecem em 24 horas, provável urticária (verificar texto “Coceira com rash generalizado”).
*Se espirros recorrentes ou nariz com coceira/coriza/congestão, provável rinite alérgica (verificar texto “Sintomas do nariz”).
*Se lacrimejamento e coceira em ambos os olhos, provável conjuntivite alérgica (verificar texto “Sintomas do olho/visão”).
 
5. 	Oriente paciente com história prévia de anafilaxia
*Oriente evitar alérgenos conhecidos e avisar profissional de saúde se alérgeno é medicamento.
*Garanta que paciente tem um plano em caso de anafilaxia: informe número SAMU (192), hospital de referência mais próximo e plano de transporte confiável.
 

`
  },
  {
    titulo: 'Queimaduras',
    pagina: 30,
    conteudo: `
         Queimaduras

 
1. 	Atenda com urgência paciente com queimadura(s):
*Aplique oxigênio via cânula nasal (1-6L/min) se:
- Queimaduras em face, pescoço ou tórax superior
- Tosse, respiração ruidosa/com dificuldade ou rouquidão: provável queimadura inalatória
- Paciente sonolento ou confuso
- SaO2 < 90%
- Porcentagem total da superfície corporal queimada (%SCQ) > 15% (ver abaixo)
*Remova qualquer fonte de calor:
- Remova roupas queimadas ou quentes. Mergulhe pele queimada em água fria ou aplique toalhas molhadas por 30 minutos.
- Cubra paciente com lençol limpo e seco para evitar hipotermia.
*Calcule tamanho e profundidade da queimadura:
- Calcule a porcentagem total da superfície corporal queimada (%SCQ) usando as informações abaixo.
- Calcule % total superfície corporal (SCQ): - Cabeça 9%; - Pescoço 1%; - Frente 18%; - Atrás 18%; - Cada braço 9%; - Cada perna 18%
- Se pele vermelha, com bolhas, dolorida, úmida: provável queimadura de espessura parcial (segundo grau).
- Se pele branca/enegrecida, indolor, seca: provável queimadura de espessura total (terceiro grau).
*Avalie e maneje necessidade de hidratação se %SCQ > 10%:
- Insira acesso EV calibroso em área longe da pele queimada. Se %SCQ significativa, insira um segundo acesso EV.
- Aplique cloreto de sódio 0,9% EV: - Calcule volume total necessário nas próximas 24 horas (mL) = %SCQ x peso(kg) x 4; - Aplique metade desse volume nas primeiras 8 horas após a queimadura. Calcule o volume por hora (mL) = volume total ÷ 2 ÷ 8
- Insira um cateter urinário e registre o débito urinário a cada hora.
*Precreva medicamentos:
- Se dor intensa, aplique morfina 5mg EV cada 4 horas. Se dor não intensa, prescreva paracetamol ou dipirona (evitar se alergia prévia) 500-1000mg cada 6 horas.
- Prescreva reforço da vacina dT (difteria e tétano) se última dose há > 5 anos. Se < 3 doses na vida/desconhecido, complete doses e discuta/ encaminhe para soro/imunoglobulina antitetânica.
*Cuide do ferimento:
- Cubra a queimadura com cobertura não aderente ou enrole em um lençol limpo e seco.
*Encaminhe no mesmo dia o paciente com qualquer um dos seguintes:
- %SCQ > 10%
- Queimadura de terceiro grau
- Queimadura em face/pescoço/mãos/pés/genitais/articulações
- Queimadura circunferencial de membros/tórax
- Queimadura inalatória/elétrica/química
- Outros ferimentos
*Enquanto aguarda transposte, monitores sinais vitais: PA, FC, FR, SaO2, nível de consciência (Glasgow) e débito urinário.
*Reavalie diariamente (como abaixo) se não necessita encaminhamento no mesmo dia.
 
2. 	Reavalie diariamente paciente com queimadura(s) que não necessita de encaminhamento no mesmo dia:
*Limpe com cloreto de sódio 0,9%. Se tecido morto/necrosado, remova cuidadosamente. Faça curativos diários: aplique sulfadiazina de prata 1% creme e cubra com curativo não aderente. Verifique sinais de infecção (vermelhidão, calor, inchaço, aumento da dor, odor fétido ou pus). Se infecção, prescreva cefalexina 500mg cada 6 horas por 7 dias.
*Prescreva paracetamol ou dipirona 500-1000mg e/ou ibuprofeno 300-600mg cada 6 horas se necessário por até 5 dias (Tomar anti-inflamatórios com alimentação. Não prescreva se úlcera péptica, reação alérgica ou exacerbação de asma com uso, doença renal, gestação. Considere associar omeprazol 20mg em jejum se HAS, diabetes, insuficiência cardíaca, ≥ 65 anos, dispepsia, úlcera péptica prévia, uso de AAS, corticosteroides, varfarina, abuso de álcool). Se não responder, adicione codeína 30-60mg a cada 4 horas se necessário até 360mg ao dia. Se dor aumentada/ansiedade com troca de curativos, prescreva codeína 30mg 1 hora antes da troca de curativos.
*No último ano: 1) bebeu ≥ 4 doses3/vez, 2) usou drogas ilegais ou 3) abusou de medicamentos com/sem prescrição? Se sim para qualquer um, verificar texto “Uso de álcool/drogas”.
*Se infecção grave (vermelhidão/inchaço extenso, Tax ≥ 38°C), dor não responder aos medicamentos ou queimadura não cicatrizar em 2 semanas, discuta/encaminhe.


`
  },
  {
    titulo: 'Mordidas e ferroadas',
    pagina: 31,
    conteudo: `
         Mordidas e ferroadas

 
1.     Atenda com urgência paciente com mordida/ferroada e um ou mais dos seguintes:
*Mordida de cobra (mesmo que as marcas da mordida não sejam aparentes)
*Se início súbito de coceira/rash generalizado, edema de face/língua, sibilos, falta de ar, PAS < 90, tontura/desmaio, dor abdominal intensa, vômito persistente, considere anafilaxia (verificar texto “Anafilaxia”)
*Fraqueza, pálpebras caídas, dificuldade de engolir e falar, visão dupla
*Mordida animal/humana e mais 1: múltiplas mordidas, ferimento grande/ profundo, perda tecidual, envolvendo articulações/ossos, temperatura ≥ 38°C ou pus
*PAS < 90
*Sangramento pulsátil ou excessivo
1.1. Maneje e encaminhe com urgência:
*Se mordida de cobra:
- Tranquilize paciente.
- Remova joias/bijuterias e imobilize o membro mordido. Evite aplicar torniquete ou sugar o veneno.
- Discuta sobre necessidade de soro antiofídico, ligue para o Centro de Informações Toxicológicas (0800 643 5252) ou Disque-Intoxicação (0800 722 6001).
*Se PAS < 90, aplique cloreto de sódio 0,9% 500mL EV em 30 minutos, repita até PAS > 90. Pare se falta de ar piorar ou novas crepitações pulmonares.
*Se sangramento pulsátil ou excessivo, aplique pressão direta e eleve membro. Se sangramento excessivo e persistente, aplique torniquete acima do ferimento.
*Remova pele solta/necrosada e limpe a ferida com água e sabão. Irrigue com pressão usando cloreto de sódio 0,9% por 15 minutos. Evite suturar o ferimento.
*Prescreva reforço da vacina dT (difteria e tétano) se última dose há > 5 anos. Se < 3 doses na vida/desconhecido, complete doses e discuta/encaminhe para soro/imunoglobulina antitetânica.
 
2.     Abordagem do paciente com mordida/ferroada que não necessita de atenção urgente.
2.1.Mordida(s) humana ou animal
*Remova pele solta/necrosada e limpe ferida com água e sabão. Irrigue com pressão usando cloreto de sódio 0,9% por 15 minutos.
*Evite suturar o ferimento.
*Considere risco de raiva se mordida/arranhão ou lambedura nos olhos/boca/pele não intacta por cão, gato, animal silvestre (Como morcego, raposa, macaco, outros) ou de produção (Como boi, cavalo, cabra, ovelha, porco, outros).
- Discuta com Centro de Informações Toxicológicas (0800 643 5252) ou Disque-Intoxicação (0800 722 6001). Notifique.
- Lave ferimento com água e sabão.
- Oriente observar o animal por 10 dias após exposição para sinais de raiva. Se desaparecer/morrer/se tornar raivoso ou animal silvestre/de produção: prescreva 4 doses de vacina antirrábica (0, 3, 7 e 14 dias após exposição).
- Se animal silvestre ou se ferimento em mucosas/ mãos/ pés/ cabeça/ extenso/ profundo e animal desaparecido/raivoso/de produção: prescreva também soro/imunoglobulina antirrábica.
*Se disfunção imune (HIV ou diabetes mal controlados, doença renal/ hepática/ autoimune ou câncer) ou mordida é profunda, infectada, envolve mão/ cabeça/ pescoço/ genitais: prescreva amoxicilina/clavulanato 500/125mg cada 8 horas por 7-14 dias. Se alergia, dê ao invés metronidazol 500mg cada 8 horas e SMZ/TMP 800/160mg cada 12 horas por 7-14 dias.
*Se mordida humana com rompimento da pele, também avalie necessidade de PEP para HIV e hepatite B (verificar texto “Exposição a fluidos infecciosos: profilaxia pós-exposição (PEP)”.
*Prescreva paracetamol ou dipirona (não prescreva se alergia prévia) 500-1000mg e/ou ibuprofeno 300-600mg cada 6 horas se necessário por até 5 dias. Tomar anti-inflamatórios com alimentação. Não prescreva se úlcera péptica, reação alérgica ou exacerbação de asma com uso, doença renal, gestação. Considere associar omeprazol 20mg em jejum se HAS, diabetes, insuficiência cardíaca, ≥ 65 anos, dispepsia, úlcera péptica prévia, uso de AAS, corticosteroides, varfarina, abuso de álcool.
*Se mordida infectada e sem resposta ao antibiótico em 48h, ou dor persiste apesar da analgesia, discuta.
*Se ferida não cicatrizar completamente após 3 meses ou cicatrizar < 50% após 6 meses de tratamento (verificar texto “Úlceras de pele ou feridas que não cicatrizam: diagnóstico”).
*Prescreva reforço da vacina dT (difteria e tétano) se última dose há > 5 anos. Se < 3 doses na vida/desconhecido, complete doses e discuta/encaminhe para soro/ imunoglobulina antitetânica.
 
2.2.Mordida ou ferroada de inseto/ aranha/ escorpião/ água-viva
*Remova ferrão/tentáculos cuidadosamente. Limpe ferida com água e sabão. Se água-viva, evite aplicar água doce/esfregar e aplique vinagre comum por 30min.
*Aplique gelo/bolsa de gelo para dor/inchaço.
*Se coceira e rash, prescreva loratadina 10mg ao dia. Se sem resposta, prescreva prednisona 60mg ao dia por 5 dias.
*Se dor, prescreva ibuprofeno 300-600mg cada 6 horas por até 5 dias.
*Se picada de escorpião muito dolorida, injete lidocaina 2% 2mL ao redor do local da picada.
*Se picada de aranha ou dúvidas, discuta com Centro de Informações Toxicológicas (0800 643 5252) ou Disque-Intoxicação (0800 722 6001).
*Prescreva reforço da vacina dT (difteria e tétano) se última dose há > 5 anos. Se < 3 doses na vida/desconhecido, complete doses e discuta/encaminhe para soro/ imunoglobulina antitetânica.


`
  },
  {
    titulo: 'Perda de peso',
    pagina: 32,
    conteudo: `
         Perda de peso

 
Primeiramente, confirme perda de peso involuntária:
*Verifique se o paciente realmente tem perda de peso involuntária. Compare peso atual com registros anteriores e questionem se as roupas ainda cabem.
*Investigue perda de peso involuntária ≥ 5% do peso corporal nos últimos 6 meses.
 
1. 	PASSO 1: investigue TB, HIV e diabetes
1.1 Exclua TB
*Inicie investigação para TB (verificar texto “Tuberculose (TB): diagnóstico”).
*Ao mesmo tempo investigue HIV (verificar texto “HIV: diagnóstico”), diabetes (verificar texto “Diabetes: rastreio e diagnóstico”) e considere outras causas abaixo.
 
1.2.Teste para HIV
*Teste para HIV (verificar texto “HIV: diagnóstico”).
*Se paciente HIV com perda de peso ≥ 10% e diarreia ou febre > 1 mês, discuta ou encaminhe com prioridade.
1.3. Investigue diabetes
*Verifique glicemia capilar aleatória, interprete (verificar texto “Avalie e maneje glicemia capilar aleatória”).
 
2. 	PASSO 2: pergunte sobre sintomas comuns de câncer
*Corrimento/sangramento vaginal anormal - Considere câncer de colo de útero. Faça exame especular e preventivo (verificar texto “Rastreio do câncer de colo de útero”).
*Nódulo(s) de mama ou descarga mamilar - Considere câncer de mama. Examine mamas/axilas para nódulos (verificar texto “Sintomas mamários”).
*Sintomas urinários em homem - Considere câncer de próstata. Faça toque retal e solicite PSA. Se próstata endurecida e nodular/ assimétrica, discuta/encaminhe com prioridade.
*Tosse ≥ 2 semanas, escarro sanguinolento, longa história de tabagismo - Considere câncer de pulmão. Solicite rx de tórax.  
*Dispepsia ou mudança de hábito intestinal - Considere câncer de trato gastrointestinal
- Solicite sangue oculto em fezes.
- Se dispepsia: solicite EDA.
- Se massa abdominal: solicite USG.
- Faça toque retal. Se massa em toque retal ou sangue oculto em fezes positivo: solicite colonoscopia.
 
3. PASSO 3: investigue se ingestão alimentar é adequada: se inadequada, procure por motivos
*Náusea ou vômitos (verificar texto “Náuseas ou vômitos”)
*Perda de apetite
- Coma refeições pequenas e frequentes.
- Oriente o paciente a ingerir alimentos densos nutricionalmente (soja, carne, peixe, castanhas e sementes, feijão, lentilha, batatas, arroz, trigo, milho).
*Avalie e maneje estresse (verificar texto “Tristeza, estresse ou nervosismo”).
*Sem dinheiro para alimentação - Discuta/encaminhe para assistente social.
* Se paciente tem uma doença terminal - Considere oferecer cuidado paliativo (verificar texto “Cuidados paliativos de rotina”).
* Ferida oral ou dificuldade em engolir - Provável candidíase oral/esofágica (verificar texto “Sintomas da boca e garganta”).
 
4. PASSO 4: investigue outras causas
*Revise medicamentos: anticonvulsivantes, antidepressivos, antidiabéticos e medicamentos para tireoide.
*Solicite TSH se um ou mais dos seguintes: FC ≥ 100, palpitações, tremores, irritabilidade, intolerância ao calor ou aumento da tireoide. Se alterado, discuta.
*No último mês, sentiu 1) desanimado, deprimido, sem esperanças ou 2) pouco interesse ou prazer em fazer as coisas? se sim para qualquer um (verificar texto “Depressão: diagnóstico”).
*No último ano: 1) bebeu ≥ 4 doses1/vez, 2) usou drogas ilegais ou 3) abusou de medicamentos com/sem prescrição? se sim para qualquer um (verificar texto “Uso de álcool/drogas”).
*Investigue negligência em idoso ou em paciente doente necessitando de cuidado. Se suspeita, discuta/encaminhe para assistente social.
*Se paciente com perda de peso persistente, documentada e sem causa óbvia: solicite LDH e discuta ou encaminhe para investigações adicionais.
 
`
  },
  {
    titulo: 'Febre',
    pagina: 33,
    conteudo: `
         Febre

 
1. 	Paciente com febre tem temperatura axilar ≥ 37,8oC agora ou nos últimos 3 dias.
*Se paciente com febre e rash, retire da sala de espera e isole em consultório/local afastado dos demais.
 
2. 	Atenda com urgência paciente com febre e um ou mais dos seguintes:
*Convulsão ou acabou de convulsionar (verificar texto “Convulsões”)
*Rebaixamento nível de consciência (verificar texto “Diminuição do nível de consciência”)
*Rigidez de nuca /meningismo ou rash purpúrico, provável meningite
*Dor à descompressão súbita do abdome inferior D, provável apendicite
*PAS < 90
*FC ≥ 30 ou SatO2 < 90% ou falta de ar
*Icterícia (Considere febre amarela se está ou esteve em área de transmissão há ≤ 2 semanas e sem registro de vacina contra febre amarela: notifique e discuta. Considere leptospirose se exposição à áreas alagadas, lama ou esgoto, após chuvas ou enchentes: notifique e discuta).
*Facilidade para sangramento/hematomas
*Dor abdominal ou nas costas intensa
 
2.1.Maneje e encaminhe com urgência
*Se PAS < 90: aplique cloreto de sódio 0.9% 500mL EV em 30 minutos, repita até PAS > 90. Pare se falta de ar piorar ou novas crepitações pulmonares.
*Se FR ≥ 30, SaO2 < 90% ou falta de ar, aplique oxigênio via cânula nasal 1-6L/min para meta 90-96% (se DPOC, 88-92%; se gestante, 92-95%).
- Se 6L/min e fora do alvo/sem melhora, use máscara com reservatório e aumente até 15L/min.
*Se provável meningite ou rebaixamento do nível de consciência ou remoção demorar > 2 horas e falta de ar/SaO2 < 90%/FR ≥ 30: aplique ceftriaxona 2g IM.
 
3. 	Abordagem do paciente com febre que não necessita de atenção urgente:
*Se esta ou esteve em área de malária (Acre, Amapá, Amazonas, Maranhão, Mato Grosso, Pará, Rondônia, Roraima e Tocantins) no último mês: notifique e discuta/investigue.
 
3.1.Febre há < 7 dias
* Está/esteve em área de dengue, zika, chikungunya, febre maculosa ou de surto de febre amarela há < 2 semanas ou está/esteve em risco de lepstospirose no último mês?
3.1.1. Sim para qualquer um: avalie se esta/esteve em área de:
*Dengue e ≥ 2: dor de cabeça/retro-orbital, dor muscular/articular, rash, petéquias, náuseas/vômitos, provável dengue.
*Zika vírus e rash com coceira, provável zika vírus.
*Chikungunya e dor articular súbita/intensa não explicada por outras condições, provável Chikungunya.
*Febre maculosa e história/marca picada de carrapato e dor muscular e dor de cabeça, provável febre maculosa.
*Surto de febre amarela e sem registro de vacina e ≥ 2: dor de cabeça, dor muscular, lombar, abdominal, mal-estar, calafrios, náuseas, tontura, provável febre amarela.
*Risco para leptospirose (Contato com áreas alagadas, lama ou esgoto, após chuvas ou enchentes) e dor muscular e dor de cabeça, provável leptospirose.
3.1.1.1. Qualquer um dos acima
*Se provável dengue, verificar texto “Dengue: avaliação e manejo”.
*Se não é provável dengue verificar outras causas no item 4. Abaixo.
3.1.1.2. Nenhuma dessas condições provável: tem rash e ≥ 1: tosse, coriza, olho vermelho ou esta ou esteve em área de sarampo no último mês?
3.1.1.2.1. Sim - Considere sarampo (verificar abaixo no item 4.).
3.1.1.2.2. Não: Está ou esteve em risco para hantavirose (Contato ou esteve em área de roedores silvestres, áreas rurais, locais abandonados, depósitos, camping) nos últimos 2 meses e dor de cabeça e dor muscular?
3.1.1.2.2.1. Sim: Considere hantavirose: notifique e discuta.
3.1.1.2.2.2. Não:
*Se dor de cabeça, tosse, dor de garganta, sintomas nasais ou de olfato/paladar: considere COVID-19.
*Se ≤ 40 anos, dor de garganta recente e ≥ 2: dor/inchaço articular, dor no peito, cansaço, movimentos súbitos/ anormais, nódulos em tendões/ articulações, rash vermelho arredondado e com palidez central, considere febre reumática aguda, discuta e encaminhe no mesmo dia.
*Pergunte sobre outros sintomas, avalie e maneje conforme página do sintoma Se dúvidas, discuta.
3.1.2. Não para todos – Vá para item 3.1.1.2.2. (item perguntando se está ou não em risco para Hantavirose)
 
3.2. Febre há ≥ 7 dias
*Exclua TB (verificar texto “Tuberculose (TB): diagnóstico”), HIV (verificar texto “HIV: diagnóstico” e sífilis (verificar texto “Sífilis: diagnóstico”).
*Se está/esteve em área de leishmaniose visceral e aumento do baço, discuta.
*Discuta para solicitar PPD.
*Se febre sem foco > 3 semanas:
- Solicite HMG, PCR ou VHS, creatinina, PU, urocultura e rx de tórax.
- Solicite também TGO, TGP, BT e F. Se alterado, solicite anti-HAV IgM, exclua hepatites C (verificar texto “Hepatite C (HCV): diagnóstico”) e B (verificar texto “Hepatite B (HBV): diagnóstico”).
- Interprete e discuta/encaminhe.
 
4. 	Maneje paciente com febre há < de 7 dias que não necessita de atenção urgente
*Notifique de acordo com suspeita clínica/epidemiológica (se mais de uma condição suspeita, notifique para cada uma delas).
*Solicite/colete exame diagnóstico. Monitore resultado do exame e discuta para interpretar.
*Verifique outros alertas epidemiológico vigentes. Considere que paciente pode ter ≥ 1 suspeita/diagnóstico, notifique e teste cada uma.
*Prescreva paracetamol ou dipirona (não prescreva se alergia prévia) 500-1000mg cada 6 horas se dor ou mal-estar por até 5 dias.
*Aconselhe beber líquidos/manter-se hidratado, higienizar mãos com frequência, cobrir nariz/boca se tossir/espirrar e evitar contato com outros enquanto doente.
*Trate, maneje e aconselhe paciente de acordo com suspeita/diagnóstico:
 
5. 	Tratamento de causas selecionadas de febre:
*Suspeita/Diagnóstico de Zika vírus:
- Se houver coceira, prescreva loratadina 10mg ao dia se necessário, por até 5 dias.
- Não prescreva e oriente não usar AAS ou anti-inflamatórios (como ibuprofeno) pois aumentam o risco de sangramento.
- Oriente o paciente a retornar se houver sensação de formigamento em braços ou pernas ou alterações de consciência.
*Suspeita/Diagnóstico de Chikungunya:
- Se dor intensa, prescreva codeína 30-60mg a cada 4 horas se necessário, até 360mg ao dia.
- Em caso de dor articular persistente por 15 dias ou mais, discuta o caso.
- Não prescreva e oriente não usar AAS ou anti-inflamatórios para evitar aumento do risco de sangramento.
- Oriente para aliviar a dor articular com compressas frias a cada 4 horas por 20 minutos, repouso e evitar atividades que sobrecarreguem as articulações.
*Suspeita/Diagnóstico de Febre Maculosa:
- Prescreva doxiciclina 100mg a cada 12 horas por 7 dias. Se gestante, discuta a situação.
- Se não houver melhora em 7 dias, discuta novamente.
*Suspeita/Diagnóstico de Febre Amarela:
- Evite prescrever e oriente não usar mais de 3g de paracetamol por dia.
- Não prescreva e oriente não usar AAS ou anti-inflamatórios.
- Solicite ou encaminhe para realizar exames como TGO, TGP, creatinina, TAP/RNI e hemograma. Avalie o paciente e os resultados em 24 horas, discuta para interpretar.
- Discuta/encaminhe no mesmo dia se houver sinais/sintomas de alarme como pele/olhos amarelos, sangramento fácil/hematomas, vômitos persistentes, diminuição do volume urinário, alteração de consciência.
- Reavalie o paciente e também solicite ou encaminhe para repetir exames a cada 24 horas até completar 48 horas sem febre.
- Oriente retornar/procurar atendimento com urgência se houver sinais de alarme.
*Suspeita/Diagnóstico de Leptospirose:
- Prescreva doxiciclina 100mg a cada 12 horas por 7 dias.
- Se gestante ou com doença hepática/renal conhecida, prescreva amoxicilina 500mg a cada 8 horas por 7 dias.
- Se alérgico à penicilina, prescreva azitromicina 500mg ao dia por 3 dias.
- Solicite hemograma e avalie o resultado em 24 horas.
- Se leucócitos < 4.000, discuta para considerar parar o antibiótico e investigar outros diagnósticos.
- Se leucócitos > 4.000, mantenha o antibiótico e reavalie o paciente para sinais de alerta a cada 2 dias até 2 semanas do início dos sintomas.
- Discuta/encaminhe no mesmo dia se houver sinais/sintomas do quadro vermelho ou outros sinais de alarme.
- Oriente retornar/procurar atendimento com urgência se houver sinais de alarme.
*Suspeita/Diagnóstico de Sarampo:
- Oriente isolamento até completar quatro dias após o início do rash.
- Discuta com a vigilância local para identificar contatos e verificar o status de vacinação contra sarampo.
- Se houver contato com vacinação incompleta ou não vacinado, vacine em até 72 horas.
- Monitore os contatos por 30 dias para o aparecimento de rash ou sintomas.
 
6. 	Se febre persiste apesar do tratamento, reavalie diagnóstico e discuta.
 


`
  },
  {
    titulo: 'Dengue: avaliação e manejo',
    pagina: 35,
    conteudo: `
          Dengue: avaliação e manejo

Considere dengue se está/esteve em área de dengue há < 14 dias e febre há ≤ 7 dias e ≥ 2: dor de cabeça/retro-orbital, dor muscular/articular, rash, petéquias, náuseas/vômitos: notifique.


Atenda com urgência paciente suspeito ou confirmado de dengue e um ou mais dos seguintes:
*PAS < 90 ou hipotensão postural - Meça PA deitado e repita após ficar em pé por 3 minutos: se PA sistólica cair ≥ 20 (ou ≥ 30 se hipertensão conhecida) ou PA diastólica cair ≥ 10, paciente tem hipotensão postural.
*FC ≥ 100
*Tempo enchimento capilar ≥ 3 segundos
*Desmaio
*FR ≥ 30 ou Sa02 < 90% ou falta de ar
*Vômitos persistentes
*Sonolência/confusão mental
*Agitação/irritabilidade
*Letargia ou irritabilidade
*Aumento fígado > 2cm do rebordo costal direito
*Distensão/líquido abdome
*Dor abdominal intensa e contínua (referida ou na palpação
*Facilidade sangramento (gengiva, nariz, vagina)
*Sangue em urina/fezes/vômitos

2.1. Maneje e encaminhe com urgência:
*Aplique cloreto de sódio 0,9% 10ml/Kg na 1a hora, independente da PA. Se PAS < 90, FR ≥ 30, Sa02 < 90%, falta de ar ou tempo enchimento capilar ≥ 3 segundos aplique 20 ml/kg EV em 20 minutos. Repita até PAS > 90. Pare se falta de ar piorar ou novas crepitações pulmonares.
*Se FR ≥ 30 ou Sa02 < 90% ou falta de ar, aplique oxigênio 1-6L/min via cânula nasal para SaO2 90-96% (se DPOC, 88-92%; se gestante, 92-95%).
- Se 6L/min e fora do alvo/sem melhora, use máscara com reservatório e aumente até 15L/min.


Avalie paciente suspeito ou confirmado de dengue que não necessita de atenção urgente

*Avalie a dor articular durante toda consulta - Caso o paciente esteja ou tenha estado em uma área de chikungunya nos últimos 14 dias e apresente dor articular súbita e intensa que não seja explicada por outras condições, notifique e maneje conforme o necessário ( 33).
*Fator de risco para agravamento na primeira consulta - Avalie os fatores de risco para agravamento que incluem: gestantes, pessoas com mais de 65 anos, diabetes mellitus (DM), hipertensão arterial sistêmica (HAS), doenças cardiovasculares graves (DCV), doença pulmonar obstrutiva crônica/asma (DPOC/asma), úlcera péptica, doença renal, hepática, autoimune, hematológica e índice de massa corporal (IMC) ≥ 30, além de vulnerabilidade social. Se algum desses fatores estiver presente, trate conforme indicado abaixo e encaminhe no mesmo dia para um hemograma a ser realizado em até 4 horas.
*Rash com coceira na primeira consulta - Caso o paciente esteja ou tenha estado em uma área com presença do vírus zika nos últimos 14 dias, também notifique e maneje como caso de zika vírus ( 33).
*Petéquias em toda consulta - Se petéquias estiverem presentes, trate conforme indicado abaixo e encaminhe no mesmo dia para hemograma a ser realizado em até 4 horas.
*Prova do laço na primeira consulta se necessário - Caso não haja fatores de risco para agravamento nem presença de petéquias, realize a prova do laço:
Se positiva, trate conforme indicado abaixo e encaminhe no mesmo dia para hemograma a ser realizado em até 4 horas. Uma vez positiva, não repita a prova do laço.
*Hemograma se houver fator de risco, prova do laço positiva ou petéquias - Encaminhe no mesmo dia para hemograma com resultado em até 4 horas e repita o hemograma, revisando o resultado a cada 24 horas até que o paciente complete 48 horas sem febre:
Se hematócrito > 50% para homens ou > 44% para mulheres, ou aumento > 20% em relação ao anterior, ou plaquetas ≤ 50.000, encaminhe no mesmo dia. Se houver dúvidas, discuta com especialistas.
Se hematócrito < 50% para homens ou < 44% para mulheres e não aumentou mais de 20% em relação ao anterior e plaquetas > 50.000, maneje conforme indicado abaixo.
*Exame para dengue na primeira consulta - Se o início dos sintomas ocorreu há menos de 5 dias, solicite o isolamento viral (NS1). Se o início dos sintomas ocorreu há 6 dias ou mais, solicite a sorologia IgM para dengue. Se o resultado for negativo, discuta e considere outros diagnósticos ( 33).

Aconselhe paciente suspeito ou confirmado de dengue
*Entregue ‘cartão de acompanhamento de dengue’ e oriente que seja preenchido em cada consulta. Oriente paciente procurar atendimento com urgência se sintoma do quadro vermelho.
*Aconselhe paciente evitar mosquitos e prevenir disseminação da dengue para outras pessoas: cobrir braços e pernas, usar repelente e mosquiteiros, eliminar focos de mosquitos.


Trate paciente suspeito ou confirmado de dengue
*Prescreva hidratação oral: oriente ingerir 60/kg/dia, sendo 1/3 como solução de reidratação oral e 2/3 como outros líquidos (Água, sucos de fruta, água de coco).
Se fator de risco para agravamento, prova do laço positiva ou petéquias, dê imediatamente soro de reidratação oral 20mL/Kg em 4-6h. Se incapaz de beber, aplique cloreto de sódio 0,9% 250mL EV.
*Prescreva paracetamol ou dipirona (não prescreva se alergia prévia) 500-1000mg cada 6 horas se dor ou mal-estar por até 5 dias. Não prescreva AAS ou AINEs. Se usa AAS, clopidogrel ou varfarina, discuta.
*Se náusea/vômitos, prescreva metoclopramida 10mg ou dimenidrinato 50-100mg cada 8 horas se necessário por até 5 dias. Se coceira, dê loratadina 10mg ao dia se necessário por até 5 dias.
*Reavalie no 5o dia de febre ou 1o dia sem febre ou, se fator de risco para agravamento, petéquias ou prova do laço positiva reavalie cada 24h até 48h sem febre.



`
  },
  {
    titulo: 'Palidez ou anemia',
    pagina: 38,
    conteudo: `
         Palidez ou anemia

 
1.     Introdução e definições:
*Considere palidez se conjuntiva ocular ou palmas das mãos pálidas. Compare palmas das mãos do paciente com as suas. Se palidez, solicite hemograma para avaliar hemoglobina (Hb).
*Anemia é provável se:
- Mulher não grávida com Hb < 12g/dL.
- Mulher grávida com Hb < 11g/dL (verificar texto “Gestação: cuidado pré-natal de rotina”) ou mulher no pós-parto/puerpério com Hb < 11g/dL (verificar texto: “Cuidado pós-natal (puerperal) de rotina”).
- Homem com Hb < 13g/dL.
 
2.     Atenda com urgência paciente com palidez/anemia e um ou mais dos seguintes:
*Hb < 7g/dL
*FC ≥ 100
*FR ≥ 30 ou SaO2 < 90%1
*PAS < 90
*Tontura/desmaio
*Dor no peito ou palpitações
*Edema nas pernas
*Icterícia
*Fezes pretas ou com sangue
*Hematomas generalizados/espontâneos
*Erupção de pele roxa/vermelha que não desaparece ao pressionar
 
2.1.Maneje e encaminhe com urgência:
*Se FR ≥ 30 ou SaO2 < 90%, aplique oxigênio 1-6L/min via cânula para manter SaO2 entre 90-96% (se DPOC, 88-92%; se gestante, 92-95%).
- Se 6L/min e fora do alvo/sem melhora da falta de ar, use máscara com reservatório e aumente até 15L/min
*Se PAS < 90, aplique cloreto de sódio 0,9% 500mL EV em 30 minutos, repita até PAS > 90 ou até 3L. Pare se falta de ar piorar ou novas crepitações pulmonares.
 
3.     Abordagem do paciente com palidez/anemia que não necessita de atenção urgente:
*Se febre atual ou nos últimos 3 dias e esteve em área de malária nos últimos 3 meses, notifique e discuta.
*Exclua gravidez. Se gravidez (verificar texto “Gravidez: avaliação”).
*Se não está grávida, avalie hemograma e maneje de acordo com o resultado do volume celular médio (VCM). O volume celular médio (VCM) ajuda identificar causa da anemia. Verifique se VCM é baixo, normal ou alto em comparação com intervalo de referência:
 
3.1.VCM baixo (geralmente < 80) - Considere deficiência de ferro: paciente menstrua?
 
3.1.1.     Não:
*Verifique uso de AINE (como ibuprofeno) /anticoagulante e sangramentos ativos/ ocultos (vômito, fezes, urina) e discuta para solicitar sangue oculto em fezes, colonoscopia, PU e/ou EDA.
*Solicite ferro sérico, ferritina, capacidade total de fixação do ferro, transferrina, saturação de transferrina. Discuta para interpretar.
3.1.2. Sim (menstrua)
*Pergunte sobre sangramento vaginal anormal: se anormal, verificar texto “Sangramento vaginal anormal”.
*Dê sulfato ferroso 40-60mg de ferro elementar ao dia.
- Repita HMG em 4 semanas: se Hb diminuir ou não subir, discuta e considere investigar VCM baixo como acima.
- Se Hb aumentando, repita HMG mensalmente e continue tratamento por 3 meses após Hb atingir valor normal.
*Aconselhe:
- Comer alimentos ricos em ferro: vísceras, carne, peixe, mariscos, ovos, vegetais de folha verde escura, leguminosas, oleaginosas, açúcar mascavo, sementes. Alimentos ricos em vitamina C ajudam na absorção de ferro: frutas vermelha, roxas, amarelo-alaranjadas, kiwi, abacate, tomate, pimentão, couve manteiga.
- Evite bebidas com cafeínas (chás, cafés) com as refeições, pois interferem na absorção do ferro. Evite tomar comprimidos de ferro com leite ou comprimidos de cálcio.
- Avise que fezes podem ficar pretas com tratamento e que isso é normal.
 
3.2.VCM normal - Provável doença sistêmica ou crônica
*Exclua HIV (verificar texto “HIV: diagnóstico”) e TB (verificar texto “Tuberculose: diagnóstico”.
*Solicite reticulócitos e discuta para considerar outras investigações (como função hepática e renal).
*Se tem uma doença incurável, ofereça cuidado paliativo (verificar texto “Cuidados paliativos de rotina”).
 
3.3.VCM alto (geralmente > 100) - Diagnostique anemia macrocítica
*Revise medicamentos: se usa zidovudina ou anticonvulsivantes, discuta.
*Investigue uso de álcool. Se > 14 doses/semana ou > 4 doses/dia. Uma dose é 50mL (um copinho) de destilados, 125mL (uma taça pequena) de vinho ou 330mL (uma lata ou garrafinha) de cerveja.
*Solicite vitamina B12 e folato, discuta para interpretar.


`
  },
  {
    titulo: 'Desmaio/queda',
    pagina: 39,
    conteudo: `
         Desmaio/queda

 
1.     Atenda com urgência o paciente que desmaiou e tem um ou mais dos seguintes:
*Glicemia < 55mg/dL ou > 200mg/dL (verificar texto “Avalie e maneje glicemia capilar aleatória”).
*Se rash/coceira generalizada, edema de face/língua, sibilos, falta de ar, dor abdominal/vômito persistente ou exposição a possível alérgeno1, considere anafilaxia (verificar texto “Anafilaxia”).
*Início súbito de fraqueza ou dormência assimétrica da face (com mínimo ou nenhum envolvimento da testa), braço ou perna; dificuldade na fala ou alteração visual: considere derrame ou AIT (verificar texto “Derrame (AVC): diagnóstico e cuidados de rotina”)
*Rebaixamento do nível de consciência (verificar texto “Diminuição do nível de consciência”)
*Convulsão (verificar texto “Convulsões”)
*Dor no peito (verificar texto “Dor no peito”)
*Falta de ar (verificar texto “Tosse ou falta de ar”)
*Ferimento recente
*PAS < 90
*FC < 50 ou irregular
*Palpitações
*História familiar de desmaios ou morte súbita
*ECG prévio anormal
*Problema cardíaco conhecido
*Desmaia com exercício
*Vomitou sangue ou teve sangue nas fezes
*Gestante ou amenorreia/atraso menstrual com dor abdominal e sangramento vaginal
*Dor lombar ou abdominal intensa
 
1.1.Maneje e encaminhe com urgência:
*Se PAS < 90, aplique cloreto de sódio 0,9% 500mL EV em 30 minutos, repita até PAS > 90. Pare se falta de ar ou novas crepitações pulmonares.
 
2.     Abordagem do paciente que desmaiou e não necessita de atenção urgente
*Solicite ECG, interprete resultados e discuta/encaminhe.
*Solicite HMG. Se Hb < 12 (mulher) ou Hb <13 (homem), verificar texto “Palidez e anemia”.
*Rastreie para uso de álcool/drogas: no último ano: 1) bebeu ≥ 4 doses2/vez, 2) usou drogas ilegais ou 3) abusou de medicamentos com/sem prescrição? se sim para qualquer um (verificar texto “Uso de álcool/drogas”).
*Verifique PA: se ≥ 140/90  136. Se < 140/90, meça PA deitado e repita após ficar em pé por 3 minutos:
 
2.1.PA sistólica cai ≥ 20 (ou ≥ 30 se hipertensão conhecida) ou PA diastólica cai ≥ 10 - Provável hipotensão postural
*Comum no idoso.
*Revise medicamentos: amitriptilina, anlodipino, propranolol, enalapril, furosemida, nitratos, hidroclorotiazida podem causar desmaio.
*Se sede e FC em pé ≥ 100, provável desidratação. Prescreva solução de reidratação oral. Se diarreia (verificar texto “Diarreia”), se vômito (Verificar texto (“Náuseas ou vômitos”), se febre (Verificar texto “Febre”).
*Oriente sentar-se antes de levantar quando deitado.
*Discuta/encaminhe se:
- Diabetes
- Tremor, rigidez, lentidão no movimento (considere parkinsonismo)
- Constipação ou problemas de ereção
- Dor/dormência pés (considere neuropatia periférica).
 
2.2.PA sistólica não cai ≥ 20 (ou ≥ 30 se hipertensão conhecida) e PA diastólica não cai ≥ 10. Paciente estava respirando muito rápido ou profundamente imediatamente antes ou durante o colapso?
2.2.1.     Sim - Provável hiperventilação
*Tranquilize e encoraje paciente respirar em uma frequência normal.
*Verifique e maneje o estresse (verificar texto “Tristeza, estresse ou nervosismo”).
 
2.2.2.     Não. Antes do desmaio, paciente sentiu rubor, tontura, náusea, sudorese, fraqueza ou alteração visual?
2.2.2.1. Sim - Provável desmaio comum
*Oriente evitar calor intenso, desidratação e ficar muito tempo em pé e situações que levaram a desmaios antes.
*Oriente deitar com as pernas elevadas assim que os sintomas iniciarem.
2.2.2.2. Não.
*Se desmaio é associado a tosse, deglutição, rotação da cabeça, discuta para considerar investigações adicionais.
*Se diabetes conhecida (Verificar texto “Diabetes: cuidados de rotina”).
 
3.     Se nenhum dos acima:
*Verifique e maneje: sintomas da visão (verificar texto “Sintomas do olho/visão”), sintomas articulares (verificar texto “Sintomas articulares”), sintomas nos pés (verificar texto “Sintomas nos pés”), sintomas nas pernas (verificar texto “Sintomas nas pernas”), demência (verificar texto “Demência: diagnóstico e cuidados de rotina”).
*Se > 65 anos com problemas cardíacos, quedas frequentes ou desmaio/queda de causa incerta: envolva equipe multiprofissional de apoio, programe visita domiciliar para intervenções de segurança doméstica (corrimãos nas escadas/banheiros, melhora da iluminação, uso de revestimentos/tapetes de banho antiderrapantes) e discuta/encaminhe.


`
  },
  {
    titulo: 'Tosse ou falta de ar',
    pagina: 49,
    conteudo: `

Tosse ou falta de ar
         
1.   	Atender com Urgência se o Paciente Apresentar:
            	*Cianose (face/lábios azulados)
           	*FC ≥ 100
           	*Falta de ar súbita, ruídos respiratórios diminuídos/mais ressonantes/dor em um dos lados, desvio de traqueia, PAS < 90, suspeita de pneumotórax hipertensivo
           	*Sibilos/aperto no peito (Verificar texto “Sibilos/aperto no peito”)
           	*Falta de ar ao deitar com edema em pernas, suspeita de insuficiência cardíaca (Verificar texto “Insuficiência cardíaca: cuidados de rotina)
           	*Respiração rápida e profunda com glicemia >200mg/dl (Verificar texto “Avalie e maneje glicemia capilar aleatória”)
           	*Falta de ar em repouso, falar ou com sinais de esforço (tiragens intercostais, batimento asa do nariz)
           	*FR ≥ 30 ou SaO2 < 90% (Certifique-se que paciente não está usando esmalte/unha postiça e que oxímetro está bem-posicionado, fixo e estabilizado. Se SaO2 91-94% e sem outros sinais/sintomas sugerindo emergências, discuta para decidir se aplicar O2 e encaminhar com urgência.)
           	*Tosse com sangue vivo
           	*Confusão mental
           	*PAS < 90
           	*Edema e dor em uma panturrilha
 
1.1.               Manejo e Encaminhamento com Urgência:
            	*Aplicar oxigênio via cânula nasal 1-6L/min para alvo inicial SaO2 > 94% e meta 90-96% (se DPOC, 88-92%; se gestante, 92-95%). Se 6L/min e fora do alvo/sem melhora, usar máscara com reservatório e aumentar até 15L/min.
           	*Se pneumotórax hipertensivo: inserir cateter calibre 14 acima da 3ª costela na linha médio clavicular. Contatar SAMU (192) e providenciar dreno torácico.
           	*Se PAS < 90, aplicar cloreto de sódio 0,9% 500mL EV em 30 minutos, repetir até PAS > 90 ou até 3L. Parar se falta de ar piorar ou novas crepitações pulmonares.
           	*Se temperatura ≥ 38°C e remoção demorar > 2 horas: aplicar ceftriaxona 1g IM para possível pneumonia bacteriana grave.
 
2.         Abordagem para Pacientes sem Necessidade de Atenção Urgente:
*Perguntar sobre a duração da tosse. Se fatores de risco para HIV tais como: profissional de saúde, pessoa em situação de rua, privada de liberdade/institucionalizada, indígena, imigrante, considerar investigar TB se o paciente tiver tosse independente de duração e sem outra causa provável (verificar texto “Tuberculose (TB): diagnóstico”).
 
2.1.              Tosse < 3 semanas e não recorrente:
*Considerar COVID-19
*Tem tosse com secreção/escarro e mais 1: FC ≥ 100 ou Tax ≥ 38°C?
 
2.1.1.  	Se sim: provável pneumonia (confirme com crepitação pulmonar/respiração brônquica na ausculta ou RX de tórax).
*Há risco de infecção grave? (Idade > 65 anos, HIV ou DM mal controlados, doença renal/hepática/autoimune/câncer ou uso de antibiótico nos últimos 3 meses ou alcoolismo)
2.1.1.1.            Não: dê amoxicilina 500mg cada 8 horas por 7 dias. Se alergia à penicilina, dê ao invés azitromicina 500mg ao dia por 3 dias.
*Reavaliar em 48h: se não melhorar, discutir/encaminhar.
*Se > 50 anos, solicitar RX de tórax e discutir.
2.1.1.2.            Sim (risco de infecção grave): amoxicilina/clavulanato 500/125mg 1 cp cada 8 horas 5 dias + azitromicina 500mg ao dia por 3 dias. Se alergia à penicilina, discuta alternativas; ou dê ao invés se disponível, levofloxacina 750mg ao dia por 5-7 dias.
*Reavaliar em 48h: se não melhorar, discutir/encaminhar.
* Se > 50 anos, solicitar RX de tórax e discutir.
2.1.2.  	Se não (sem suspeita de pneumonia):
*Se DPOC e aumento de escarro ou mudança cor (amarela/verde): dê antibióticos (Verificar texto “Doença pulmonar obstrutiva crônica (DPOC): cuidados de rotina”).
*Se não tiver DPOC, provável bronquite aguda: tranquilize que antibióticos não são necessários. Oriente retornar se sintomas piorarem, nova febre ou não melhora em 2-3 semanas.
 
2.2.              Tosse/falta de ar ≥ 3 semanas (ou ≥ 2 semanas se DM) ou tem episódios recorrentes:
*Excluir tuberculose
2.2.1.  	Considerar também outras causas de tosse ou falta de ar:
2.2.1.1.            HIV com CD4 < 200 e tosse seca, piora da falta de ar aos esforços
*Provável pneumocistose (PPC). Encaminhe no mesmo dia para RX de tórax e discuta tratamento.
2.2.1.2.            Tabagista ou parou < 1 ano:  
*Motivar para parar.
*Se perda de peso, considere câncer de pulmão: solicitar RX de tórax e discutir.
*Se tosse com escarro na maioria dos dias por 3 meses por ≥ 2 anos, provável bronquite crônica: solicite rx de tórax, espirometria e discuta.
2.2.1.3.            Infecção das vias aéreas superiores (IVAS) recente, sem falta de ar - Provável tosse pós-infecciosa. Aconselhe que a tosse pode durar até 8 semanas.
2.2.1.4.            Se coriza/obstrucao nasal (Verificar texto “Sintomas do Nariz”). Se usa enelapril, discuta
2.2.1.5.            Se sibilos, aperto no peito ou falta de ar, considere também asma ou DPOC
2.3.              Se paciente tem uma doença incurável, ofereça cuidado paliativo (Verificar texto “Cuidados paliativos de rotina”). Se diagnóstico incerto/pouca resposta ao tratamento, discutir para considerar doença do refluxo gastro-esofágico, pneumonia atípica e outras causas.
 

`
  },
  {
    titulo: 'Sibilos/aperto no peito',
    pagina: 50,
    conteudo: `
        Sibilos/aperto no peito


1. Suspeita de anafilaxia ou insuficiência cardíaca:
*Anafilaxia - Se houver início súbito de sibilos/aperto no peito e mais 1: rash/coceira generalizada, edema de face/língua, PAS < 90, desmaio, dor abdominal/vômito persistente ou exposição à possível alérgeno (picada de inseto, ingestão de um medicamento ou uma comida nova nas últimas horas), considere anafilaxia (Verificar texto “Anafilaxia”).
*Insuficiência cardíaca - Se falta de ar pior ao deitar e edema em pernas, provável insuficiência cardíaca (Verificar texto “Insuficiência cardíaca: cuidados de rotina”).
 
2.   	Atenda com urgência paciente com sibilos/aperto no peito - Avalie a gravidade do episódio:
*Qualquer um dos seguintes está presente? FR > 30, SaO2 < 90, FC > 120, incapaz de falar frase completa, usa musculatura respiratória acessória, sem ruídos na ausculta (aperto no peito mas sem sibilos), agitação, sonolência ou confusão.
2.1.              Um ou mais dos sintomas acima presentes -  Tratar como asma grave.
*Encaminhe com urgência.
*Enquanto aguarda transporte:
- Aplique bromidrato de fenoterol 5mg/mL 10-20 gotas em 4mL de cloreto de sódio 0,9% via nebulizador com oxigênio 6L/min cada 20 minutos (ou continuamente, se necessário) ou aplique, alternativamente salbutamol 400-800mcg (4-8 jatos) via espaçador cada 20 minutos.
- Se optou por salbutamol, aplique oxigênio 1-4L/min via cânula nasal, almeje SaO2 entre 93-95% (se DPOC conhecida, considere SaO2 entre 88-92%).
- Se em cânula nasal a 4L/min e SaO2 < 93% (se DPOC conhecida, SaO2 < 88%), coloque máscara com reservatório e eleve fluxo de O2 até 15L/min, para atingir meta de SaO2.
- Aplique brometo de ipratrópio 0,25mg/mL 20-40 gotas via nebulizador a cada 20 minutos (ou mais frequente se necessário).
- Se ainda não tiver feito, dê prednisona 40mg oral. Se não for possível medicamento oral, aplique ao invés hidrocortisona 100mg EV.
 
2.2.              Sem nenhum dos sintomas de gravidade acima - Tratar como crise leve a moderada
*Aplique salbutamol 400-1000mcg (4-10 jatos) via espaçador. Se espaçador não disponível ou paciente incapaz de usar inalador com espaçador, aplique bromidrato de fenoterol 5mg/mL 10-20 gotas em 4mL de cloreto de sódio 0,9% via nebulizador com oxigênio (6L/min). Se não melhorar, repita a cada 20 minutos durante a primeira hora.
*Se asma/DPOC conhecido, dê prednisona 40mg oral.
*Monitore resposta regularmente.
2.2.1.  	Paciente piorando apesar do tratamento: Tratar como asma grave conforme as recomendações do item 2.1.
2.2.2.  	Paciente melhorando ou sem mudança na primeira hora.
*Verifique frequência respiratória. O paciente consegue falar normalmente? Se não conseguir falar normalmente ou frequência respiratória > 20, tratar como asma grave conforme item 2.1.
2.2.2.1.            Consegue falar normalmente e frequência respiratória ≤ 20?
2.2.2.1.1.	Sibilo/aperto no peito resolvido. Se primeiro episódio de sibilo/aperto no peito, avalie para asma e DPOC (Verificar texto “Asma e DPOC: diagnóstico). Se asma/DPOC conhecida, ofereça cuidados de rotina: se asma (Verificar texto “Asma: cuidados de rotina”), se DPOC (Verificar texto “Doença pulmonar obstrutiva crônica (DPOC): cuidados de rotina”).
2.2.2.1.2.	Sibilo/aperto no peito ainda presente.
*Repita salbutamol cada hora ou se necessário.
*Se sibilo/aperto no peito ainda presente após 3 horas, continue salbutamol e discuta ou encaminhe.
*Sibilo/aperto no peito resolvido após novas medidas, avaliar para asma e DPOC conforme item 2.2.2.1.1. 


`
  },
  {
    titulo: 'Dor abdominal',
    pagina: 58,
    conteudo: `
         Dor abdominal


1.   	Atenda com urgência paciente com dor abdominal e um ou mais dos seguintes sinais/sintomas:
*Glicemia > 200 (Verificar texto “Avalie e maneje glicemia capilar aleatória”)
*Dor em quadrante inferior direito com náusea/vômito/febre: provável apendicite
*Dor forte no quadrante superior direito com náusea/febre/perda de apetite: provável colecistite
*Se início súbito de dor abdominal e mais 1: rash/coceira generalizada, edema de face/língua, PAS < 90, desmaio ou exposição à possível alérgeno: considere anafilaxia (Verificar texto “Anafilaxia”)
*Não consegue urinar (verificar texto “Sintomas urinários”)
*Dor no peito (Verificar texto “Dor no peito”)
*Gestante, ou 1 semana após o parto, e PA ≥ 140/90 (verificar texto “Gestação: Avaliação”)
*Recente término da gestação/aborto/parto (verificar texto “Cuidado pós-natal (puerperal) de rotina”)
*Gestante e sangramento vaginal (verificar texto “Gestação: Avaliação”)
*Dor abdominal superior súbita irradiando para costas com náusea/vômito: provável pancreatite
*Dor intensa e massa abdominal pulsátil: provável aneurisma de aorta abdominal roto
*Defesa, rigidez ou dor à descompressão súbita do abdome: provável peritonite
*Icterícia
*Sem evacuações ou gases nas últimas 24 horas com/sem vômito
 
1.1.              Maneje e encaminhe com urgência:
*Se PAS < 90 ou provável pancreatite, aplique cloreto de sódio 0,9% 500mL EV rápido, repita até PAS > 90, continue 1L cada 4 horas. Pare se falta de ar ou novas crepitações pulmonares.
*Se provável aneurisma de aorta abdominal roto: não aplique fluidos EV mesmo se PA < 90/60 (elevar a PA pode piorar a ruptura).
*Se dor forte, aplique morfina 10mg IM ou morfina diluída 3-10mg EV lento (Dilua 10mg de morfina com 9mL de cloreto de sódio 0,9%. Aplique morfina diluída 3mL EV em 3 min (1mL/min). até 10 ml). Pare se PAS < 90.
 
2.         Abordagem do paciente dor abdominal que não necessita de atenção urgente:
*Se cólicas com vômitos, diarreia, perda de apetite, dor no corpo ou febre, provável gastroenterite (verificar texto “Náuseas ou vômitos”).
*Se sintomas urinários (verificar texto “Sintomas urinários”).
*Paciente tem dor abdominal baixa e tem vagina/útero?
2.1. 	Sim (dor abdominal baixa e tem vagina/útero):
*Se amenorreia ou sangramento vaginal anormal, exclua gravidez: se positivo, discuta no mesmo dia.
*Se cólica abdominal baixa durante menstruação, provável dismenorreia (Verificar texto “Sintomas Menstruais”).
*Pergunte sobre corrimento vaginal anormal e faça palpação bimanual para verificar dor mobilização colo:

2.1.1.            Presença de corrimento vaginal anormal ou dor à mobilização do colo - Provável doença inflamatória pélvica
*Prescreva ceftriaxona 500mg IM dose única e doxiciclina 100mg a cada 12 horas via oral por 14 dias e metronidazol (Evitar álcool até 24 horas após metronidazol via oral) 500mg via oral a cada 12 horas por 14 dias.
*Para dor, prescreva paracetamol ou dipirona (Não prescreva se alergia previa) 500- 1000mg cada 6 horas se necessário. Se não melhora, dê ibuprofeno (Tomar com alimentação. Não prescreva se úlcera péptica, reação alérgica ou exacerbação de asma com uso, doença renal, gestação. Considere associar omeprazol 20mg em jejum se HAS, diabetes, insuficiência cardíaca, ≥ 65 anos, dispepsia, úlcera péptica prévia, uso de AAS, corticosteroides, varfarina, abuso de álcool) 300-600mg cada 8 horas ate 5 dias.
*Trate parcerias sexuais últimos 60 dias (verificar texto “Sintomas genitais”).
*Se usa DIU, não precisa remover. Se optar remover, remova após 2 doses do tratamento.
*Reavalie em 3 dias de tratamento. Se não melhorar ou diagnóstico incerto discuta ou encaminhe.

2.1.2.           Sem corrimento vaginal anormal e sem dor à mobilização do colo.
*Se perda de peso (Verificar texto “Perda de peso”).
*Se eliminação vermes: se tênia/segmentos, discuta opções de tratamento. Se outro parasita/incerto, dê albendazol 400mg (se gestante, discuta opções), repita dose em 14 dias (trate familiares junto). Eduque higiene pessoal.
*Se constipação e/ou diarreia com dor recorrente que alivia com fezes ou gases, provável síndrome do intestino irritável: avalie e maneje o estresse (Verificar texto “Tristeza, estresse ou nervosismo”); evite cafeína, leite/lacticínios; se dor, considere hioscina 10-20mg cada 6 horas até 5 dias, se necessário.
*Se constipação (Verificar texto “Constipação”).
*Se diarreia (Verificar texto “Diarreia”).
*Se não melhorar ou diagnóstico incerto, discuta/encaminhe.
 
2.2. 	Não (apresentação não é dor abdominal baixa na presença de vagina/útero):
*paciente tem dor epigástrica que piora com a alimentação, fome ou deitado/inclinado para a frente?
 
2.2.1.            Sim - provável dispepsia/azia
*Oriente evitar café/bebida com gás/alimento gorduroso, condimentado ou ácido e, se sintomas noturnos, elevar cabeceira da cama e evitar comer tarde à noite.
*Pare AINEs e discuta sobre parar AAS. Pergunte sobre uso de tabaco e álcool. Se fuma tabaco (Verificar texto “Uso de tabaco”). Se bebe álcool ≥ 4 doses(Uma dose é 50mL (um copinho) de destilados, 125mL (uma taça pequena) de vinho ou 330mL (uma lata ou garrafinha) de cerveja)/sessão (Verificar texto “Uso de álcool/drogas”).
*Avalie e maneje o estresse (Verificar texto “Tristeza, estresse ou nervosismo”). Ofereça acupuntura, se disponível.
*Se circunferência abdominal > 88cm (mulher) ou 102cm (homem), incentive perda de peso e avalie risco cardiovascular (Verificar texto “Risco Cardiovascular (RCV): avaliação”).
*Prescreva omeprazol 20mg ao dia por 4 semanas. Se baixa resposta, aumente para 40mg ao dia. Considere hidróxido de alúminio 60mg/ mL 10mL (2 colheres de chá) 3-6 vezes/dia se necessário. Se sem resposta após 8 semanas, discuta e considere tratar H Pylori (discuta para decidir se trata mesmo sem EDA/confirmação diagnóstica).
*Se ≥ 60 anos, perda de peso inexplicada, dificuldade progressiva de engolir, massa abdominal ou vômitos persistentes/com sangue, anemia ou sangue vivo/oculto em fezes, linfadenopatia, pai/mãe/irmão com câncer de esôfago/estômago: solicite EDA e interprete.
*Se não melhorar ou diagnóstico incerto, discuta/encaminhe.
 
2.2.2.            Não - Ir para item 2.1.2.



`
  },
  {
    titulo: 'Náuseas ou vômitos',
    pagina: 59,
    conteudo: `
        Náuseas ou vômitos


1. Atenda com urgência paciente com náuseas ou vômitos e um ou mais dos seguintes sinais/sintomas:

*Dor de cabeça (Verificar texto “Dor de cabeça)  
*Dor no peito (Verificar texto “Dor no peito”)  
*Dor abdominal superior súbita e intensa irradiando para as costas: provável pancreatite  
*Pressão Arterial Sistólica (PAS) < 90 mmHg*  
*Defesa, rigidez ou dor à descompressão súbita do abdome: provável peritonite  
*Dor abdominal em quadrante inferior direito com febre: provável apendicite  
*Rigidez de nuca/meningismo ou rash purpúrico: provável meningite  
*Vômitos sanguinolentos  
*Icterícia  
*Dor/distensão abdominal e sem evacuações ou gases por mais de 24h  
*Sonolência/confusão/respiração rápida profunda  
*Se início súbito de coceira/rash generalizado, edema de face/língua, sibilos, falta de ar, PAS < 90, tontura/desmaio, dor abdominal intensa, considere anafilaxia (Verificar texto “Anafilaxia”)

1.1. Maneje e encaminhe com urgência:  
*Se provável meningite, aplique ceftriaxona 2g IM.  
*Se PAS < 90 ou provável pancreatite, aplique cloreto de sódio 0,9% 500mL EV rápido, repita até PAS > 90, continue 1L cada 4 horas. Pare se houver falta de ar ou novas crepitações pulmonares.  
*Se vômitos persistentes: dê metoclopramida 10mg oral ou aplique EV. Se dor intensa, aplique morfina 10mg IM ou morfina diluída 3-10mg EV lento (Dilua 10mg de morfina com 9mL de cloreto de sódio 0,9%. Aplique morfina diluída 3mL EV em 3 min (1mL/min). Se necessário, aplique mais 1mL/min até melhora, até 10mL), pare se PAS < 90.  
*Verifique glicemia: se < 55 ou > 200 (Verificar texto “Avalie e maneje glicemia capilar aleatória) ou se diabetes e < 70 (Verificar texto “Diabetes: cuidados de rotina”).

2. Abordagem do paciente com vômitos ou náuseas que não necessita de atenção urgente:  
*Se sede, boca seca, turgor da pele diminuído ou Frequência Cardíaca (FC) ≥ 100, provável desidratação: dê metoclopramida 10mg VO/IM/EV ou dimenidrinato 50-100mg VO e solução de reidratação oral: goles pequenos (meta: 1-2L em 2h). Se vômito, tente mais devagar. Se incapaz de beber, aplique cloreto de sódio 0,9% 250mL EV rápido. Se sem melhora após reidratação EV ou 2h de VO, encaminhe no mesmo dia.  
*Exclua gravidez. Se gestante, tranquilize que náusea/vômitos são comuns no 1o trimestre. Oriente refeições pequenas, leves, frequentes e evitar comidas/cheiros que causem náuseas. Consumo de gengibre e acupressão (3 dedos acima do pulso em região anterior) podem ajudar. Se não melhorar, prescreva dimenidrinato 50-100mg ou metoclopramida 10 mg cada 8 horas se necessário por até 5 dias. Se vômitos persistentes, discuta. Ofereça cuidados de pré-natal (Verificar texto “Gestação: Avaliação”).  
*Se tontura associada (Verificar texto “Tontura").  
*Revise medicamentos: AINEs, metformina, contraceptivos, terapia hormonal, teofilina, quimioterapia e morfina podem causar náuseas/vômitos. Se em tratamento para TB (Verificar texto “TB Sensível (TB-S): cuidados de rotina”) ou em TARV (Verificar texto “Iniciar/reiniciar TARV no paciente com HIV”).  
*Rastreie uso de álcool/drogas: no último ano: 1) bebeu ≥ 4 doses2/vez, 2) usou drogas ilegais ou 3) abusou de medicamentos com/sem prescrição? se sim para qualquer um (Verificar texto “Uso de álcool/drogas”).

3. Paciente refere vômitos de início recente com cólicas abdominais, diarreia, perda de apetite, dor no corpo ou febre?

3.1. Sim: provável gastroenterite  
*Prescreva metoclopramida 10mg ou dimenidrinato 50-100mg cada 8 horas se necessário até 5 dias.  
*Prescreva soro de reidratação oral.  
*Oriente beber bastante líquidos, comer refeições leves, pequenas e frequentes e evitar comida gordurosa.  
*Oriente retornar se piora, vômitos > 3 dias ou não consegue ingerir líquidos.

3.2. Não: paciente tem dor epigástrica que piora com a alimentação, fome ou deitado/inclinado para a frente?

3.2.1. Sim: provável dispepsia/azia  
*Oriente evitar café/bebida com gás/alimento gorduroso, condimentado ou ácido e, se sintomas noturnos, elevar cabeceira da cama e evitar comer tarde da noite.  
*Pare AINEs e discuta sobre parar AAS. Se fuma tabaco (Verificar texto “Uso de tabaco”). Se bebe álcool ≥ 4 doses/sessão (Verificar texto “Uso de álcool/drogas”). Uma dose é 50mL (um copinho) de destilados, 125mL (uma taça pequena) de vinho ou 330mL (uma lata ou garrafinha) de cerveja.  
*Avalie e maneje o estresse (Verificar texto “Tristeza, estresse ou nervosismo”). Ofereça acupuntura, se disponível.  
*Se circunferência abdominal > 88cm (mulher) ou 102cm (homem), incentive perda de peso e avalie risco cardiovascular (Verificar texto “Risco Cardiovascular (RCV): avaliação”).  
*Prescreva omeprazol 20mg ao dia por pelo menos 4 semanas. Se baixa resposta, aumente para 40mg ao dia. Considere hidróxido de alumínio 60mg/mL 10mL (2 colheres de chá) 3-6 vezes/dia se necessário. Se sem resposta após 8 semanas, discuta para considerar tratar H Pylori (discuta para decidir se trata mesmo sem EDA/confirmação diagnóstica).  
*Se ≥ 60 anos, perda de peso inexplicada, dor/dificuldade progressiva de engolir, sangue nas fezes, massa abdominal ou vômitos persistentes/com sangue, em investigação de anemia ou de sangue oculto em fezes, linfadenopatia, pai/mãe/irmão com câncer de esôfago/estômago: solicite EDA e interprete.

3.2.2. Não:  
*Avalie estresse e ansiedade (Verificar texto “Tristeza, estresse ou nervosismo”).  
*Se paciente tem uma doença incurável, ofereça também cuidados paliativos (Verificar texto “Cuidados paliativos de rotina”).  
*Discuta se: náuseas/vômitos persistentes > 2 semanas ou diagnóstico incerto.


`
  },
  {
    titulo: 'Diarreia',
    pagina: 60,
    conteudo: `
        Diarreia


 1.   	Atenda com urgência paciente com diarreia e um ou mais dos seguintes:
*Sede, boca seca, turgor de pele diminuído, olhos fundos, sonolência/confusão, PAS < 90, FC ≥ 100 - provável desidratação.
 
1.1.              Trate desidratação:
*Dê solução de reidratação oral: goles pequenos (meta: 1-2L em 2h). Se vômito, espere 10 min e tente mais devagar, ou dê metoclopramida 10mg VO/IM/EV ou dimenidrinato 50-100mg VO.
- Se incapaz de beber ou PAS < 90, aplique cloreto de sódio 0,9% 250mL EV rápido, repita até PAS > 90. Pare se falta de ar ou novas crepitações pulmonares.
- Se sem melhora após reidratação EV ou 2 horas de reidratação oral, discuta/encaminhe no mesmo dia.
 
2.   	Abordagem do paciente com diarreia que não necessita de atenção urgente:
*Confirme que paciente tem diarreia: fezes liquefeitas e/ou > 3 evacuações ao dia.
*Oriente paciente aumentar consumo de fluidos e alimentos leves e salgados, comer refeições pequenas e frequentes e a evitar bebidas doces/cafeinadas.
*Se > 65 anos, restrito ao leito ou em cuidados paliativos, avalie massa fecal imóvel e sólida no reto. Se presente, provável impactação fecal: discuta opções de tratamento/enema.
*Pergunte sobre a duração da diarreia:
 
2.1.              Diarreia por ≤ 2 semanas:
*Prescreva solução reidratação oral.
*Se vômitos, prescreva dimenidrinato 50-100mg ou metoclopramida 10 mg cada 8 horas se necessário por até 5 dias.
*Temperatura ≥ 38°C e/ou sangue ou muco/pus nas fezes?
 
2.1.1. 	Sim: Provável disenteria
*Trate com ciprofloxacino 500mg cada 12 horas por 3 dias. Se gestante, substitua por azitromicina 500mg ao dia por 3 dias.
*Se não melhorar após 2 dias adicione metronidazol (evitar álcool até 24 horas após metronidazol via oral) 500mg cada 8 horas por 7 dias.
*Reavalie em 2 semanas se diarreia persistir.
 
2.1.2. 	Não: Provável gastroenterite
*Se sintomas respiratórios, alteração/perda olfato/paladar, possível COVID.
*Se disponível, prescreva loperamida 4mg inicialmente, depois 2mg após evacuações, máximo 16mg/dia.
*Se esteve em área de cólera - diarreia 'água de arroz' (diarreia aquosa turva sem sangue/pus e sem odor fecal, pode ter odor de peixe) em grande volume): dê azitromicina 1g dose única e discuta.
*Oriente que antibióticos não são necessário, que deve beber bastante líquidos e retornar se piora ou sangue nas fezes.
*Reavalie em 2 semanas se diarreia persistir
 
2.2.              Diarreia por > 2 semanas
*Teste para HIV (Verificar texto “HIV: diagnóstico”). Se HIV positivo, discuta.
*Se sangue/muco, discuta.
*Solicite exame parasitológico de fezes e cultura/antibiograma e, enquanto aguarda resultado/se exame não for viável, considere tratar giardíase: prescreva metronidazol 250mg cada 8 horas por 5-7 dias (evitar álcool até 24 horas após o término da administração de metronidazol via oral). Se não tolerar metronidazol, pare e dê ao invés albendazol 400mg ao dia por 5 dias. Se gestante, não use albendazol.
*Se realizado, avalie resultado do exame parasitológico de fezes e cultura/antibiograma.
 
2.2.1. 	Parasitológico ou cultura positiva: trate de acordo com o resultado.
 
2.2.2. 	Parasitológico ou cultura negativa
*Prescreva metronidazol (evitar álcool até 24 horas após o término da administração de metronidazol via oral) ou albendazol como acima, se não já tiver precrito.
*Se disponível, prescreva loperamida 4mg inicialmente, depois 2mg após evacuações, máximo 16mg/dia.
*Se hospitalização/antibioticoterapia recente, considere infecção por Clostridium difficile e discuta.
*Revise medicamentos que podem causar diarreia (AINEs, omeprazol, metformina, sertralina).
*Se > 50 anos, faça toque retal para excluir massas/alterações. Discuta, se necessário.
 
2.2.3. 	Se diarreia persiste apesar do tratamento:
*Solicite: HMG, TGO, TGP, GGT, FA, LDH, albumina, cálcio, B12, folato, ferritina, TSH, VHS, PCR, transglutaminase-IgA. Interprete resultados e discuta se necessário.
*Se perda de peso, sangramento retal, massa retal/abdominal, anemia, VHS/PCR elevados, ≥ 60 anos: solicite colonoscopia e discuta.
 
3.   	Cuidados adicionais para todos os pacientes:
*Aconselhe aumentar ingestão de líquidos, higiene frequente das mãos com água e sabão, antes de preparar alimentos/após ir banheiro. Lavar todas as superfícies/equipamentos utilizados na preparação de alimentos.Lavar e descascar frutas e vegetais. Usar apenas água segura/desinfetada para preparar alimentos/bebidas/gelo. Cozinha bem alimentos, evitar alimentos crus/não cozidos, especialmente carne e frutos do mar.
*Se episódios recorrentes de diarreia e sem acesso a água potável, envolva assistência social.
*Se paciente tem uma doença incurável, ofereça também cuidados paliativos (Verificar texto “Cuidados paliativos de rotina”).


`
  },
  {
    titulo: 'Constipação',
    pagina: 61,
    conteudo: `
        Constipação


 1.   	Atenda com urgência paciente com constipação e:
*Sem fezes ou gases há 24 horas com dor/distensão abdominal e vômito. Neste caso, discuta/encaminhe no mesmo dia.
 
2.   	Abordagem do paciente com constipação que não necessita de atenção urgente:
 
*Revise dieta, ingestão de líquidos e medicamentos (amitriptilina, codeína, morfina e antipsicóticos podem causar constipação). Pergunte sobre uso regular de enema ou laxativos.
*Exclua gravidez. Se gestante, oriente que constipação é comum durante gestação. Ofereça cuidados de pré-natal  (Verificar texto “Gestação: Avaliação”) e aconselhe como abaixo.
*Se ganho de peso sem aumento de apetite, desânimo, pele seca, intolerância ao frio: solicite TSH. Se TSH anormal, discuta investigações adicionais e tratamento.
*Se paciente está acamado ou tem uma doença incurável, considere oferecer também cuidados paliativos (Verificar texto “Cuidados paliativos de rotina”).
*Se paciente > 65 anos, restrito ao leito ou em cuidados paliativos, avalie a presença de massa fecal imóvel e sólida no reto. Se presente, provável impactação fecal: discuta opções de tratamento/enema. Oriente dieta rica em fibras (vegetais, frutas, cereais integrais, farelos e ameixas secas cozidas), ingestão de líquidos e ≥ 30min de exercícios moderados (p. ex. caminhada rápida) na maior parte dos dias.
*Se não melhorar com dieta e exercícios, dê óleo mineral 15-45mL ao dia ou a cada 8 horas. Evite uso prolongado. Se não melhorar, discuta.
*Se ≥ 40 anos, verifique necessidade de rastrear câncer colorretal (Verificar texto “Avaliação geral da saúde”). Se constipação recente inexplicada e sem melhora, perda de peso inexplicada (Verificar texto “Perda de peso”), sangue ou sangue oculto positivo em fezes, anemia, história familiar de câncer colorretal/doença inflamatória intestinal: solicite HMG, TSH, glicose, creatinina, cálcio, rx abdome e colonoscopia. Interprete e discuta.


`
  },
  {
    titulo: 'Sintomas anais',
    pagina: 61,
    conteudo: `
         Sintomas anais


1.   	Atenda com urgência paciente com sintomas anais e um ou mais dos seguintes sinais/sintomas:
*Nódulo extremamente dolorido no ânus
*Incapaz de defecar devido aos sintomas anais
                             *Nos casos acima, discuta/encaminhe no mesmo dia.
 
2.   	Paciente sem necessidade de atendimento de urgência:
*Pergunte sobre prática sexual anal receptiva desprotegida, dor anal, sangramento, corrimento e coceira/irritação anal. Em seguida examine o ânus e maneje conforme abaixo de acordo com o problema.
*Se tem prática sexual anal, pergunte também sobre sintomas genitais (Verificar texto “Sintomas genitais”).
 
2.1.              Fissura/s
*Oriente banho de assento com água morna 2-3x/dia.
*Se constipação, trate como acima.
*Dê lidocaína 2% gel antes/após evacuar.
*Se não melhorar, discuta.
 
2.2.              Nódulo/plicoma: provável hemorroidas
*Maneje constipação (como acima). Oriente evitar esforço ao evacuar e banho de assento com água morna 2-3x/dia.
*Dê dexametasona 0,1% pomada cada 12 horas até 7 dias. Se dor, dê lidocaína 2% gel cada 12 horas. Sem melhora, dê ibuprofeno 300-600mg cada 8 horas até 5 dias (Tomar com alimentação. Não prescreva se úlcera péptica, reação alérgica ou exacerbação de asma com uso, doença renal, gestação. Considere associar omeprazol 20mg em jejum se HAS, diabetes, insuficiência cardíaca, ≥ 65 anos, dispepsia, úlcera péptica prévia, uso de AAS, corticosteroides, varfarina, abuso de álcool).
*Se sem melhora, irredutível ou trombosada, discuta/ encaminhe.
 
2.3.              Úlceras ou corrimento
*Se úlceras (Verificar texto “Úlceras genitais”).
*Se corrimento, provável proctite (Considere proctite se prática sexual anal receptiva e dor/desconforto, sangue e/ou corrimento/pus anal/retal ou nas fezes): dê ceftriaxona 500mg IM e azitromicina 1g VO dose única para paciente/parcerias.
*Se contato com Mpox ou alta prevalência local, considere Mpox e discuta.
*Se dúvidas ou sem melhora, discuta.
*Verrugas perianais: Trate como verrugas genitais (Verificar texto “Outros sintomas genitais”).
 
2.4.              Coceira/irritação com pele vermelha/cruenta
*Oriente boa higiene.
*Oriente aplicar óleo mineral. Se coceira intensa, prescreva também dexametasona 0,1% pomada a cada 12 horas por 5 dias.
*Procure causa de contato. Se diarreia (Verificar texto “Diarreia”).
*Discuta se não melhorar.
 
2.5.              Suspeita de vermes
*Dê albendazol 400mg (Se gestante, discuta opções de tratamento). Repita dose em 14 dias. Trate familiares junto.
*Eduque higiene pessoal.
 

`
  },
  {
    titulo: 'Sintomas Genitais',
    pagina: 62,
    conteudo: `
         Sintomas Genitais

1.           	Avalie paciente com sintomas genitais e suas parcerias
1.1. Sintomas
*Pergunte sobre corrimento, rash, coceira, nódulo(s), úlcera(s), vesícula(s) na região dos genitais (pênis, vagina, ânus). Maneje outros sintomas conforme página do sintoma.
1.2. Saúde Sexual
*Pergunte sobre identidade de gênero (cis, trans/travesti, não binarie), orientação sexual (hetero, homo ou bi), problemas sexuais (ver texto de Problemas Sexuais), risco de IST/HIV (IST ou PEP há < 1 ano, nova ou múltiplas parcerias, uso irregular de preservativo). Se risco para IST/HIV, aconselhe sexo seguro/prevenção combinada como quadro abaixo e ofereça PrEP (Ver Texto sobre PrEP: Profilaxia pré-exposição ao HIV).
1.3. Violência Sexual
*Pergunte sobre violência sexual. Se sim, verificar texto “Paciente em situação de violência”.

1.4. Planejamento Familiar
*Avalie necessidade de contracepção (verificar texto “Contracepção”). Exclua gravidez. Se gravidez, verificar texto “Gravidez: Avaliação”.

1.5. Exame Físico
*Pessoa com útero/vagina: examine abdome para massas, investigue corrimento/úlcera/rash/nódulo. Palpação bimanual para dor à mobilização do colo ou massas pélvicas. Exame especular para alteração cervical.
*Pessoa com pênis: procure por corrimento, linfonodos inguinais, úlceras, edema escrotal ou massas. Se tem prepúcio, verifique se retrai totalmente e procure por ferimentos/úlceras.

1.6. HIV
*Teste para HIV (prefira sempre teste rápido) (ver texto HIV: diagnóstico). Se positivo, inicie TARV (em até 7 dias) e ofereça cuidados de rotina (ver texto HIV: cuidados de rotina).

1.7.  Sífilis
*Se não tem história de sífilis, faça teste rápido (TR). Se história de sífilis ou TR não disponível, solicite teste não treponêmico (ver texto Sífilis: Diagnóstico). Interprete. Se diagnóstico de sífilis, trate paciente e parcerias (ver texto Sífilis: Tratamento).

1.8. Hepatite B
*Se tem registro de anti-HBs ≥ 10, considere imune (não precisa testar/vacinar). Se não tem anti-HBs ≥ 10 ou tem anti-HBs < 10, teste para hepatite B e verifique necessidade de vacinar (ver texto Hepatite B (HBV): diagnóstico).

1.9. Hepatite C
*Teste para hepatite (ver texto Hepatite C (HCV): diagnóstico).

1.10. Exame Citopatológico
*Avalie necessidade de rastrear câncer de colo de útero (ver texto). Se corrimento vaginal anormal, trate corrimento antes de rastrear (Verificar texto “Corrimento vaginal”).

2.           	Aconselhe paciente com sintomas genitais e suas parcerias.
*Aconselhe sexo seguro/prevenção combinada: forneça preservativo/gel lubrificante, oriente teste regular de ISTs e o que é e onde buscar PEP/PrEP. Usar luvas se fisting. Evitar compartilhar brinquedos sexuais.
- Se está com sintomas genitais/IST: explique causa e que ISTs aumentam risco de infecção pelo HIV. Oriente sobre importância de revelar diagnóstico e tratar parcerias. Ajude revelar diagnóstico para cada parceria. Estimule paciente e parcerias fazerem tratamento completo, absterem-se de sexo por pelo menos 1 semana após tratamento e melhora completa.
 
3.           	Trate paciente com sintomas genitais e suas parcerias (ver textos específicos).
3.1. Corrimento
*Penis (Verificar texto “Sintomas no penis/região escrotal”)
*Vaginal (Verificar texto “Corrimento vaginal”)
*Anal (Verificar texto “Sintomas anais”)
3.2. Dor/edema escrotal (Verificar texto “Sintomas no penis/região escrotal”)
3.3. Coceira
*Corrimento vaginal (Verificar texto “Corrimento vaginal”)
*Penis (Verificar texto “Sintomas no penis/região escrotal”)
*Área púbica (verificar texto “Outros sintomas genitais”)
3.4. Úlcera/vesícula (Verificar texto “Úlcera genital”
3.5. Nódulo(s) 
*Virilha (verificar texto “Nódulo(s)/edema no pescoço, axila ou virilha”)
*Pele (verificar texto “Outros sintomas genitais”)
 
 
4.           	Trate conforme o diagnóstico
4.1. Conforme o diagnóstico do paciente:
*Trate parcerias de acordo com o diagnóstico de paciente e oriente parcerias com sintomas a procurarem avaliação.
4.2. Cervicite/doença inflamatória pélvica:
*Prescreva às parcerias dos últimos 60 dias (mesmo sem sintomas ou teste positivo) dose única de ceftriaxona 500mg IM e azitromicina 1g via oral.
4.3. Uretrite masculina ou orqui/epididimite:
*Prescreva às parcerias dos últimos 60 dias (mesmo sem sintomas ou teste positivo) dose única de ceftriaxona 500mg IM e azitromicina 1g via oral.
4.4. Úlcera genital (sífilis/cancroide):
*Prescreva às parcerias dos últimos 90 dias (mesmo sem sintomas ou teste positivo) dose única de penicilina benzatina 2,4MUI IM e azitromicina 1g via oral.
*Se houver alergia confirmada à penicilina ou silicone nos locais de aplicação, veja as orientações no texto "Sífilis: Tratamento".
4.5. Sífilis positivo:
*Prescreva às parcerias dos últimos 90 dias (mesmo sem sintomas ou teste positivo) penicilina benzatina 2,4MUI IM dose única.
*Se alergia confirmada à penicilina ou silicone nos locais de aplicação, consulte o texto "Sífilis: Tratamento".
*Teste a parceria para sífilis, interprete o resultado e decida se é necessário tratar para sífilis tardia.
4.6. Balanite/balanopostite:
*Se a parceria apresentar sintomas vaginais, prescreva miconazol 2% creme vaginal 1x/dia à noite por 7 dias ou dose única de fluconazol 150mg via oral. Se estiver gestante, não prescreva fluconazol.
4.7. Pediculose pubiana:
*Prescreva permetrina 1% (dilua 1 parte de permetrina 5% em 4 partes de água) loção nas áreas afetadas, enxágue após 10 minutos (evitar mucosas, abertura uretral e áreas cruentas). Repita após 7 e 14 dias, se necessário.
4.8. Linfogranuloma venéreo:
*Se as parcerias estiverem sintomáticas, prescreva doxiciclina 100mg via oral cada 12 horas por 21 dias. Se gestante ou amamentando, prescreva azitromicina 1g/semana por 3 semanas.
*Se as parcerias dos últimos 60 dias estiverem assintomáticas, prescreva dose única de azitromicina 1g via oral.


`
  },
  {
    titulo: 'Sintomas no penis/região escrotal',
    pagina: 63,
    conteudo: `
         Sintomas no penis/região escrotal

 
 
1.            	Atenda com urgência paciente com sintomas no pênis/região escrotal e um ou mais dos seguintes:
*Edema/dor escrotal com qualquer um dos seguintes: dor súbita intensa, testículo afetado mais alto/rotacionado, trauma/atividade extenuante prévia: provável torção testicular.
*Prepúcio retraído sobre a grande, incapaz de ser reduzido, com edema e glande muito dolorida: provável parafimose.
*Ereção prolongada > 4 horas: provável priapismo.
 
1.1.              Maneje:
*Se provável torção de testículo ou priapismo: encaminhe com urgência.
*Se provável parafimose: se glande azul/enegrecida: encaminhe com urgência. Se não está azul/enegrecida, tente redução manual:
- Aplique lidocaína gel 2% gel na glande e a envolva com gaze (com ou sem gelo). Aplique pressão crescente por 10-15 minutos até recolocar prepúcio sobre a glande. Se não melhorar, encaminhe com urgência.
 
2.            	Abordagem de paciente com sintomas no pênis/região escrotal que não necessita de atenção urgente.
*Se ainda não tiver feito, avalie paciente com sintomas genitais (verificar texto “Sintomas genitais”).
*Se disúria/aumento da frequência/urgência urinária e sem corrimento e sem sexo desprotegido/nova parceria no último mês (verificar texto “Sintomas Urinários”).
 
2.1.              Corrimento e desconforto uretral ou disúria/queimação ao urinar e sexo desprotegido/nova parceria no último mês
*Provável uretrite masculina. Prescreva dose única de ceftriaxona 500mg IM e  Dose única de azitromicina 1g via oral.
*Notifique paciente e trate parcerias últimos 60 dias.
*Oriente retornar em 7-10 dias se não melhorar:
Se tratamento incompleto ou nova exposição/parceria não tratou, retrate paciente e parcerias (verificar texto “Sintomas genitais”)
Se tratamento adequado paciente/parceria e sem nova exposicao: Prescreva dose única de ceftriaxona 500mg IM e azitromicina 2g via oral e, se sexo vaginal, metronidazol (Evitar álcool até 24 horas após metronidazol) 2g via oral.
Se sintomas persistirem apos 7-10 dias, discuta.

 
2.2.              Dor ou edema escrotal
2.2.1.            	Dor com/sem edema ou corrimento: provável epididimite/orqui-epididimite:
*Prescreva dose única de ceftriaxona 500mg IM e doxiciclina 100mg cada 12 horas por 10 dias.
*Trate parcerias últimos 60 dias
*Se dor, prescreva paracetamol ou dipirona (Não prescreva se alergia prévia) 500-1000mg ou ibuprofeno 300-600mg cada 6 horas por até 5 dias (Tomar com alimentação. Não prescreva se úlcera péptica, reação alérgica ou exacerbação de asma com uso, doença renal, gestação. Considere associar omeprazol 20mg em jejum se HAS, diabetes, insuficiência cardíaca, ≥ 65 anos, dispepsia, úlcera péptica prévia, uso de AAS, corticosteroides, varfarina, abuso de álcool).
*Se não melhorar em 72h discuta e considere USG e tratamento/diagnóstico alternativo.
 
2.2.2.            	Nódulo indolor: considere câncer testicular. Solicite USG com prioridade e discuta.
 
2.3.            	Dor, coceira ou odor fétido na glande - Provável balanite/balanopostite:
*Aconselhe lavar todo dia com água, evitar sabonete. Retrair prepúpio ao lavar, secar totalmente. Considere hidrocortisona 1% tópica, se disponível, 2x/dia por 5-7 dias.
*Se sinais típicos (Rash com coceira/dor, descamação, pequenas pápulas/placas avermelhadas, secreção esbranquiçada) ou parceira com/candidíase, dê miconazol 20mg/g creme cada 12 horas por 7 dias (ao invés da hidrocortisona). Se sintomas intensos prescreva fluconazol 150mg dose única e considere associar hidrocortisona.
*Se fimose/parafimose: discuta indicação de circuncisão.
*Se parceria sintomática, trate
*Oriente paciente retornar em 7 dias se sintomas persistirem:
- Se baixa adesão, repita tratamento.
- Considere testar para DM (ver texto) e HIV e discuta.
 
2.4.            	Se contato com Mpox nos últimos 21 dias ou alta prevalência local e lesão única/múltipla, geralmente com umbilicação central ou edema de pênis, considere Mpox e discuta.
 
`
  },
  {
    titulo: 'Corrimento vaginal',
    pagina: 64,
    conteudo: `
         Corrimento vaginal

1.       Informações gerais
*É normal ter corrimento vaginal fisiológico. Corrimentos anormais coçam ou tem cor ou odor. Nem todo corrimento é uma Infecção Sexualmente Transmissível.
*Se ainda não tiver feito, primeiro avalie e aconselhe paciente com corrimento vaginal (ver texto: Sintomas Genitais). Faça inspeção, exame especular e toque vaginal:
*Se corrimento grumoso/sem odor e com coceira ou vulva inflamada (vermelha, inchada, dolorida), provável candidíase: dê miconazol 2% creme vaginal à noite por 7 dias ou dose única de fluconazol 150mg via oral. Se gestante ou amamentando, não prescreva fluconazol. Se parceria sintomática, trate balanite/balanopostite (ver texto Sintomas no pênis/região escrotal).
- Se sintomas intensos/disfunção imune (HIV ou diabetes mal controlados, doença renal/hepática/autoimune ou câncer), dê fluconazol (Se gestante ou amamentando dê miconazol 2% creme vaginal à noite por 14 dias) 150mg via oral em 0, 3 e 6 dias. Se ≥ 4 episódios/ano, trate com fluconazol (Se gestante ou amamentando dê miconazol 2% creme vaginal à noite por 14 dias, então 2x/semana) 150mg via oral em 0, 3 e 6 dias, então 1x/semana por 6 meses. Teste para diabetes e HIV.
*Continue avaliando paciente: 
 
2.            	Tem dor abdominal baixa ou dor à mobilização do colo?
 
2.1.              Não:
*Uso irregular de preservativo ou nova/múltiplas parcerias sexuais ou parceria/paciente com IST e 1 ou mais dos seguintes: sagramento pós-coito/intermenstrual, muco/pus no colo, colo avermelhado/edemaciado ou sagramento fácil se colo manipulado com swab/espátula?
 
2.1.1.            	Não: Considere vaginose bacteriana:
*Se corrimento vaginal com odor fétido ou KOH positivo, dê metronidazol (Evitar álcool até 24 horas após metronidazol via oral) 500mg via oral cada12 horas por 7 dias ou metronidazol 100mg/g gel vaginal à noite por 5 dias.
*Se sem odor fétido e KOH negativo (se disponível): se provável candidíase, trate como acima. Se candidíase improvável, discuta.
*Reavalie em 7 dias após tratamento. Se não melhorou vá para item 2.1.3.:
 
2.1.2.            	Sim: Provável cervicite:
*Prescreva dose única de ceftriaxona 500mg IM e azitromicina 1g via oral.
*Se corrimento vaginal com odor fétido ou teste KOH positivo, associe: metronidazol (Evitar álcool até 24 horas após metronidazol via oral) 500mg cada 12 horas por 7 dias.
*Notifique paciente e trate parcerias últimos 60 dias (independente de sintomas/testes).
*Reavalie em 7 dias após tratamento. Se não melhoro vá para item 2.1.3.:
 
2.1.3.            	Reavalie em 7 dias após tratamento. Se não melhorou:
*Examine colo, reavalie diagnóstico e considere coletar citopatológico.
*Verifique adesão: se tratamento incompleto, repita tratamento e reavalie em 7 dias. Se tratamento completo, maneje de acordo com diagnóstico prévio:
- Se candidíase, discuta/encaminhe.
- Se vaginose, considere tricomoníase e prescreva metronidazol4 2g via oral dose única para paciente e parcerias sexuais. Reavalie em 7 dias. Se não melhorar, discuta/encaminhe.
- Se cervicite, verifique se teve nova exposição/parceria não tratou. Se sim, retrate paciente/ parcerias e reavalie em 7 dias. Se não teve reexposição/parceria tratou: se não usou metronidazol, considere tratar paciente/parceria com metronidazol 500mg 2g via oral dose única e reavalie em 7 dias. Se já usou metronidazol, discuta/encaminhe.
 
2.2.              Sim (tem dor abdominal baixa ou dor à mobilização do colo) - Atenda com urgência paciente com 1 ou mais dos seguintes:
*Aborto/parto/término recente de gestação
*Gravidez ou menstruação atrasada
*Peritonite (defesa, rigidez ou dor à
*descompressão do abdome)
*Sangramento vaginal anormal
*Temperatura ≥ 38°C ou PAS < 90
*Massa abdominal
 
2.2.1.            	Maneje e encaminhe com urgência:
*Se PAS < 90, aplique cloreto de sódio 0,9% 500mL EV em 30 minutos, repita até PAS > 90 ou até 3L. Pare se falta de ar ou novas crepitações pulmonares.
 
2.2.2.              Abordagem da paciente que não necessita de atenção urgente
*Dor à mobilização do colo com ou sem dor abdominal baixa. Provável Doença Inflamatória Pélvica. Tratar como abaixo.
*Apenas dor abdominal baixa, sem dor à mobilização do colo. Se ardência ao urinar, aumento da frequência ou urgência: provável ITU (verificar texto “Sintomas Urinários”). Se improvável, trate conforme abaixo.
*Tratamento de doença inflamatória pélvica
Prescreva ceftriaxona 500mg IM dose única e doxiciclina 100mg cada 12 horas por 14 dias e metronidazol 500mg cada 12 horas por 14 dias.
Para dor, prescreva paracetamol ou dipirona (Não prescreva se alergia prévia). 500-1000mg cada 6 horas se necessário.
Se não melhorar, prescreva também ibuprofeno (Tomar com alimentação. Não prescreva se úlcera péptica, reação alérgica ou exacerbação de asma com uso, doença renal, gestação. Considere associar omeprazol 20mg em jejum se HAS, diabetes, insuficiência cardíaca, ≥ 65 anos, dispepsia, úlcera péptica prévia, uso de AAS, corticosteroides, varfarina, abuso de álcool) 300-600mg cada 8 horas até 5 dias.
Trate parcerias últimos 60 dias (independente de sintomas/testes).
Se usa DIU, não precisa remover. Se optar remover, remova após 2 doses do tratamento. Reavalie em 3 dias de tratamento. Se não melhorar discuta ou encaminhe.
 
`
  },
  {
    titulo: 'Úlcera Genital',
    pagina: 65,
    conteudo: `
        Úlcera genital

 
1.            	Avalie paciente com úlcera genital (verificar também o texto “Sintomas Genitais”). Paciente tem ou teve recentemente vesículas na região genital?
 
1.1.              Sim: Trate para herpes genital
 
*Inicie tratamento em até 72 horas do início dos sintomas ou após 72h se continua aparecendo novas lesões ou mantém dor:
- Se primeiro episódio, dê aciclovir 400mg cada 8 horas por 7-10 dias. Se melhora parcial, trate mais 5-7 dias.
- Se episódios recorrentes e sintomas leves, considere não tratar.
- Se episódios recorrentes e sintomas moderados, dê aciclovir 800mg cada 12 horas por 5 dias.
*Se disfunção imune (HIV ou diabetes mal controlados, doença renal/hepática/autoimune ou câncer), dê aciclovir 400mg cada 8 horas por 5-10 dias.
*Considere deixar prescrição para paciente tratar ao início dos sintomas (dor, coceira, vermelhidão, antes das vesículas aparecerem).
*Se > 6 episódios em 1 ano, ofereça terapia supressora: dê aciclovir 400mg cada 12 horas por 6 meses à 1 ano. Se persistir após 1 ano, discuta para prolongar tratamento por mais 1 ano.
*Se gestante, prescreva profilaxia com aciclovir 400mg cada 8 horas entre 36 semanas até o parto.
*Se dor, dê paracetamol ou dipirona (Não prescreva se alergia prévia) 500-1000mg cada 6 horas e lidocaína 2% gel cada 8 horas nas lesões se necessário. Se não melhorar, dê ibuprofeno (Tomar com alimentação. Não prescreva se úlcera péptica, reação alérgica ou exacerbação de asma com uso, doença renal, gestação. Considere associar omeprazol 20mg em jejum se HAS, diabetes, insuficiência cardíaca, ≥ 65 anos, dispepsia, úlcera péptica prévia, uso de AAS, corticosteroides, varfarina, abuso de álcool) 300-600mg cada 8 horas por ate 5 dias.
*Oriente que banhos de assento por 10 minutos em água morna ou compressas com soro fisiológico podem ajudar na dor.
*Mantenha lesões limpas e secas.
*Explique que o tratamento não cura a infecção, que ela é para toda a vida que é comum ter episódios recorrentes mais leves.
*Oriente que a transmissão da herpes pode ocorrer mesmo sem sintomas. Oriente uso dos preservativos e não ter relações sexuais se lesões ativas.
*O risco de infecção pelo HIV aumenta quando tem úlceras.
*Se sexo desprotegido nos últimos 3 meses, teste para sífilis. Se não for possível testar, trate também para provável sífilis/cancro (conforme quadro abaixo).
*Oriente que se não melhorar em 7 dias deve retornar para reavaliar, discuta.
 
1.2.              Não - trate para sífilis recente/primária e cancroide
*Aplique na mesma consulta dose única de penicilina benzatina 2,4MUI IM (se alergia confirmada à penicilina/silicone locais aplicação (ver Texto Sífilis: Tratamento).
*Prescreva dose única de azitromicina 1g via oral (para cancroide).
*Oriente que febre, dor de cabeça, dor muscular, coceira e rash podem ocorrer após tratamento e melhoram em 1-2 dias. Prescreva paracetamol ou dipirona 500-1000mg cada 6 horas se necessário.
*Teste para sífilis (ver texto Sífilis: Diagnóstico).
*Trate parcerias dos últimos 3 meses (independente de sintomas/testes).
*Se corrimento vaginal/uretral, trate também paciente e parcerias para gonorreia. prescreva ceftriaxona 500mg IM dose única.
*Oriente que se não melhorar em 7 dias deve retornar para reavaliar, discuta.
 
2. Verifique também se paciente tem úlcera(s) persistente(s) por mais de 4 semanas ou linfonodos inguinais inchados, doloridos e quentes (discretos, móveis e elásticos) - Se tiver, paciente tem provável Linfogranuloma Venéreo/Donovanose:
*Prescreva doxiciclina 100mg cada 12 horas via oral por 21 dias. Se gestante/amamentando substitua por azitromicina 1g por semana por 3 semanas.
*Se linfonodo flutuante (excluindo hérnia e aneurisma), aspire o pus pela pele íntegra de maneira estéril a cada 3 dias se necessário.
*Reavalie após 14 dias. Se não melhorar ou linfonodo flutuante, discuta.
*Trate parcerias dos últimos 60 dias.
 
3. Se contato com Mpox ou alta prevalência local, considere Mpox e discuta.
 
`
  },
  {
    titulo: 'Sífilis: tratamento',
    pagina: 67,
    conteudo: `
         Sífilis: tratamento

 
1.   	Sífilis recente: primária, secundária e latente recente (< 1 ano)
*Aplique na mesma consulta dose única de penicilina benzatina 2,4MUI IM. Se história de alergia confirmada à penicilina ou silicone nos locais de aplicação:
- Se não for gestante e não estiver amamentando, prescreva doxiciclina 100mg cada 12 horas por 15 dias.
- Se gestante ou amamentando e alergia à penicilina, avalie gravidade do episódio:
*Grave (angioedema, anafilaxia), discuta e encaminhe para aplicar com suporte clínico.
*Leve ou moderada, aplique penicilina e monitore alergia/anafilaxia
*Se gestante ou estiver amamentando e não está seguro do diagnóstico diferencial entre recente/tardia, trate como sífilis tardia.
 
 
2.   	Sífilis tardia: latente tardia (> 1 ano) ou duração ignorada
*Aplique na mesma consulta penicilina benzatina 2,4MUI IM e repita cada 7 dias por mais 2 semanas (dose total de 7,2MUI). Se história de alergia confirmada à penicilina ou silicone nos locais de aplicação:
- Se não for gestante e não estiver amamentando, prescreva doxiciclina 100mg cada 12 horas por 30 dias.
- Se gestante ou amamentando e alergia à penicilina, avalie gravidade do episódio:
*Grave (angioedema), discuta e encaminhe para aplicar com suporte clínico.
*Leve ou moderada, aplique penicilina e monitore alergia/anafilaxia.
 
3.   	Outras orientações
*Oriente que febre, dor de cabeça, dor muscular, coceira e rash podem ocorrer após tratamento e melhoram em 1-2 dias. Prescreva paracetamol ou dipirona (Não prescreva se alergia prévia) 500-1000mg cada 6 horas se necessário.
*Trate parcerias sexual(is) dos últimos 3 meses como sífilis recente (ver texto Sintomas Genitais) independente de testes/sintomas, então teste e decida se trata para sífilis tardia.
*Se sífilis tardia e intervalo entre doses > 14 dias ou se gestante e intervalo entre doses > 7 dias: reinicie tratamento e retrate parcerias reexpostas de acordo com respectivo estágio clinico.
*Monitore paciente após tratamento: solicite Teste Não Treponêmico (TNT) com 3, 6, 9 e 12 meses. Se gestante: solicite mensalmente até parto, após parto cada 3 meses até 1 ano após tratamento. Interprete (vide abaixo).
 
4.   	Sífilis: monitoramento pós-tratamento
*Compare novo TNT com último realizado e avalie sinais de sífilis (Úlcera anogenital ou sinais de sífilis secundária: rash generalizado, principalmente em palmas e plantas, lesão na boca, lesão vegetante, em especial em genitais, perda de cabelo irregular, sintomas gerais mal-estar, febre, cansaço): novo TNT ≥ 2 diluições/4 vezes (TNT não são automatizados, variações de uma diluição, ex.: de 1:2 para 1:4; ou de 1:16 para 1:8  não são consideradas. Se dúvidas, discuta) que último realizado ou paciente persiste/desenvolveu novos sinais de sífilis?
 
4.1.              Não: 
*Se gestante e completou tratamento com penicilina e 1ª aplicação ≥ 30 dias do parto e sem sinais de sífilis, considere tratamento adequado e registre no cartão pré-natal.
*Se sífilis recente, compare TNT de 6 meses (TNT de 3 meses se sífilis recente ou de 3, 6 e 9 meses se sífilis tardia ou mensais em gestantes, não servem para confirmar queda esperada mas para descartar reinfecção/reativação (aumento de 2 diluições) pós-tratamento com TNT do diagnóstico ou se sífilis tardia, compare TNT de 12 meses pós-tratamento com TNT do diagnóstico: TNT de monitoramento é pelo menos 2 diluições/4 vezes menor do que TNT do diagnóstico (ex.: diagnóstico era 1:32, atual 1:8)?
 
4.1.1.  	Sim. Resposta adequada.
*Continue monitoramento (3, 6, 9 e 12 meses após tratar). Se gestante: cada mês até parto, após cada 3 meses até 1 ano após tratar.
- Se 1 ano de monitoramento e tratamento completo e TNT pelo menos 2 diluições/4 vezes menor que diagnóstico e sem sinais de sífilis, pare monitoramento desse tratamento e verifique necessidade de rastrear.
 
4.1.2.  	Não: Teste para HIV. Se HIV, discuta para considerar investigar neurossífilis com punção lombar.
*Verifique tratamento: tratamento completo e adequado?
 
4.1.2.1.            Não: Retrate paciente/parcerias para sífilis recente/tardia (de acordo com cada caso) e reinicie monitoramento.
4.1.2.2.            Sim: história de nova exposição a sífilis?
4.1.2.2.1.	Sim: Retrate paciente/parcerias para sífilis recente/tardia (de acordo com cada caso) e reinicie monitoramento.
4.1.2.2.2.	Não: Discuta para considerar tratar sífilis tardia, investigar neurossífilis com punção lombar ou não tratar (Se HIV negativo e TNT sem aumento de 2 ou mais diluições e sem sinais de sífilis e exame neurológico normal e tratamento completo e sem nova exposição, e considere: não tratar nem investigar neurossífilis e prolongar monitoramento para verificar queda da titulação; ou que queda esperada é improvável especialmente se TNT do diagnóstico com baixa titulação (ex: 1:4) ou não reagente).
4.2.              Sim (novo TNT ≥ 2 diluições/4 vezes que último realizado ou paciente persiste/desenvolveu novos sinais de sífilis): Verifique tratamento: tratamento completo e adequado?
4.2.1.  	Não: Retrate paciente/parcerias para sífilis recente/tardia (de acordo com cada caso) e reinicie monitoramento.
4.2.2.  	Sim: história de nova exposição a sífilis?
4.2.2.1.            Sim: Retrate paciente/parcerias para sífilis recente/tardia (de acordo com cada caso) e reinicie monitoramento.
4.2.2.2.            Não: Discuta para considerar tratar sífilis tardia, investigar neurossífilis com punção lombar ou não tratar (Se HIV negativo e TNT sem aumento de 2 ou mais diluições e sem sinais de sífilis e exame neurológico normal e tratamento completo e sem nova exposição, e considere: não tratar nem investigar neurossífilis e prolongar monitoramento para verificar queda da titulação; ou que queda esperada é improvável especialmente se TNT do diagnóstico com baixa titulação (ex: 1:4) ou não reagente.
 

`
  },
  {
    titulo: 'Outros sintomas genitais',
    pagina: 167,
    conteudo: `
         Outros sintomas genitais

1.   	Nódulo(s) ou verruga(s)
1.1.              Nódulo(s) indolor(es) e elevado(s) da cor da pele com superfície redonda/em forma de couve-flor (na pele ao redor dos genitais, ânus ou colo do útero) – Provável verrugas genitais:
*Teste para sífilis
*Aplique ácido tricloroacético 80% (proteja áreas não afetadas com lidocaína 2% gel). Repita 1x/semana até melhora ou por até 10 semanas. Se gestante, use mesmo tratamento.
*Examine paciente: procure verrugas em genitais, ânus, púbis, períneo e virilhas. Faça exame especular e avalie região vaginal/cervical. Se verrugas em ânus, faça toque e avalie canal anal.
*Verifique necessidade de rastrear câncer de colo uterino (não há necessidade de alterar frequência de rastreio).
*Considere biópsia ou discuta/encaminhe se:
- Verrugas > 1cm ou com características atípicas (Lesão plana, infiltrada e dura, com pigmentação incomum (vermelho, azul, preto, marrom), sangramento, ulceração e/ou crescimento recente e repentino).
- Múltiplas lesões complicadas (inflamação ou infecção)
- Verruga(s) no colo ou uretra ou vagina ou canal anal.
- Refratária(s) ao tratamento
*Se verrugas na vagina em uma pequena área, considere tratar como acima. Se em uma área maior ou dúvidas, discuta/encaminhe.
*Oriente que nem sempre é possível saber fonte ou quando ocorreu transmissão, a infecção pode ser assintomática por longo período; a maioria das verrugas resolvem sem tratamento em até 2 anos e não causam problemas de fertilidade; o tratamento não cura a infecção e não diminui transmissão sexual/vertical; podem ocorrer recidivas independentes de reexposição/parceria sexual; a presença de verrugas não é indicação de parto cesárea.
 
1.2.              Pápulas com umbilicação central – Provável molusco contagioso
*Oriente que a maioria das lesões resolvem espontaneamente em 6-12 meses.
*Curete as lesões, se posível, ou discuta outras opções de tratamento
*Se HIV, deve resolver com TARV.
*Se contato com Mpox ou alta prevalência local, considere Mpox e discuta.
 
 
2.   	Rash com coceira em área púbica
2.1.              Picadas com coceira intensa. Pode ter piolhos ou lêndeas (tamanho de cabeça de alfinete) - Provável pediculose pubiana
*Trate paciente e parcerias.
*Prescreva permetrina 1%2 loção nas áreas afetadas. Enxaguar após 10 minutos. Evitar mucosas, abertura uretral e áreas cruentas. Repita após 7 dias.
*Oriente lavar com água quente3 todas as roupas e lençóis usados nos últimos 2 dias.
*Para coceira, prescreva loratadina 10mg ao dia se necessário por até 7 dias.
*Se lesões infeccionadas (pus/vermelho/inchado/crostas), provável impetigo (verificar texto “Sintomas de pele”).
 
2.2.              Coceira pior à noite e pápulas/nódulos vermelhos – Provável escabiose
*Trate paciente, parcerias e contatos domiciares (mesmo assintomáticos).
*Prescreva permetrina 5% para aplicar em todo corpo, pescoço-sola dos pés (entre dedos, debaixo unhas, virilha). Lavar após 8-14 horas.
*Se uso tópico é difícil ou tratando múltiplos contatos dê ivermectina 200mcg/kg dose única via oral, repita em 7-14 dias. Não prescreva se gestante.
*Se não melhorar em 7-14 dias, repita ou troque tratamento.
*Para coceira, dê loratadina 10mg ao dia. Se não melhorar em 7-14 dias, discuta/considere acrescentar dexclorfeniramida 2mg antes dormir ou dexametasona 0,1% creme 2-3 vezes ao dia. Se não melhorar melhora em 7 dias, discuta.
*Oriente lavar com água quente/passar roupas/lençóis. Pode retornar trabalho 1 dia após tratar. Coceira pode persistir semanas após tratar.
*Se lesões infeccionadas (pus/vermelho/inchado/crostas), provável impetigo (verificar texto “Sintomas de pele”).
`
  },
  {
    titulo: 'Rastreio do câncer de colo de útero',
    pagina: 69,
    conteudo: `
         Rastreio do câncer de colo de útero

 
1.   	Uma pessoa com útero que já teve sexo vaginal receptivo precisa do rastreio de câncer de colo de útero nas seguintes situações (Se histerectomia total por lesão benigna e sem história de lesões cervicais alto grau, não precisa rastrear. Se por lesão precursora/câncer cervical, discuta):
*HIV negativo, entre 25-64 anos e último rastreio há > 3 anos ou fez o primeiro rastreio da vida há > 1 ano.
*HIV negativo, > 64 anos e nunca rastreou. Se > 64 anos e história de HSIL (Lesões escamosas intraepiteliais de alto grau), discuta e considere rastrear.
*HIV positivo, CD4 > 200céls/mm3, qualquer idade e último rastreio há > 1 ano ou fez o primeiro rastreio da vida há > 6 meses.
*HIV positivo, CD4 < 200céls/mm3, qualquer idade e último rastreio há > 6 meses.
 
2.   	Avalie paciente que precisa de rastreio do câncer de colo de útero
*Sintomas: Pergunte sobre sangramento vaginal anormal (verificar texto “Sangramento Vaginal Anormal”), corrimento vaginal (verificar texto “Corrimento Vaginal”) e maneje de acordo. Se corrimento vaginal anormal, trate antes de rastrear.
*Planejamento Familiar: Avalie necessidades de contracepção (verificar texto “Contracepção”).
*Exame Físico: Faça especular para avaliar alteração cervical. Se lesão ulcerada/massa/polipo/erosão/dor, solicite colposcopia com urgência.
*Avalie HIV: Teste para HIV (Verificar texto “HIV: Diagnóstico”). Se positivo, ofereça cuidados de rotina (Verificar texto “HIV: Cuidados de Rotina”), rastrei no diagnóstico, repita em 6 meses, então cada ano ou cada 6 meses enquanto CD4 < 200 céls/mm³.
*Avalie adequabilidade da Amostra:
Se amostra insatisfatória, repita em 3 meses.
Se amostra satisfatória mas somente com células escamosas, repita anualmente até 2 exames consecutivos normais e então conforme status de HIV (acima).
Se amostra satisfatória com células escamosas e glandulares, interprete resultado e decida frequência do rastreamento (como abaixo).
3.   	Resultado do exame:
Se exame normal, ir para item 3.1 abaixo:
3.1.              Rastreio cervical negativo
*Se HIV negativo e entre 25-64 anos: repita cada 3 anos ou em 1 ano se primeiro rastreio da vida.
*Se HIV negativo, > 64 anos e for o primeiro rastreio da vida: repita em 3 anos.
*Se HIV negativo, > 64 anos, ≥ 2 rastreios negativos nos últimos 5 anos e sem história de HSIL: não há necessidade de repetir/rastrear.
*Se HIV positivo, CD4 > 200céls/mm3, qualquer idade: repita anualmente ou em 6 meses se 1o rastreio da vida.
*Se HIV positivo, CD4 < 200céls/mm3, qualquer idade: repita cada 6 meses enquanto CD4 < 200céls/mm3
 
3.2.              Anormal
3.2.1.  	HIV Negativo
3.2.1.1.   Presença de ASC-US (Células escamosas atípicas de significado indeterminado) ou LSIL (Lesões escamosas intraepiteliais de baixo grau) - Repita por 2 vezes consecutivas (se ≥ 30 anos cada 6 meses, se < 30 anos cada 12 meses).
3.2.1.1.1.	Se ambos normais – Ir para item 3.1. Rastreio Cervical Negativo
3.2.1.1.2.	Se presença de ASC-US (Células escamosas atípicas de significado indeterminado) ou LSIL (Lesões escamosas intraepiteliais de baixo grau), ir para item 3.2.1.1.2.1 abaixo.
3.2.1.1.2.1.          Rastreio Cervical Positivo
*Solicite colposcopia. Se gestante HIV negativo e ASC-US/LSIL, considere adiar colposcopia para > 6 semanas após parto. Se gestante e AGC (Células glandulares atípicas). ou ASC-H (Células escamosas atípicas sugestivas de alto grau/células atípicas – não se pode descartar lesão de alto grau) ou HISL, solicite colposcopia: se insatisfatória, repita em 6 semanas; ou se normal, repita > 6 semanas do parto.
*Se > 35 anos e células atípicas de origem indefinida, solicite também USTV para avaliação endometrial e discuta.
 
3.2.1.2.            Presença de AGC ou ASC-H ou HISL ou células atípicas de origem indefinida – Ir para item 3.2.1.1.2.1 – Rastreio Cervical Positivo
 
3.2.2.  	HIV Positivo – Ir para item 3.2.1.1.2.1 – Rastreio Cervical Positivo
 
 
4.   	Aconselhamentos a paciente que precisa de rastreio do câncer de colo de útero:
*O câncer de colo de útero é uma doença que afeta o colo do útero. Oriente que o rastreio usando o exame citopatológico é uma forma eficaz de prevenir o câncer do colo do útero.
*Aconselhe que fumar aumenta risco de alterações do colo do útero. Se fuma tabaco (verificar: Uso de Tabaco). Oriente retornar se sintomas (sangramento vaginal anormal, corrimento vaginal, dor na relação sexual).
 

`
  },
  {
    titulo: 'Sintomas Menstruais',
    pagina: 70,
    conteudo: `
         Sintomas Menstruais

1.   	Atenda paciente com sintomas menstruais
*Maneje de acordo com os sintomas: investigue se menstruação é anormal (Considere menstruação anormal se alteração na quantidade, frequência ou duração do sangramento, em comparação padrão usual da(o) paciente), se tem cólicas durante os ciclos ou inchaço/dor de cabeça/sensibilidade nas mamas/alteração de humor peri-menstrual:
 
 
1.1.              Menstruação anormal
 
1.1.1.  	Sangramento irregular ou aumentado ou prolongado (verificar texto “Sangramento Menstrual Anormal”)
 
 
1.1.2.  	Sem sangramento: provável amenorreia
*Se ≥ 16 anos e nunca menstruou, discuta/encaminhe para investigar amenorreia primária.
*Se menstruação parou:
- Se risco de gravidez, exclua gravidez (Se teve sexo vaginal receptivo desprotegido desde última menstruação e não está em uso adequado
de contracepção, teste para gravidez). Se gestante (verificar texto “Gestação: Avaliação”).
- Se > 40 anos, pergunte sobre sintomas de menopausa: fogachos, suores noturnos, ressecamento vaginal, alterações de humor, dificuldade para dormir e problemas sexuais. Se presentes (Verificar texto “Manopausa”).
- Se nenhum dos acima, pergunte sobre contracepção: Paciente está em uso de contraceptivo injetável, implante subdérmico ou DIU hormonal?
 
1.1.2.1.            Sim - Tranquilize que diminuição ou ausência de menstruação pode ser normal. Se dúvidas, discuta.
1.1.2.2.            Não:
*Se ausência de menstrução há < 6 meses: tranquilize que menstruação deve voltar. Se não voltar, retornar.
*Se ausência de menstrução há ≥ 6 meses:
- Investigue e maneje causas (como estresse, exercício excessivo, perda de peso, baixo peso).
- Se fraqueza/cansaço, ganho de peso sem aumento de apetite, desânimo, pele seca, piora/nova constipação, intolerancia ao frio, solicite TSH e discuta.
- Se descarga mamillar bilateral e não sanguinolenta, solicite prolactina e discuta.
- Se causa não identificada, solicite FSH, LH, estradiol, USG TV e discuta.
 
1.2.              Presença de cólica abdominal ou dor nas costas durante ciclo menstrual. Dor de cabeça, mal-estar, nausea, vomito e diarreia também pode ocorrer – Provável dismenorréia.
*Se corrimento vaginal (ver texto “Sintomas Genitais”)
*Prescreva ibuprofeno (Tomar com alimentação. Não prescreva se úlcera péptica, reação alérgica ou exacerbação de asma com uso, doença renal, gestação. Considere associar omeprazol 20mg em jejum se HAS, diabetes, insuficiência cardíaca, ≥ 65 anos, dispepsia, úlcera péptica prévia, uso de AAS, corticosteroides, varfarina, abuso de álcool) 300-600mg cada 8 horas, se necessário, por até 3 dias.
*Se sintomas intensos/sem melhora com AINEs e não deseja engravidar, considere prescrever contracepção hormonal (verificar texto “Contracepção). Se deseja engravidar, discuta/encaminhe.
*Se sem resposta com tratamento após 6 meses ou se sintomas interferem nas atividades de vida diária, solicite USG TV e discuta para avaliar outras causas.
 
1.3.              Inchaço/dor de cabeça/sensibilidade nas mamas/alteração de humor peri-menstrual - Provável síndrome pré- menstrual
*Oriente que sintomas podem começar 2 semanas antes da menstruação e melhoram ao final.
*Se tristeza, estresse ou nervosismo (verificar texto “Tristeza, estresse ou nervosismo”).
*Se sintomas intensos e não deseja engravidar, considere prescrever contracepção hormonal (verificar texto “Contracepção).
*Se sem resposta com tratamento após 6 meses ou se sintomas interferem nas atividades de vida diária, solicite USG TV e discuta para avaliar outras causas.
 
2.   	Aconselhe paciente com sintomas menstruais
*Explique que menstruar é normal e saudável, e eduque sobre o que é menstruação: todo mês o revestimento uterino engrossa para se preparar para uma gravidez. Quando a gravidez não ocorre, o revestimento sai pela vagina como sangramento, por alguns dias.
*Oriente que dismenorreia (dor abdominal/dor nas costas durante os ciclos) é comum. Encorage praticar/não interromper atividade física, pois pode ajudar a melhorar os sintomas.
*Se síndrome pré-menstrual: oriente atividades físicas diárias e experimente técnicas de relaxamento (verificar texto “Tristeza, estresse ou nervosismo”).


`
  },

  {
    titulo: 'Sangramento Vaginal Anormal',
    pagina: 71,
    conteudo: `
         Sangramento vaginal anormal

1.   	Atenda com urgência paciente com sangramento vaginal e um ou mais dos seguintes:
*Gestante (Verificar texto “Gestação: Avaliação”)
*PAS < 90
*Recente término da gestação/aborto/parto (verificar texto “Cuidado pós-natal (puerperal) de rotina”).
*Palidez com FC ≥ 100, FR > 30 ou SaO2 < 90% ou falta de ar, sonolência/confusão, agitação/irritabilidade, tontura/desmaio.
 
1.1.              Maneje e encaminhe com urgência:
*Se PAS < 90, aplique cloreto de sódio 0,9% 250mL EV rápido, repita até PAS > 90 ou até 3L. Pare se falta de ar iniciar ou piorar ou novas crepitações pulmonares.
 
2.   	Abordagem de paciente com sangramento vaginal anormal que não necessita de atenção urgente:
*Avalie possibilidade de gestação. Se necessário, teste para gravidez. Se gestante (Verificar texto “Gestação: Avaliação”).
*Realize palpação abdominal bimanual, busque massas pélvicas. Se alterada: solicite USTV e interprete/discuta. Realize exame especular para avaliar colo e coletar citopatológico (verificar texto “Rastreio do câncer de colo de útero).
*Se > 40 anos, pergunte sobre sintomas de menopausa: fogachos, suores noturnos, ressecamento vaginal, alterações de humor, dificuldade para dormir e problemas sexuais (verificar texto “Menopausa”). Se novo sangramento ocorrer > 1 ano após a última menstruação, solicite USTV e interprete/discuta.
*Se a paciente não estiver na menopausa determine o tipo de sangramento:
 
 
2.1.              Sangramento intenso regular (interfere com a qualidade de vida) ou sangrando > 7 dias
*A paciente tem sangramentos em outra(s) parte(s) do corpo (gengiva, hematomas fáceis, machucados com sangramento prolongado)?
 
2.1.1.  	Sim:
*Solicite HMG, TAP, TTPA.
*Interprete/discuta.
 
2.1.2.  	Não:
*Solicite HMG: se Hb < 12, trate anemia (verificar texto “Palidez e Anemia”).
*Prescreva ibuprofeno 600mg cada 8 horas ou nimesulida 100mg cada 12 horas por até 5 dias (Tomar anti-inflamatórios com alimentação. Não prescreva se úlcera péptica, reação alérgica ou exacerbação de asma com uso, doença renal, gestação. Considere associar omeprazol 20mg em jejum se HAS, diabetes, insuficiência cardíaca, ≥ 65 anos, dispepsia, úlcera péptica prévia, uso de AAS, corticosteroides, varfarina, abuso de álcool).
*Se não deseja engravidar, prescreva COC (contraceptivo oral combinado): etinilestradiol/ levonorgestrel 30/150mcg por 3 ciclos (verifique possíveis contraindicações ao COC) (verificar texto “Contracepção) ou acetato de medroxiprogesterona IM 150mg cada 12 semanas (verificar texto “Contracepção) ou discuta outras opções de tratamento.
*Se em contracepção injetável: tranquilize (comum nos primeiros 3 meses). Se sangramento persistir, prescreva COC ou ibuprofeno como acima.
*Se sangramento menstrual intenso após inserção de DIU: prescreva ibuprofeno como acima ou considere remover.
*Se massa abdominal ou sem melhora após 3 meses de tratamento: solicite USTV e interprete, discuta/encaminhe.
 
 
 
2.2.              Ciclos menstruais de padrão irregular (< 21 ou > 35 dias entre menstruações)
*Se alterações no peso (sem explicação), FC ≥ 100, tremores, pele seca, fraqueza, constipação, intolerância ao frio ou calor, solicite TSH. Se alterado, discuta.
*Prescreva pílula combinada: etinilestradiol/levonorgestrel 30/150mcg por 6 meses (verificar texto “contracepção).
*Solicite USTV e interprete, discuta/encaminhe.
*Se desejo de engravidar: discuta.
 
2.3.              Sangramento após relação sexual
*Investigue IST (Infecções Sexualmente Transmissíveis) (verificar texto “sintomas genitais”).
*Se história de violência sexual (verificar texto “Paciente em situação de violência”).
*Solicite USTV, colposcopia e discuta se 1 ou mais dose seguintes:
- Incerteza diagnóstica
- Sangrando > 1 semana após tratamento de IST, ou após vômito/diarreia melhorarem
- Sangramento persistente após 3 meses de tratamento.
- Colo anormal ao exame especular (suspeita de câncer)
 
2.4.              Sangramento de escape (spotting) entre menstruações
*Investigue IST (verificar texto “sintomas genitais”).
*Avalie necessidade de avaliar anemia (verificar texto “Palidez e Anemia”).
*Se em contracepção hormonal, maneje de acordo com método:
 
2.4.1.  	Contraceptivo Oral
*Assegure-se que faz uso correto.
*Se ≥ 2 dias de diarreia/vômitos, oriente uso de preservativo (continue por 7 dias após fim da diarreia/vômito).
*Se em TARV, rifampicina ou fenitoina, ofereça mudança para DIU ou injetável.
*Se usa COC tente mudar para outro COC com diferente progesterona ou dose de estrogênio por 3 ciclos.
*Solicite USTV, colposcopia e discuta se 1 ou mais dose seguintes:
- Incerteza diagnóstica
- Sangrando > 1 semana após tratamento de IST, ou após vômito/diarreia melhorarem
- Sangramento persistente após 3 meses de tratamento.
- Colo anormal ao exame especular (suspeita de câncer)
 
 
2.4.2. Contraceptivo injetável:
*Tranquilize a paciente (comum nos primeiros 6 meses).
*Se sangramento persistir, ofereça troca por etinilestradiol/levonorgestrel 30/150mcg por 3 ciclos (verificar texto “Contracepção”). Se contraindicação à pílula combinada, prescreva ibuprofeno 600mg a cada 8 horas ou nimesulida 100mg a cada 12 horas por até 5 dias (Tomar anti-inflamatórios com alimentação. Não prescreva se úlcera péptica, reação alérgica ou exacerbação de asma com uso, doença renal, gestação. Considere associar omeprazol 20mg em jejum se HAS, diabetes, insuficiência cardíaca, ≥ 65 anos, dispepsia, úlcera péptica prévia, uso de AAS, corticosteroides, varfarina, abuso de álcool).
*Solicite USTV, colposcopia e discuta se 1 ou mais dose seguintes:
- Incerteza diagnóstica
- Sangrando > 1 semana após tratamento de IST, ou após vômito/diarreia melhorarem
- Sangramento persistente após 3 meses de tratamento.
- Colo anormal ao exame especular (suspeita de câncer)
 
`
  },
  {
    titulo: 'Sintomas mamários',
    pagina: 72,
    conteudo: `
        Sintomas Mamários

 
1.   	Abordagem de paciente com sintomas mamários que não está amamentando
 
1.1.              Nódulo(s) mamário(s)
*Nódulo endurecido/fixo/irregular; ou com linfonodo axilar; ou alterações pele/mamilos; ou descarga mamilar cristalina/sanguinolenta; ou em mulher menopausada?
 
1.1.1.  	Não:
*Reexamine mama(s) próximo ao 7° dia do ciclo menstrual. Se nódulo persistir, solicite exame de imagem (Se < 30 anos, solicite USG; se entre 30-40 anos, solicite USG e mamografia (MMG); se ≥ 40 ano, solicite MMG).
 
1.1.1.1.            Interprete os resultados
*BIRADS 0 – Discuta e realize seguimento BIRADS 0 (ver texto “Avaliação geral da saúde”).
*Cisto simples, BIRADS 1 ou 2 – Realize investigação de rotina (ver texto “Avaliação geral da saúde”). Se incerteza ou cisto simples doloroso, discuta.
*BIRADS 3 – Realize seguimento BIRADS 3 (ver texto “Avaliação geral da saúde”).
*BIRADS 4A, 4B, 4C ou 5 – Discuta para solicitar biópsia por agulha grossa (core-biopsy) (Discuta para escolher entre core-biopsy guiada por esterotaxia ou USG. Se core-biopsy não disponível, considere PAAF) e encaminhe com prioridade.
*Massa/cisto suspeito (Massa irregular, heterogênea, com margens mal-definidas ou espiculadas, e é mais alta que larga; massa com calcificações; microcalcificações; cistos com elementos sólidos) ou 6 ou incerto - Discuta ou encaminhe com prioridade para investigar ou tratar.
 
 
1.1.2.  	Sim
*Solicite exame de imagem (Se < 30 anos, solicite USG; se entre 30-40 anos, solicite USG e mamografia (MMG); se ≥ 40 ano, solicite MMG). Interprete os resultados conforme item 1.1.1.1. acima.
 
 
1.2.              Dor mamária
*Tranquilize paciente que câncer raramente causa dor.
*Oriente sutiã adequado.
*Se gestante, tranquilize e ofereça cuidado pré-natal (ver texto “Gestação: Avaliação).
*Prescreva paracetamol ou dipirona (não prescreva se alergia prévia) 500-1000mg ou ibuprofeno 300-600mg cada 6 horas se necessário até 5 dias (Tomar anti-inflamatórios com alimentação. Não prescreva se úlcera péptica, reação alérgica ou exacerbação de asma com uso, doença renal, gestação. Considere associar omeprazol 20mg em jejum se HAS, diabetes, insuficiência cardíaca, ≥ 65 anos, dispepsia, úlcera péptica prévia, uso de AAS, corticosteroides, varfarina, abuso de álcool).
*Pode ser efeito adverso do contraceptivo. Sem melhora após 3 meses, mude método (ver texto “Contracepção).
*Se temperatura ≥ 38°C ou calor/ vermelhidão, provável mastite: dê cefalexina como abaixo. Se não melhorar com tratamento ou episódios recorrentes, discuta.
 
1.3.              Descarga mamilar
*A secreção é sanguinolenta/cristalina; ou unilateral; ou em ≥ 50 anos; ou c/nódulo mama/ axilar; ou tem alterações pele/mamilos; ou em um homem?
 
1.3.1.  	Sim – Solicite MMG e USG, discuta para interpretar resultado.
1.3.2.  	Não:
*Se gestante, tranquilize e ofereça cuidado pré-natal (verificar texto “Gestação: Avaliação”).
*Revise medicamentos (antipsicóticos, antidepressivos, anticoncepcionais, outros) e discuta.
 
 
1.4.              Aumento mamário
1.4.1.  	Unilateral - Se nódulo, maneje como nódulo mamário. Se dúvidas, discuta.
1.4.2.  	Bilateral:
*Confirme que não é obesidade ou ginecomastia (homens). Se IMC > 25 avalie risco cardiovascular (verificar texto “Risco Cardiovascular (RCV): avaliação”).
*Revise medicamentos: antipsicóticos atípicos, espironolactona, efavirenz e outros podem causar aumento mamas. Discuta investigações adicionais.
 
2.   	Abordagem da paciente com sintomas mamários que está amamentando
 
2.1.              Mamilo(s) dolorido(s)/rachado(s) - Geralmente nos primeiros dias de amamentação devido pega inadequada
*Evite sabão ao lavar mamilos.
*Ajude paciente adequadar pega.
*Oriente aplicar leite materno nos mamilos após mamadas e expor ao ar ambiente.
 
2.2.              Mama(s) dolorida(s)
*Temperatura ≥ 38°C ou dor intensa?
 
2.2.1.  	Não – Provável engurgitamento. Oriente ordenhar antes da mamada e amamentar em livre demanda.
2.2.2.  	Sim – Provável mastite.
*Prescreva cefalexina 500mg a cada 6 horas por 7 dias.
*Prescreva paracetamol 500-1000mg ou dipirona (evitar se alergia prévia) ou ibuprofeno 300-600mg cada 6 horas se necessário por até 5 dias.
*Oriente amamentação/ordenha frequente, considere compressas frias.
*Revalie em 2 dias, se não melhorar discuta.
 
2.3.              Nódulo mamário
*Temperatura ≥ 38°C?
 
2.3.1.  	Sim – Provável abscesso mamário. Discuta ou encaminhe no mesmo dia.
2.3.2.  	Não – Provável ducto bloqueado Oriente amamentação mais frequente, considere compressas mornas e massagem do nódulo.
 
`
  },
  {
    titulo: 'Problemas Sexuais',
    pagina: 73,
    conteudo: `
        Problemas Sexuais

 
1.   	Pergunte sobre problemas em conseguir ou manter a ereção, dor durante o sexo, dor ao ejacular ou perda da libido:
 
 
1.1.              Problemas em conseguir ou manter a ereção
*Paciente tem/acorda com ereções matinais?
 
1.1.1.  	Sim:
*Se tristeza, estresse ou ansiedade (verificar texto “Tristeza, estresse ou nervosismo”).
*Pergunte sobre problemas no relacionamento, medos ou preocupações sobre sexo, gravidez indesejada, infertilidade e ansiedade de performance.
*Se violência sexual (verificar texto “Paciente em situação de violência”). Perguntar se no último mês, sentiu 1) desanimado, deprimido, sem esperanças ou 2) pouco interesse ou prazer em fazer as coisas? se sim para qualquer um (verificar texto “Depressão: Diagnóstico”).
*Converse sobre: uso de preservativos/gel lubrificante (forneça e oriente uso), quando usar e onde conseguir PEP e PrEP.
*Se os problemas sexuais não melhorarem discuta/encaminhe.
 
 
1.1.2.  	Não:
*Verifique PA (verificar texto “Hipertensão: Diagnóstico”). Avalie necessidade de rastrear diabetes (verificar texto “Diabetes: rastreio e diagnóstico”). Avalie e maneje risco cardiovascular (verificar texto “Risco Cardiovascular (RCV): avaliação”).
*Revise medicamentos: propranolol, hidroclorotiazida, espironolactona, fluoxetina/ sertralina e amitriptilina podem causar problemas sexuais.
*Rastreie para uso de álcool/drogas: no último ano: 1) bebeu ≥ 4 doses1/vez, 2) usou drogas ilegais ou 3) abusou de medicamentos com/sem prescrição? se sim para qualquer um (verificar texto “Uso de álcool/drogas”).
*Se fuma tabaco (verificar texto “Uso de tabaco”). Apoie para mudança (verificar texto “Apoie paciente para fazer uma mudança”.
*Avalie e maneje estresse (verificar texto “Tristeza, estresse ou nervosismo”).
*Se não melhorar com compensação das condições crônicas e tratamento otimizado, solicite testosterona total e avalie/discuta.
*Se os problemas sexuais não melhorarem discuta/encaminhe.
 
1.2.              Dor ao ejacular
*Se sintomas genitais (verificar texto “Sintomas Genitais”).
*Se sintomas urinários (verificar texto “Sintomas Urinários”).
*Revise medicamentos: antidepressivos e antipsicóticos podem causar dor ao ejacular. Se não encontrar nenhuma causa, discuta/encaminhe.
*Se os problemas sexuais não melhorarem discuta/encaminhe.
 
 
1.3.              Dor na relação (vaginal ou anal). Se dor ao ejacular, abordar conforme acima.
*A dor é superficial ou profunda?
 
1.3.1.  	Dor superficial
*Se sintomas genitais (verificar texto “Sintomas Genitais”).
*Se sintomas anais (verificar texto “Sintomas Anais”).
*Se sintomas urinários (verificar texto “Sintomas Urinários”).
*Pergunte sobre ressecamento vaginal:
- Se mulher > 40 anos, pergunte sobre sintomas da menopausa: fogachos, suores noturnos, alterações de humor e dificuldade para dormir. Se sim (verificar texto “Menopausa”).
- Revise medicamentos: anticoncepcionais orais, antidepressivos e antihipertensivos podem causar ressecamento vaginal.
*Oriente a usar gel lubrificante. Assegure-se da compatibilidade com preservativo, evite o uso de lubrificantes à base de óleo com preservativos.
*Se tristeza, estresse ou ansiedade (verificar texto “Tristeza, estresse ou nervosismo”).
*Se violência sexual (verificar texto “Paciente em situação de violência”).
*Se os problemas sexuais não melhorarem discuta/encaminhe.
 
1.3.2.  	Dor Profunda
*Se sintomas genitais (verificar texto “Sintomas Genitais”)
*Se alteração do hábito intestinal (constipação e/ou diarreia) e dor abdominal recorrente que alivia com passagem das fezes ou gases, provável síndrome do intestino irritável (verificar texto “Dor Abdominal”).
*Se massa abdominal/pélvica, infertilidade ou menstruação ficou mais intensa/ dolorosa/prologada: solicite USTV e discuta.
*Se massa anal/retal, discuta.
*Se tristeza, estresse ou ansiedade (verificar texto “Tristeza, estresse ou nervosismo”).
*Se violência sexual (verificar texto “Paciente em situação de violência”).
*Se os problemas sexuais não melhorarem discuta/encaminhe.
 
 
 
1.4.              Perda de libido
*Pergunte se tem dor durante o sexo ou problemas com ereção: avalie e maneje conforme acima nestes casos.
*Se tristeza, estresse ou ansiedade (ver texto “Tristeza, estresse ou nervosismo”).
*Revise medicamentos: propranolol, hidroclorotiazida, espironolactona, fenitoína, riperidona, clorpromazina, fluoxetina/sertralina e amitriptilina podem causar perda da libido.
*No último mês, sentiu 1) desanimado, deprimido, sem esperanças ou 2) pouco interesse ou prazer em fazer as coisas? se sim para qualquer um (ver texto “Depressão: Diagnóstico”).
*Rastreie para uso de álcool/drogas: no último ano: 1) bebeu ≥ 4 doses1/vez, 2) usou drogas ilegais ou 3) abusou de medicamentos com/sem prescrição? se sim para qualquer um (ver texto “Uso de álcool/drogas”).
*Pergunte sobre problemas no relacionamento, gravidez indesejada, infertilidade e ansiedade de performance.
*Se mulher > 40 anos, pergunte sobre sintomas da menopausa: fogachos, suores noturnos, alterações de humor e dificuldade para dormir. Se sim (ver texto “menopausa”).
*Se violência sexual (ver texto “Paciente em situação de violência”). Avalie necessidades de contracepção (ver texto “Contracepção”).
*Ofereça encaminhamento para psicologia.
 

`
  },

  {
    titulo: 'Sintomas Urinários',
    pagina: 74,
    conteudo: `
         Sintomas Urinários

 
1.   	Atenda com urgência paciente com sintomas urinários e um ou mais dos seguintes:
*Incapaz de urinar e desconforto/distensão abdome inferior
*Se dor no flanco súbita, intensa e irradiação unilateral para virilha/testículo, provável cálculo renal
*Se dor no flanco/PPL + (Punho percussão lombar/sinal de Giordano) com sintomas urinários e mais 1: vômitos, PAS < 90, FC ≥ 100, gestante, febre, disfunção imune (HIV ou diabetes mal controlados, doença renal/hepática/autoimune ou câncer): provável pielonefrite complicada.
 
1.1.              Maneje:
*Se pielonefrite complicada: aplique ceftriaxona 1g IM. Se pielonefrite complicada/cálculo renal e dor intensa, aplique morfina 10mg IM ou morfina diluída 3-10mg EV lento (Dilua 10mg de morfina com 9mL de cloreto de sódio 0,9%. Aplique morfina diluída 3mL EV em 3 min (1mL/min). Se necessário, aplique mais 1mL/min até melhora, até 10mL. Pare se PAS < 90).
*Se incapaz de urinar: insira catéter urinário. Se PAS < 90: aplique cloreto de sódio 0,9% 250mL EV rápido, repita até PAS > 90. Pare se falta de ar ou novas crepitações pulmonares.
*Encaminhe com urgência. Se cálculo renal e paciente gestante ou incapaz de urinar: encaminhe no mesmo dia. Se cálculo renal e paciente não é gestante e é capaz de urinar (Verificar texto: “Dor nas costas”).
 
2.   	Abordagem do paciente com sintomas urinários que não necessita de atenção urgente
*Se dor no flanco com sintomas urinários, provável pielonefrite não complicada: solicite Parcial de urina, cultura e antibiograma (PU, C e TSA). Se possível, colete antes e inicie antibiótico logo após. Prescreva ciprofloxacino 500mg cada 12 horas por 7 dias e paracetamol ou dipirona (evite se alergia prévia) 500-1000mg cada 6 horas se dor. Reavalie em 2 dias. Se não melhorar: encaminhe no mesmo dia. Revise PU, C e TSA: troque o antibiótico ou reavalie o diagnóstico.
*Avalie paciente que não tem provável pielonefrite não complicada:
 
2.1.              Sangue na urina
*Paciente tem ardência ao urinar?
 
2.1.1.  	Não - Solicite PU, C e TSA para excluir infecção do trato urinário.
*Cultura positiva?
 
2.1.1.1.            Não – Discuta para investigar causas. Se homem, faça toque retal e solicite PSA.
2.1.1.2.            Sim – Ir para item 2.2
 
2.1.2.  	Sim – Ir para item 2.2
 
2.2.              Ardência ao urinar, aumento de frequência, urgência ou paciente tem sangue na urina associado a cultura positiva
 
2.2.1.  	Mulher
*Paciente é gestante, cateterizada, com disfunção imune (HIV ou diabetes mal controlados, doença renal/hepática/autoimune ou câncer) ou com problema do trato urinário?
 
2.2.1.1.            Não – Provável ITU simples
*Prescreva nitrofurantoina 100mg cada 6 horas por 5 dias, empiricamente. No caso de ITU simples em mulheres, o tratamento pode ser feito empiricamente, sem a realização de exames. Se sintomas não resolverem ou ITU recorrente (≥ 3/ano): solicite PU, C e TSA.
*Seguimento - Se solicitado, revise PU, C e TSA: mude ou pare o antibiótico, se necessário.
 
2.2.1.2.            Sim - Solicite, se não realizado: PU, C e TSA (Se possível, colete antes e inicie antibiótico logo após)
*Provável ITU complicada: Prescreva ciprofloxacino 500mg cada 12 horas por 7 dias. Se gestante, dê ao invés cefalexina 500mg cada 12 horas por 7 dias.
*Seguimento - Revise PU, C e TSA: mude ou pare o antibiótico, se necessário.
 
 
2.2.2.  	Homem
2.2.2.1.            Sem corrimento e sem sexo desprotegido - Solicite PU, C e TSA3
*Examine para sensibilidade prostática (toque retal)
 
2.2.2.1.1.	Sensibilidade prostática ausente: Provável ITU complicada:
*Prescreva ciprofloxacino 500mg cada 12 horas por 7 dias. Se gestante, dê ao invés cefalexina 500mg cada 12 horas por 7 dias.
*Revise PU, C e TSA, se solicitado: mude ou pare o antibiótico, se necessário.
*Se homem com cultura negativa, ITU ou doença renal: discuta para investigações adicionais.
*Se próstata endurecida e irregular/nódulos ao toque: solicite PSA e discuta para investigações adicionais.
 
2.2.2.1.2.	Sensibilidade prostática presente - Provável prostatite aguda:
*Prescreva ciprofloxacino 500mg a cada 12 horas por 21 dias.
*Prescreva paracetamol 500-1000mg a cada 6 horas se necessário. Se não responder, também prescreva ibuprofeno 300-600mg a cada 8 horas por até 5 dias.
*Revise PU, C e TSA, se solicitado: mude ou pare o antibiótico, se necessário.
*Se homem com cultura negativa, ITU ou doença renal: discuta para investigações adicionais.
*Se próstata endurecida e irregular/nódulos ao toque: solicite PSA e discuta para investigações adicionais.
 
2.2.2.2.            Presença de corrimento ou sexo desprotegido
*Trate uretrite (verificar texto “Sintomas no pênis/região escrotal”).
*Se sem corrimento: também solicite PU, C e TSA e faça toque retal. Se próstata sensível ao toque verificar item 2.2.2.1.2.
 
 
2.3.              Problemas no fluxo
*Solicite PU, C e TSA para excluir ITU
*Calcule score I-PSS (International Prostate Symptom Score) para avaliar gravidade e discuta.
 
2.3.1.  	Perda de urina
*Revise uso de furosemida.
*Investigue atrofia/ressecamento vaginal (Verificar texto “Menopausa”).
*Pergunte sobre constipação (verificar texto “Constipação”).
*Oriente evitar álcool e cafeína e realizar exercício de reforço da musculatura pélvica (Contração e relaxamento repetidos da musculatura do assoalho pélvico).
*Se tem prolapso vaginal, sem resposta às medidas acima ou paciente é homem: discuta.
 
2.3.2.  	Jato enfraquecido ou dificuldade em urinar
*Reavalie uso de amitriptilina.
*Se homem, realize toque retal e solicite PSA.
*Discuta.
 
`
  },
  {
    titulo: 'Sintomas Articulares',
    pagina: 76,
    conteudo: `
        Sintomas Articulares

 
1.   	Atenda com urgência paciente com sintomas articulares e um ou mais dos seguintes:
*História recente de calor, inchaço, dor intensa e limitação dos movimentos em uma única articulação.
*Se trauma nas últimas 48h e dor/edema intenso ou deformidade, provável fratura (verificar texto “Paciente com ferimentos”).
*Incapaz de se apoiar com próprio peso.
 
1.1.              Maneje e encaminhe no mesmo dia:
*Se trauma recente, imobilize e encaminhe para Rx.
*Se diagnóstico prévio de gota, discuta necessidade de encaminhar ou maneje como gota aguda (verificar texto “Gota: diagnóstico e cuidados de rotina”).
 
2.   	Abordagem do paciente com sintomas articulares que não necessita de atenção urgente
*Procure por um problema articular: peça para colocar mãos atrás da cabeça; em seguida, atrás das costas. Fechar mão com força e abri-la. Pressionar palmas das mãos com os cotovelos elevados. Caminhar. Sentar e levantar com braços cruzados.
*Paciente é incapaz de fazer todos os movimentos confortavelmente ou tem articulação quente/dolorida/inchada?
 
2.1.              Não – Problema articular é improvável
*Se dor no corpo/ generalizada (verificar texto “Dor no corpo/generalizada”)
*Se dor nas costas (verificar texto “Dor nas costas”).
*Se dor no pescoço (Verificar texto “Dor no pescoço”).
*Se sintomas nos braços (Verificar texto “Sintomas nos Braços ou Mãos”).
*Se sintomas nas pernas (Verificar o texto “Sintomas nas pernas”).
*Se sintomas nos pés (Verificar o texto “Sintomas nos pés”).
 
2.2.              Sim – Tem histórico de trauma recente?
2.2.1.  	Não - Pergunte sobre a duração da dor articular: há quanto tempo iniciou a dor?
2.2.1.1.            < 6 semanas: tem corrimento genital recente ou rash indolor sem coceira?
2.2.1.1.1.	Sim – Provável Artrite gononcócica
*Usualmente envolve punhos, tornozelos, mão e pé.
*Discuta/encaminhe no mesmo dia.
*Trate paciente e parcerias para uretrite/cervicite (Ver texto “Sintomas Genitais”)
 
2.2.1.1.2.	Não: início súbito de 1-3 articulações quentes, extremamente doloridas, avermelhadas, inchadas (geralmente dedão do pé ou joelho)?
2.2.1.1.2.1.           Não
*Dê paracetamol ou dipirona (evite se alergia) 500-1000mg e/ou ibuprofeno 300-600mg cada 6 horas se necessário por até 7 dias (Tomar com alimentação. Não prescreva se úlcera péptica, reação alérgica ou exacerbação de asma com uso, doença renal, gestação. Considere associar omeprazol 20mg em jejum se HAS, diabetes, insuficiência cardíaca, ≥ 65 anos, dispepsia, úlcera péptica prévia, uso de AAS, corticosteroides, varfarina, abuso de álcool).
*Reavalie após 2-4 semanas. Se não melhorar/piorar, discuta ou encaminhe.
 
2.2.1.1.2.2.           Sim – Provável Gota aguda (verificar texto “Gota: diagnóstico e cuidados de rotina”)
 
 
2.2.1.2.            ≥ 6 semanas – provável artrite crônica (verificar texto “Artrite crônica: diagnóstico e cuidados de rotina”)
 
2.2.2.  	Sim (histórico de trauma recente) - Provável entorse/estiramento músculoesquelético
*Repouse e eleve a articulação.
*Oriente aplicar gelo por 20 minutos a cada 2-3 horas por 2-3 dias após a lesão
*Aplique atadura com pressão.
*Prescreva paracetamol ou dipirona (evite se alergia) 500-1000mg e/ou ibuprofeno 300-600mg cada 6 horas se necessário por até 7 dias.
*Aconselhe o paciente a mobilizar a articulação afetada após 2-3 dias, se não estiver tão dolorida.
*Reavalie após 1 semana: se dor piorar ou não melhorar, discuta para considerar rx.
 
3.   	Informações adicionais:
*Se está/esteve em área de chikungunya e febre e dor articular súbita/intensa não explicada, considere chikungunya (verificar texto “Febre”).
*Se está/esteve em área de zika vírus e rash com coceira e dor ou edema articular, considere zika vírus (Verificar texto “Febre”).
 
`
  },
  {
    titulo: 'Dor nas costas',
    pagina: 77,
    conteudo: `
        Dor nas costas

 
1.   	Atenda com urgência paciente com dor nas costas e um ou mais dos seguintes:
*Distúrbios da bexiga ou do intestino - retenção ou incontinência
*Dormência nas nádegas, períneo ou pernas
*Fraqueza nas pernas ou dificuldade em caminhar
*Trauma importante e recente
*Dor abdominal superior súbita com náusea/vômito: provável pancreatite
*Massa abdominal pulsátil: provável aneurisma da aorta abdominal
*Se dor no flanco súbita, intensa, com irradiação unilateral para virilha ou testículo: provável cálculo renal
*Se dor no flanco/punho percussão dolorosa + com sintomas urinários e ≥ 1: vômitos, PAS < 90, FC ≥ 100, gestante, febre, disfunção imune (HIV ou diabetes mal controlados, doença renal/hepática/autoimune ou câncer): provável pielonefrite complicada
 
1.1.              Maneje e encaminhe com urgência:
*Se provável pancreatite, aplique cloreto de sódio 0,9% 1L EV rápido independente da PA, depois 1L cada 4 horas. Pare se falta de ar ou novas crepitações pulmonares.
*Se provável aneurisma da aorta abdominal: não aplique fluidos EV mesmo se PAS < 90 (elevar a PA pode piorar a ruptura)
*Se pielonefrite complicada: aplique ceftriaxona 1g IM. Se pielonefrite complicada/cálculo renal e dor intensa, aplique morfina 10mg IM ou morfina diluída 3-10mg EV lento (Dilua 10mg de morfina com 9mL de cloreto de sódio 0,9%. Aplique morfina diluída 3mL EV em 3 min (1mL/min). Se necessário, aplique mais 1mL/min até melhora, até 10mL. Pare se PAS < 90).
*Se provável cálculo renal e tem febre ou é gestante ou é incapaz de urinar: encaminhe no mesmo dia.
- Se provável cálculo renal e não tem febre e não é gestante e é capaz de urinar: dê ibuprofeno 600mg VO ou diclofenaco 75mg IM (Tomar anti-inflamatórios com alimentação. Não prescreva se úlcera péptica, reação alérgica ou exacerbação de asma com uso, doença renal, gestação. Considere associar omeprazol 20mg em jejum se HAS, diabetes, insuficiência cardíaca, ≥ 65 anos, dispepsia, úlcera péptica prévia, uso de AAS, corticosteroides, varfarina, abuso de álcool). Se necessário, repita após 30 minutos. Se náusea/vômito, dê metoclopramida 10mg VO ou EV. Se não melhorar após 1 hora: encaminhe no mesmo dia. Se melhorar, solicite solicite Parcial de urina, cultura e antibiograma (PU, C e TSA) e dê paracetamol ou dipirona (evite se alergia) 500-1000mg e/ou ibuprofeno 300-600mg cada 6 horas se necessário até 7 dias. Se náusea/vômito dê metoclopramida 10mg cada 8 horas até 5 dias. Solicite USG, revise resultados de urina e discuta.
 
2.   	Abordagem do paciente com dor nas costas que não necessita de atenção urgente
*Se dor no flanco com sintomas urinários, provável pielonefrite não complicada: solicite PU, C e TSA (Colete antes e inicie antibiótico logo após coleta) e prescreva ciprofloxacino 500mg cada 12 horas por 7 dias e paracetamol ou dipirona (evite se alergia prévia) 500-1000mg cada 6 horas se dor. Reavalie em 2 dias. Se não melhorar: encaminhe no mesmo dia. Revise PU, C e TSA: troque antibiótico ou reavalie diagnóstico, se necessário.
*Paciente tem qualquer um dos seguintes sinais/sintomas: tosse ≥ 3 semanas, perda de peso, sudorese noturna ou febre?
 
2.1.              Sim – Exclua Tuberculose (verificar texto “Tuberculose (TB): diagnóstico”), solicite rx de coluna lombar e VHS ou PCR. Discuta.
2.2.              Não: tem ≥ 1 dos seguintes: idade > 70 anos, dor progressiva ou por > 6 semanas, deformidades, história de câncer ou cirurgia na coluna, osteoporose, uso de corticóides ou drogas EV?
2.2.1.  	Sim para qualquer um - solicite rx de coluna lombar e VHS ou PCR. Discuta.
2.2.2.  	Não para todos - Dor iniciou com < 40 anos e tem dor e rigidez ao acordar que melhora com exercício mas não com repouso e perturba o sono?
2.2.2.1.            Não para qualquer um:
*Meça a circunferência abdominal e IMC: se > 88cm (mulher) ou > 102cm (homens) ou IMC > 25, avalie RCV (verificar texto “Risco Cardiovascular (RCV): avaliação”).
*Tranquilize paciente de que sua dor nas costas é muito comum, normalmente não é grave e melhora por conta própria.
*Aconselhe paciente manter-se o mais ativo possível, continuar com suas atividades rotineiras e evitar repouso na cama.
*Exercícios regulares podem prevenir recorrências. Se tristeza ou estresse (verificar texto “Tristeza, estresse ou nervosismo”). Ofereça acupuntura, se disponível.
*Prescreva paracetamol ou dipirona 500-1000mg e/ou ibuprofeno 300-600mg cada 6 horas se necessário por até 7 dias.
- Se não responder ou dor intensa, adicione codeína6 30-60mg cada 4 horas se necessário até 360mg ao dia.
*Se dor por > 4 semanas ou incapaz de manter atividades diárias usuais, discuta/encaminhe fisioterapia.
*Se não responder após 6 semanas, solicite: rx de coluna lombar e discuta. Se início recente de distúrbios da bexiga/intestino, dormências ou fraqueza, encaminhe no mesmo dia.
 
2.2.2.2.            Sim para todos - Provável dor nas costas inflamatória, seguir condutas abaixo. Se incerto tomar condutas abaixo.
*Solicite rx de coluna lombar e VHS ou PCR.
*Teste para HIV (verificar texto “HIV: diagnóstico”).
*Prescreva ibuprofeno 300-600mg cada 6 horas se necessário por até 7 dias.
*Discuta ou encaminhe.
 
`
  },
  {
    titulo: 'Dor no pescoço',
    pagina: 78,
    conteudo: `
         Dor no pescoço

 
1.   	Atenda e encaminhe com urgência paciente com dor no pescoço e um ou mais dos seguintes:
*Se rigidez de nuca/meningismo e ≥ 1: Tax ≥ 38°C, dor de cabeça, sonolência/confusão ou rash purpúrico/avermelhado: provável meningite, aplique ceftriaxona 2g IM ou EV.
*Sintomas neurológicos em braços/pernas: fraqueza, dormência, rigidez, alteração na marcha ou dificuldades com a coordenação motora.
*Trauma recente e rx indisponível/anormal ou presença de sintomas neurológicos: imobilize o pescoço com colar cervical rígido e sacos de areia/blocos em ambos os lados da cabeça/pescoço.
*Nestes casos encaminhe com urgência.
 
 
2.   	Abordagem do paciente com dor no pescoço que não necessita de atenção urgente
*Tem ≥ 1: dormência/fraqueza nas extremidades/progressiva, perda de peso/febre inexplicada, > 50 anos e dor nova/não explicada, dor moderada-intensa sem melhora > 6 semanas, alteração urinária/ intestinal, história de câncer/TB/cirurgia no pescoço, uso de drogas EV, imunussupressão, osteoporose?
 
2.1.              Sim para qualquer um - Solicite, VHS e RNM ou, se não disponível, TC e discuta.
2.2.              Não para todos
*Dê paracetamol ou dipirona (evite se alergia) 500-1000mg e/ou ibuprofeno (Tomar com alimentação. Não prescreva se úlcera péptica, reação alérgica ou exacerbação de asma com uso, doença renal, gestação. Considere associar omeprazol 20mg em jejum se HAS, diabetes, insuficiência cardíaca, ≥ 65 anos, dispepsia, úlcera péptica prévia, uso de AAS, corticosteroides, varfarina, abuso de álcool) 300-600mg cada 6 horas se necessário até 7 dias. Se não responder ou dor intensa, adicione codeina (Prescreva menor dose eficaz pelo menor tempo) 30-60mg cada 4 horas se necessário até 360mg ao dia.
*Ofereça acupuntura, se disponível.
*Se sem melhora após 5 dias e sem dor no braço, considere encaminhar para fisioterapia.
*Se dor > 3 meses, solicite rx de coluna cervical e discuta.

`
  },
  {
    titulo: 'Sintomas nos braços ou mãos',
    pagina: 78,
    conteudo: `
         Sintomas nos braços ou mãos

 
1.   	Procure por um problema articular:
*Peça para paciente colocar mãos atrás da cabeça; em seguida, atrás das costas. Fechar mão com força e abri-la. Pressionar palmas das mãos com os cotovelos elevados. Se é incapaz de fazer todos os movimentos confortavelmente ou tem articulação quente/dolorida//inchada, provável problema articular (Verificar texto : “Sintomas Articulares”).
 
2.   	Atenda com urgência paciente com sintomas nos braços ou mãos e um ou mais:
*Dor no braço com dor no peito: exclua doença cardíaca isquêmica (verificar texto “Doença cardíaca isquêmica: avaliação inicial”).
*Trauma recente e dor/limitação movimentos: imobilize e encaminhe para rx no mesmo dia. Se mão/braço frio, pálido, pulsos diminuídos ou dormência ou fratura exposta, encaminhe com urgência.
*Início súbito de fraqueza no braço, dificuldade na fala ou alteração visual: considere derrame ou AIT (verificar texto “Derrame (AVC): diagnóstico e cuidados de rotina).
 
3.   	Abordagem do paciente com sintomas nos braços ou mãos que não necessita de atenção urgente
3.1.              Dor no ombro – Provável dor referida
*Pergunte sobre dor no pescoço (veja acima), tosse/falta de ar (Verificar texto “Tosse e falta de ar”), dor abdominal (verificar texto “Dor abdominal), gravidez (verificar texto “Gestação: avaliação”).
 
3.2.              Dor no punho/mão: intermitente, piora à noite, alivia ao sacudir/balançar. Pode ter dormência/formigamento no 1°, 2° e 3° dedos ou fraqueza na mão - Provável síndrome do túnel do carpo.
*Dê prednisona 20mg/dia por até 14 dias. Considere injeção de corticoide, se disponível.
*Aconselhe uso de tala no punho à noite. Se sintomas intensos ou sem melhora em 3 meses, discuta.
 
3.3.              Dor no cotovelo com ou após a flexão/extensão. Pode ter redução da força de preensão - Provável epicondilite medial ou lateral.
*Oriente aplicar gelo no cotovelo e repousar braço.
*Prescreva ibuprofeno2 300-600mg cada 8 horas por até 10 dias.
*Se não melhorar após 6 semanas ou piorar, discuta.
 
3.4.              Dor na base do polegar que piora com movimentação do polegar/punho ou contração/bloqueio do dedo - Provável tenossinovite da mão/punho
*Repouso e tala na articulação.
*Prescreva ibuprofeno2 300-600mg a cada 8 horas por até 10 dias. Considere injeção de corticoide, se disponível.
*Se não melhorar após 6 semanas ou piorar, discuta.
 
`
  },
  {
    titulo: 'Sintomas nas pernas',
    pagina: 79,
    conteudo: `
        Sintomas nas pernas

 
1.   	Procure por um problema articular: peça para colocar mãos atrás da cabeça; em seguida, atrás das costas. Fechar mão com força e abri-la. Pressionar palmas das mãos com os cotovelos elevados. Caminhar. Sentar e levantar com braços cruzados. Se é incapaz de fazer todos os movimentos confortavelmente ou tem articulação quente/dolorida/inchada (verificar texto “Sintomas Articulares”). Se problema é também nos pés (Verificar Texto “Sintomas nos pés”).
 
 
2.   	Atenda com urgência e encaminhe no mesmo dia paciente com sintomas nas pernas e um ou mais dos seguintes:
*Incapaz de sustentar o próprio peso em pé após trauma, provável fratura (verificar texto “Paciente com ferimentos”).
*Edema e dor em uma das panturrilhas: provável trombose venosa profunda, principalmente se IMC > 30, tabagista, imobilização, gestante, em uso de estrogênio, trauma na perna, hospitalização recente, TB, câncer ou história de TVP/embolia pulmonar.
*Dor súbita e intensa em respouso com qualquer um: dormência, fraqueza, palidez, sem pulso: provável isquemia aguda dos membros.
*Dor muscular nas pernas ou nádegas durante exercício associada com dor em repouso, gangrena ou ulceração: provável isquemia crítica dos membros.
 
3.   	Abordagem do paciente com sintomas nas pernas que não necessita de atenção urgente
*Revise medicamentos em uso. Se usa sinvastatina/estatina e início de fraqueza/dor muscular/câimbras, solicite CK total. Se ≥ 5 LSN (Limite Superior da Normalidade), discuta para considerar parar estatina. Se < 5 LSN, discuta.
*Paciente tem edema nas pernas?
 
3.1.              Não
3.1.1.  	Dor nas nádegas que irradia pela parte posterior das pernas - Provável irritação do nervo ciático
*Dê paracetamol ou dipirona (evite se alergia) 500-1000mg e/ou ibuprofeno (Tomar com alimentação. Não prescreva se úlcera péptica, reação alérgica ou exacerbação de asma com uso, doença renal, gestação. Considere associar omeprazol 20mg em jejum se HAS, diabetes, insuficiência cardíaca, ≥ 65 anos, dispepsia, úlcera péptica prévia, uso de AAS, corticosteroides, varfarina, abuso de álcool) 300-600mg cada 6 horas se necessário por até 7 dias. Se não responder/dor intensa, adicione codeína (Prescreva menor dose eficaz pelo menor tempo) 30-60mg cada 4 horas até 360mg ao dia.
*Oriente manter-se ativo, continuar atividades rotineiras e evitar repouso na cama.
*Encaminhe no mesmo dia se: retenção/incontinência de urina/ fezes, dormência/fraqueza de pernas/nádegas/períneo.
*Se dor persiste > 4 semanas, discuta com fisioterapeuta, solicite rx de coluna lombar e discuta.
 
3.1.2.  	Dor muscular nas pernas ou nádegas ao exercício, aliviada com repouso – Considere doença arterial periférica (verificar texto “Doença Arterial Periférica (DAP): diagnóstico e cuidados de rotina”).
 
 
3.2.              Sim, paciente tem edema em membros inferiores
 
3.2.1.  	Edema bilateral
*Tem tosse ou falta de ar que piora ao deitar?
 
3.2.1.1.            Sim – Considere Insuficiência Cardíaca
3.2.1.2.            Não:
*Exclua gravidez. Se gestação (Verificar texto “Gestação: Avaliação”)
*Investigue doença renal/hepática, solicite: PU, creatinina, HMG, TGO, TGP, TAP, BT e F, FA, GGT, PT e F, LDH. Discuta para interpretar.
*Verifique PA (Verificar texto “Hipertensão: diagnóstico”.
*Se nenhum dos acima ou incerteza no diagnóstico, discuta.
 
3.2.2.  	Apenas 1 perna inchada
*Houve trauma recente?
 
3.2.2.1.            Sim – Provável entorse/ estiramento
*Assegure-se que pode suportar o próprio peso em pé. Se não, encaminhe no mesmo dia. Oriente repouso, elevação das pernas e gelo (20min cada 3 horas). Aplique ataduras firmes.
*Oriente a mobilizar perna após 2-3 dias se não for tão dolorido.
*Prescreva paracetamol ou dipirona 500- 1000mg e/ou ibuprofeno 300-600mg cada 6 horas se necessário por até 7 dias.
*Reavalie se não melhorar após 2 semanas ou se sintomas piorarem.
 
3.2.2.2.            Não - Examine a pele: há alguma área dolorida, úlcera(s), nódulo(s) ou alteração(ões) na cor da pele?
3.2.2.2.1.	Sim – Verificar texto “Sintomas de pele”
3.2.2.2.2.	Não – tem nódulo na virilha? Se sim, verificar texto “Nódulo(s)/edema no pescoço, axila ou virilha”. Se não, discuta. 


`
  },
  {
    titulo: 'Sintomas nos pés',
    pagina: 80,
    conteudo: `
         Sintomas nos pés

 
1.   	Verifique se o problema é articular: peça para o paciente caminhar. Sentar e levantar com os braços cruzados. Se incapaz de fazer todos os movimentos de forma confortável (verificar texto “Sintomas Articulares”).
 
2.   	Atenda com urgência e encaminhe no mesmo dia paciente com sintomas nos pés e um ou mais dos seguinte:
*Incapaz de sustentar o próprio peso em pé após trauma, provável fratura (verificar texto “Paciente com ferimentos”).
*Dor súbita e intensa em respouso com qualquer um: dormência, fraqueza, palidez, sem pulso: provável isquemia aguda dos membros.
*Dor muscular nas pernas ou nádegas durante exercício associada com dor em repouso, gangrena ou ulceração: provável isquemia crítica dos membros.
 
3.   	Abordagem do paciente com sintomas nos pés que não necessita de atenção urgente
*Se lesões descamativas ou rachaduras entre dedos dos pés, ou pele fina descamativas na sola, calcanhar ou lado dos pés, provável tinea pedis (pé de atleta) (ver texto “Coceira com Rash localizado”).
 
3.1.              Dor no pé generalizada
3.1.1.  	Dor em queimação constante, alfinetadas/agulhadas ou dormência dos pés que piora à noite - Provável neuropatia periférica
*Teste para HIV (verificar texto “HIV: diagnóstico”). Se HIV positivo, ofereça cuidados de rotina (Verificar texto “HIV: cuidados de rotina”).
*Considere rastrear diabetes (verificar texto “Diabetes: rastreio e diagnóstico”).
*Prescreva amitriptilina 25-75mg à noite e paracetamol 500-1000mg cada 6 horas.
*Se não responder, adicione ibuprofeno (Tomar com alimentação. Não prescreva se úlcera péptica, reação alérgica ou exacerbação de asma com uso, doença renal, gestação. Considere associar omeprazol 20mg em jejum se HAS, diabetes, insuficiência cardíaca, ≥ 65 anos, dispepsia, úlcera péptica prévia, uso de AAS, corticosteroides, varfarina, abuso de álcool) 300-600mg 6 horas por até 5 dias.
*Se em uso de isoniazida: prescreva piridoxina 50mg ao dia, se disponível.
*Se unilateral, outros sinais neurológicos ou perda de função: discuta.
 
3.1.2.  	Dor no pé ao exercício com dor muscular nas pernas ou nádegas ao caminhar que alivia com repouso – Considere doença arterial periférica (verificar texto “Doença Arterial Periférica (DAP): diagnóstico e cuidados de rotina”).
 
3.2.              Dor no pé localizada
*Assegure-se de que os calçados em uso estão adequados. Qual a queixa?
 
3.2.1. Dor no calcanhar, piora ao iniciar caminhada - Provável fasceíte plantar
*Evitar pés descalços/sapatos de solado baixo, aplicar gelo 20min cada 3h e alongar panturrilha manhã e noite, rolar pé em garrafa gelada e ficar na ponta do pé 30 seg.
*Se IMC > 25, avalie RCV (verificar texto “Risco Cardiovascular (RCV): avaliação”).
*Prescreva ibuprofeno 300-600mg cada 6 horas se necessário por até 7 dias.
*Encaminhe para fisioterapia.
 
3.2.2. Deformidade no pé - Protuberância óssea na base do 1° dedo do pé, pode ter calo, vermelhidão ou úlcera - Provável joanete
*Oriente analgesia se necessário: prescreva gelo, paracetamol 500-1000mg ou ibuprofeno 300-600mg cada 6 horas por até 5 dias.
*Se dor intensa ou úlcera, discuta.
 
4.   	No paciente com diabetes ou doença arterial periférica identifique o pé com risco. Reavalie o paciente mais frequentemente se um ou mais dos seguintes:
*Pele: calos, rachaduras, pele úmida entre os dedos (verificar texto “Coceira com rash localizado”), úlceras (verificar texto “Úlceras de pele ou feridas que não cicatrizam: diagnóstico”).
*Deformidade no pé: verifique por joanete (veja acima). Se deformidade no pé, discuta.
*Sensibilidade: sensação de dor (picada leve) anormal após 2 tentativas.
*Circulação: ausência ou redução de pulsos nos pés.
 
5.   	Oriente o paciente com diabetes ou DAP a cuidar dos pés diariamente para previnir úlceras e amputação
*Inspecione e lave os pés todos os dias, seque cuidadosamente entre os dedos. Não enxarque (não faça banhos de imersão) em seus pés.
*Hidrate o pé seco e rachado todos os dias, mas não entre os dedos.
*Avise imediatamente se tiver cortes, bolhas ou feridas nos pés.
*Evite caminhar descalço/sapato sem meia. Mude meias todo dia. Olhe dentro do sapato antes de usar.
*Corte as unhas em linha reta, apare as arestas. Evite cortar calos/colosidades você mesmo ou usar produtos químicos/emplastros para removê-los
*Evite testar a temperatura da água com os pés ou usar bolsas de água quente ou aquecedores próximos aos pés.
 
`
  },
  {
    titulo: 'Sintomas da pele',
    pagina: 81,
    conteudo: `
        Sintomas da pele

 
1.   	Atenda com urgência paciente com sintomas da pele e um ou mais dos seguintes:
*Se início súbito de coceira/rash generalizado ou edema de face/língua e ≥ 1: sibilos, falta de ar, PAS < 90, tontura/desmaio, dor abdominal intensa/vômito persistente com exposição a possível alérgeno1, considere anafilaxia  29.
*Rash purpúrico e ≥ 1: rigidez de nuca, confusão mental, Tax ≥ 38°C, dor de cabeça: provável doença meningocócica.
*Vesículas disseminadas.
*Se rash difuso que apareceu em 3 meses após início de nova medicação e ≥ dos seguintes sinais/sintomas, provável reação medicamentosa grave:
- Temperatura ≥ 38°C
- PA ≤ 90/60
- Icterícia
- Vômitos / dor abdominal / diarreia
- Afetando boca, olhos ou genitais
- Áreas com vesículas, descamação ou exposição de mucosa
 
1.1.              Maneje e encaminhe com urgência:
*Se provável doença meningocócica: aplique ceftriaxona 2g IM.
*Provável reação medicamentosa grave: pare todo(s) o(s) medicamento(s). Se descamação ou exposição de mucosas, também maneje como queimadura antes de encaminhar  30.
*Se PAS ≤ 90, aplique cloreto de sódio 0,9% 500mL EV em 30 minutos, repita até PAS > 90 ou até 3L. Pare se falta de ar piorar ou novas crepitações pulmonares.
 
2.   	Abordagem de paciente com sintoma(s) de pele que não necessita de cuidados de urgência
 
2.1.              Dor (verificar texto “Pele dolorida”)
2.2.              Coceira
2.2.1.  	Com rash. Se rash generalizado – verificar texto “Coceira com rash generalizado”. Se rash localizado – verificar texto “Coceira com rash localizado”
2.2.2.  	Sem rash – verificar texto “Coceira sem rash”.
 
2.3.              Rash generalizado sem coceira – verificar texto “Rash generalizado sem coceira”.
2.4.              Nodulo(s) – verificar texto “Nódulos na pele”
2.5.              Úlceras e/ ou feridas que não cicatrizam – Verificar texto “Úlceras de pele ou feridas que não cicatrizam: diagnóstico”.
2.6.              Crostas e/ou descamação – Verificar texto “Crostas ou descamação”
2.7.              Mudanças na cor da pele – Verificar texto “Mudanças na cor da pele”
2.8.              Sintomas do couro cabeludo – Verificar texto “Sintomas do couro cabeludo”
 
3.              Cuidados adicionais:
*Teste para sífilis (verificar texto “Sífilis:diagnóstico” e HIV (verificar texto “HIV: diagnóstico”), especialmente se rash é extenso, recorrente ou difícil de tratar.
*Se rash e ≥ 1: tosse, coriza, olho vermelho ou está ou esteve em área de sarampo no último mês, considere sarampo (Verificar texto “Febre”), retire paciente imediatamente da sala de espera e acomode em um consultório/local afastado dos demais pacientes.
*Se contato com Mpox ou alta prevalência local e lesão única/múltipla, geralmente com umbilicação central, considere Mpox e discuta.
 
`
  },
  {
    titulo: 'Tristeza, estresse ou nervosismo',
    pagina: 101,
    conteudo: `
        Tristeza, estresse ou nervosismo
 
1.   	Atenda com urgência paciente triste, estressado ou com nervosismo com pensamentos ou comportamento suicida (Verificar texto “Autoagressão ou Suicídio).
 
2. Avalie paciente triste, estressado ou com nervosismo. Se depressão conhecida, ofereça ao invés cuidados de rotina para depressão (Verificar Texto “Depressão e/ou ansiedade generalizada: cuidados de rotina”).

3. Avalie possíveis causas:
3.1. Ansiedade:
*Se preocupação excessiva com comprometimento de funções/angústia por pelo menos 6 meses e ≥ 3 de: tensão muscular, dificuldades para dormir, baixa concentração, cansaço, inquietação, irritação: considere transtorno de ansiedade generalizado (verificar texto “Depressão e/ou ansiedade generalizada: cuidados de rotina”).
*Se a ansiedade é induzida por situação/objeto específico (fobia) ou medo súbito repetitivo com sintoma físico e sem causa aparente (pânico), discuta/encaminhe.
3.2. Depressão:
*No último mês, sentiu 1) desanimado, deprimido, sem esperanças ou 2) pouco interesse ou prazer em fazer as coisas? Se sim para qualquer um – Verificar texto “Depressão: Diagnóstico”.
3.3. Uso de Álcool/Drogas:
*No último ano: 1) bebeu ≥ 4 doses/vez, 2) usou drogas ilegais ou 3) abusou de medicamentos com/sem prescrição? Se sim para qualquer um – verificar texto “Uso de álcool/drogas”.
3.4. Demência:
*Se por ao menos 6 meses ≥ 1 de: problema de memória, desorientação, dificuldade de linguagem, menos capaz para atividade diária/laboral/social: considere demência – Verificar texto “Demência: diagnóstico e cuidados de rotina”.
3.5. Trauma/Abuso:
*Paciente teve uma experiência ruim que está causando pesadelos, flashbacks, evitação de pessoas/situações, nervosismo ou sensação de distanciamento? Se sim verificar texto “Paciente em situação de violência”.
3.6. Estressores:
*Ajude a identificar estressores psicossociais. Pergunte sobre problemas familiares/relacionamento, dificuldades financeiras, luto, doenças crônicas.
*Se paciente tem uma doença incurável, ofereça também cuidados paliativos (Verificar texto “Cuidados paliativos de rotina”).
*Se idoso, pergunte sobre solidão e, se disponível, encaminhe para grupos/clubes/associações para idosos.
3.7. Saúde da Mulher:
*Se parto recente, ofereça cuidados de puerpério (verificar texto “Cuidado pós-natal (puerperal) de rotina”).
*Se > 40 anos pergunte sobre sintomas de menopausa: fogachos, suores noturnos, secura vaginal, alterações de humor, dificuldade para dormir e problemas sexuais (Verificar texto “Menopausa”).
3.8. Medicamento:
*Revise medicamentos: corticoides, propranolol, metoclopramida, teofilina, pílula combinada e efavirenz. Considere contraceptivos alternativos, se necessário (verificar texto “Contracepção”).

4.   	Incentive a questionar pensamentos negativos e ser realista se pensa no pior, generaliza, exagera o problema, se culpabiliza, leva as coisas para o pessoal. Ajude escolher estratégias:
*Durma o suficiente. Se dificuldades para dormir (verificar texto “Dificuldade para dormir”).
*Acesse suporte. Vincule paciente a um grupo de suporte e/ou recurso de apoio (verificar texto “Recursos de apoio”).
*Seja ativo. Faça um Exercícios regulares podem ajudar. exercício de relaxamento e de respiração todo dia.
*Incentive paciente a tirar um tempo para relaxar: Passe tempo com amigos/familiares que o apoiem. Ache uma atividade criativa ou divertida para fazer.
 
5.   	Cuidados adicionais
*Se estressores identificados, discuta possíveis soluções. Comunique-se efetivamente (verificar texto “Comunique-se efetivamente”). Encaminhe para psicologia ou serviço social, se necessário.
*Ajude a lidar com situações de perda/luto/doença incurável e reconheça reações: negação, confusão, choque, tristeza, barganha, saudade, raiva, humilhação, desespero, culpa e aceitação.
- Permita compartilhar tristeza e falar sobre memórias, sentidos da vida ou crenças religiosas.
- Identifique problemas/preocupações e quem pode dar suporte prático antes e depois que o paciente morrer. Vincule o paciente e/ou familiares a um conselheiro espiritual se apropriado. 

`
  },
  {
    titulo: 'Dificuldade para dormir',
    pagina: 103,
    conteudo: `
        Dificuldade para dormir

 
1.   	Avalie paciente com dificuldade para dormir
*Confirme que paciente realmente não dorme o suficiente. Adultos necessitam em média de 6–8 horas de sono por noite. Isso diminui com a idade.
*Determine o tipo de dificuldade para dormir: acorda muito cedo ou com frequência, dificuldade em iniciar o sono, sono insuficiente.
 
1.1.              Exclua problemas médicos
*Pergunte sobre dor, falta de ar, problemas urinários. Veja as páginas de sintomas relevantes. Se roncos persistentes (verificar texto “Sintomas do nariz”). Se pernas inquietas, discuta para avaliação.
*Se paciente tem algum dos seguintes: FC ≥ 100, palpitação, tremor, aumento de apetite com perda de peso, intolerância ao calor ou aumento tireoideano, solicite TSH e interprete.
*Se paciente tem uma doença crônica, ofereça cuidados de rotina.
 
1.2.              Revise medicamentos
*Descongestionantes, salbutamol, teofilina, fluoxetina, efavirenz podem causar dificuldades para dormir.
*Assegure paciente que dificuldade para dormir pelo efavirenz é normalmente auto-limitada e se resolve em 4 semanas de TARV. Se usando efavirenz > 4 semanas e sem melhora, discuta.
 
1.3.              Avalie uso de álcool/drogas
*No último ano: 1) bebeu ≥ 4 doses/vez (Uma dose é 50mL (um copinho) de destilados, 125mL (uma taça pequena) de vinho ou 330mL (uma lata ou garrafinha) de cerveja), 2) usou drogas ilegais ou 3) abusou de medicamentos com/sem prescrição? se sim para qualquer um – verificar texto “Uso de álcool/drogas”.
 
1.4.              Faça avaliação de saúde mental
*Se estresse ou nervosismo – Verificar texto “Tristeza, estresse ou nervosismo”.
*Se evento traumático com ≥ 3 dos seguintes por > 1 mês: 1) Pesadelos ou pensamentos/flashbacks involuntários 2) Evita certas situações/pessoas 3) Constantemente defensivo, vigilante ou assustado 4) Entorpecido ou separado das pessoas, atividades ou lugares: considere transtorno de estresse pós-traumático, discuta.
*No último mês, sentiu 1) desanimado, deprimido, sem esperanças ou 2) pouco interesse ou prazer em fazer as coisas? se sim para qualquer um – Verificar texto “Depressão: diagnóstico”.
*Se pensamentos ou comportamentos atípicos (verificar texto “Pensamentos ou comportamentos atípicos”).
*Se por ao menos 6 meses ≥ 1 de: problema de memória, desorientação, dificuldade de linguagem, menos capaz para atividade diária/laboral/social: considere demência (Verificar texto “Demência: diagnóstico e cuidados de rotina”).
 
1.5.              Pergunte sobre sintomas de menopausa
*Se mulher > 40 anos pergunte sobre sintomas de menopausa: fogachos, suores noturnos, secura vaginal, alterações de humor e problemas sexuais. Se presentes – verificar texto “Menopausa”.
 
 
2.   	Aconselhe paciente com dificuldade para dormir
*Incentive paciente a adotar hábitos de higiene do sono. Esses frequentemente ajudam a resolver a insônia sem o uso de sedativos.
- Faça exercícios regularmente (mas não antes de dormir).
- Evite cafeína (café, chá), álcool e cigarro algumas horas antes de dormir.
- Evite cochilos durante o dia, mas se cansado, cochile por não mais do que 30 minutos.
- Incentive a ter uma rotina: tente acordar no mesmo horário todos os dias (mesmo se cansado) e vá para a cama no mesmo horário todas as noites.
- Deite/relaxe antes de ir para a cama.
- Use a cama apenas para dormir ou para o sexo. Passe apenas 6-8 horas por noite na cama.
- Uma vez na cama, não fique olhando o relógio. Se não dormir após 20 minutos, faça alguma atividade de baixa energia (leia um livro, caminhe pela casa). Uma vez cansado, retorne para a cama.
- Mantenha um diário do sono, revise a cada consulta.
*Evite medicamentos para dormir: podem causar dependência e efeitos adversos (sonolência diurna, tontura, confusão, problemas de memória, maior risco de quedas e acidentes de carro).
*Reavalie o paciente regularmente. Uma boa relação entre a equipe e o paciente pode ajudar.
 
 
3.   	Se problemas com atividades diárias, sonolência diurna, irritabilidade, ansiedade ou dor de cabeça, sem melhora com 1 mês de higiene do sono: discuta.
 

`
  },
  {
    titulo:
      'Avalie paciente que é contato de TB / Trate Infecção latente por tuberculose (ILTB)',
    pagina: 109,
    conteudo: `
        Avalie paciente que é contato de TB / Trate Infecção latente por tuberculose (ILTB)

 
1.    Considere contato de TB se paciente teve contato próximo (no domicílio, escola ou trabalho) com caso de TB pulmonar ou laríngea ou com criança com TB independente da forma clínica.
 
2.    Avalie paciente que é contato de TB (ver texto: Tuberculose (TB): diagnóstico)
*Se tem sintoma de TB (Tosse ≥ 3 semanas, ou ≥ 2 semanas se DM; ou qualquer duração se HIV, situação de rua, institucionalizada, indígena, migrante ou perda de peso/sudorese noturna/ febre ≥ 2 semanas/dor no peito ao respirar/escarro sanguinolento), exclua TB (ver texto: Tuberculose (TB): diagnóstico)
*Se não tem sintomas de TB ou TB excluída, maneje conforme status de HIV (se necessário, teste HIV – ver texto HIV: diagnóstico), história de tratamento de TB ou ILTB e idade:
 
2.1.      HIV negativo
2.1.1.   Se paciente tem história de tratamento de TB ativa ou ILTB, não solicite PPD ou IGRA, pois o PPD ou IGRA permanece positivo e não tem utilidade clínica. Não trate ILTB, se dúvidas, discuta.
2.1.2.   Se o paciente não tem história de tratamento de TB ou ILTB.
2.1.2.1.             Se o paciente tiver < 10 anos de idade: solicite rx de tórax (se < 1 mês de idade, discuta).
2.1.2.1.1.  Se estiver alterado, discuta para confirmar e tratar TB ativa
2.1.2.1.2.  Se estiver normal, solicite PPD ou IGRA (se < 2 anos de idade, solicite PPD):
2.1.2.1.2.1.     PPD ≥ 5mm ou IGRA (+) (Se IGRA indeterminado, considere para manejo no algoritmo como resultado positivo. Se dúvidas, discuta). Iniciar tratamento para ILTB.
2.1.2.1.2.2.     PPD < 5mm ou IGRA (-), repita em 8 semanas: qual resultado?
2.1.2.1.2.2.1. PPD aumentou ≥ 10mm ou IGRA + (Se IGRA indeterminado, considere para manejo no algoritmo como resultado positivo. Se dúvidas, discuta). Iniciar tratamento para ILTB.
2.1.2.1.2.2.2. PPD aumentou < 10mm ou IGRA (-). Paciente não tem ILTB, oriente retornar se sintomas de TB1.
2.1.2.2.             Se o paciente ≥ 10 anos de idade, solicite PPD:
2.1.2.2.1.  < 5mm, repita em 8 semanas: quanto aumentou?
2.1.2.2.1.1.    PPD aumentou ≥ 10mm. Solicite rx de tórax: Se normal, trate ILTB. Se alterado, exclua tuberculose (ver texto Tuberculose (TB): diagnóstico)
2.1.2.2.2.  ≥ 5mm. Solicite rx de tórax: Se normal, trate ILTB. Se alterado, exclua tuberculose (ver texto Tuberculose (TB): diagnóstico)
2.1.2.2.2.1.     PPD aumentou < 10mm. Paciente não tem ITLB, oriente retornar se sintomas de TB1
2.2.       HIV Positivo – Solicite rx de tórax. Se normal, trate ILTB. Se alterado, exclua tuberculose (ver texto Tuberculose (TB): diagnóstico)
 
3.    Tratamento de ILTB (Infecção latente por tuberculose). Se paciente com ILTB é contato de caso de TB resistente a ≥ 2 drogas, discuta para decidir sobre tratamento.
*Paciente tem < 2 anos ou < 10 Kg ou é contato de caso de TB resistente à isoniazida ou tem intolerância à isoniazida ou é gestante (Se gestante, trate após parto. Se gestante com HIV, trate após 12 semanas.)
3.1.       Sim para qualquer um.
*HIV positivo em uso de inibidor de protease (Como atazanavir, darunavir, ritonavir) ou nevirapina?
3.1.1.   Não
*Dê rifampicina (Se é contato de TB resistente à rifampicina, discuta) 15mg/kg (até 600mg) ao dia, 1h antes ou 2h após desjejum, 120 doses ao longo de 4 a 6 meses.
- Se usa dolutegravir ou raltegravir, ajuste dose (ver texto iniciar/reiniciar TARV no paciente com HIV).
- Se perdeu ≥ 60 doses ou ≥ 2 meses, discuta e reinicie tratamento.
*Reavalie cada 30 dias para verificar adesão. Se má adesão: discuta, considere TDO (Tratamento Diretamente Observado) e envolva equipe multiprofissional de apoio.
3.1.2.   Sim. Discuta. Reavalie cada 30 dias para verificar adesão. Se má adesão: discuta, considere TDO (Tratamento Diretamente Observado) e envolva equipe multiprofissional de apoio.
3.2.      Não para todos: rifapentina disponível?
3.2.1.   Não: tem < 10 anos ou > 50 anos ou doença hepática?
3.2.1.1.            Sim para qualquer um
*HIV positivo em uso de inibidor de protease (Como atazanavir, darunavir, ritonavir) ou nevirapina?
3.2.1.1.1.  Não.
*Dê rifampicina (Se é contato de TB resistente à rifampicina, discuta) 15mg/kg (até 600mg) ao dia, 1h antes ou 2h após desjejum, 120 doses em 4 6 meses.
- Se usa dolutegravir ou raltegravir, ajuste dose (ver texto iniciar/reiniciar TARV no paciente com HIV).
- Se perdeu ≥ 60 doses ou ≥ 2 meses, discuta e reinicie tratamento.
*Reavalie cada 30 dias para verificar adesão. Se má adesão: discuta, considere TDO (Tratamento Diretamente Observado) e envolva equipe multiprofissional de apoio.
3.2.1.1.2.  Sim.
*Discuta. Reavalie cada 30 dias para verificar adesão. Se má adesão: discuta, considere TDO (Tratamento Diretamente Observado) e envolva equipe multiprofissional de apoio.
3.2.1.2.            Não para todos
*Dê isoniazida 15mg/kg (até 300mg) ao dia, 1h antes ou 2h após desjejum, 270 doses em 9-12 meses.
- Se perdeu ≥ 90 doses ou ≥ 3 meses, discuta e reinicie tratamento.
*Se alcoolista, desnutrição, DRC, DM ou HIV, prescreva piridoxina 50mg/dia, se disponível.
*Reavalie cada 30 dias para verificar adesão. Se má adesão: discuta, considere TDO (Tratamento Diretamente Observado) e envolva equipe multiprofissional de apoio.
3.2.2.   Sim: HIV positivo em uso de inibidor de protease (Como atazanavir, darunavir, ritonavir) ou nevirapina?
3.2.2.1.            Sim
*Dê isoniazida 15mg/kg (até 300mg) ao dia, 1h antes ou 2h após desjejum, 270 doses em 9-12 meses.
- Se perdeu ≥ 90 doses ou ≥ 3 meses, discuta e reinicie tratamento.
*Se alcoolista, desnutrição, DRC, DM ou HIV, prescreva piridoxina 50mg/dia, se disponível.
*Reavalie cada 30 dias para verificar adesão. Se má adesão: discuta, considere TDO (Tratamento Diretamente Observado) e envolva equipe multiprofissional de apoio.
3.2.2.2.             Não
*Dê rifapentina + isoniazida (Se alcoolista ou doença hepática, discuta para considerar monitorar função hepática) semanal (com comida), 12 doses em 12 a 15 semanas.
- Se perdeu ≥ 3 doses ou ≥ 3 semanas, discuta e reinicie tratamento.
	*Dosagem conforme o peso:
Peso 10-15 kg: Dose H: 300 mg / Dose P: 300 mg
Peso 16-23 kg: Dose H: 500 mg / Dose P: 450 mg
Peso 24-30 kg: Dose H: 600 mg / Dose P: 600 mg
Peso 30 kg: Dose H: 700 mg / Dose P: 750 mg
Adulto: Dose H: 900 mg / Dose P: 900 mg
*Se alcoolista, desnutrição, DRC, DM ou HIV, prescreva piridoxina 50mg/dia, se disponível.
*Reavalie cada 30 dias para verificar adesão. Se má adesão: discuta, considere TDO (Tratamento Diretamente Observado) e envolva equipe multiprofissional de apoio.

`
  },
  {
    titulo: 'Tuberculose (TB): diagnóstico',
    pagina: 110,
    conteudo: `
         Tuberculose (TB): diagnóstico
 
*Investigue TB se tosse ≥ 3 semanas (ou ≥ 2 semanas se DM) ou qualquer um dos seguintes: perda de peso, sudorese noturna, febre ≥ 2 semanas, dor no peito ao respirar, escarro sanguinolento.
*Se HIV, profissional de saúde, pessoa em situação de rua, privada de liberdade/insitucionalizada, indígena, imigrante considere investigar TB se tosse de qualquer duração e sem outra causa provável.
 
1.    Atenda com urgência paciente com suspeita de TB e um ou mais dos seguintes sinais/sintomas:
*FR ≥30 ou SaO2 < 90%
*Falta de ar em repouso, ao falar ou com sinais de esforço (tiragens intercostais, batimento asa do nariz)
*Rigidez de nuca/meningismo
*Sonolência/confusão mental/agitação
*Tosse com sangue vivo
*Vômitos persistentes
*Nova fraqueza em braço/perna
 
1.1.               Maneje e encaminhe com urgência:
*Se SaO2 < 90%ou FR ≥ 30 ou cianose ou falta de ar ou desconforto respiratório: aplique oxigênio via cânula nasal 1-6L/min para meta de 90-96% (se DPOC, 88-92%; se gestante, 92-95%).
- Se em 6L/min e fora do alvo/sem melhora da falta de ar, use máscara com reservatório e aumente até 15L/min.
*Se FR ≥ 30 ou SaO2 < 90%ou falta de ar ou confusão mental e temperatura ≥ 38°C e remoção demorar > 2 horas: aplique ceftriaxona1g IM para possível pneumonia bacteriana grave.
*Colete 1 amostra de escarro para diagnóstico de TB. Monitore resultado.
  
2.    Inicie investigação de TB em paciente que não necessita de atenção urgente:
*Teste para HIV (faça teste rápido) (ver texto sobre HIV: diagnóstico).
*Colete e envie 1 amostra de escarro (após esforço de tosse e ao menos 2-5mL) para TRM-TB (TRM-TB - Xpert MTF/RIF Ultra: teste rápido molecular para tuberculose e avaliação de resistência a rifampicina). Anote na solicitação status do HIV e se já tratou TB (recidiva após cura ou reingresso após abandono).
- Se não consegue escarrar, induza: nebulize com solução salina hipertônica 3% (Adicione 0,5mL de cloreto de sodio 20% a 5mL de cloreto de sodio 0,9%) por 15 min.
- Se já tratou TB (independente do status de HIV): colete e envie 2 amostras (ao invés de uma) de escarro (uma da consulta e outra ao despertar no dia seguinte) e também solicite baciloscopia (Se já teve TB e está investigando possível nova infecção ou reingresso após abandono, use baciloscopia/cultura para diagnosticar TB, e TS/resultado da resistência à rifampicina do TRM-TB), cultura e TS (Teste de Sensibilidade a drogas contra a tuberculose).
- Se HIV positivo e nunca tratou TB, também solicite cultura e TS (Teste de Sensibilidade a drogas contra a tuberculose).
*Também solicite (na mesma consulta) rx de tórax.
* Verifique resultado do escarro em 2-3 dias. Qual o resultado do TRM-TB1 e/ou baciloscopia (Se já teve TB e está investigando possível nova infecção ou reingresso após abandono, use baciloscopia/cultura para diagnosticar TB, e TS/resultado da resistência à rifampicina do TRM-TB.)?
 
2.1.              MTB (Mycobacterium Tuberculosis) detectado (Se resultado é 'MTB detectado traços': se HIV positivo, considere como resultado positivo para MTB, diagnostique TB, revise resultado da cultura e TS assim que disponível. Se HIV negativo, colete 1 nova amostra de escarro para TRM-TB, cultura e TS, interprete resultado).
*Diagnostique TB: Qual o resultado da resistência à rifampicina?
 
2.1.1.   Resistência à rifampicina
*Diagnostique TB resistente. Colete e envie 1 nova amostra de escarro para TRM-TB (TRM-TB - Xpert MTF/RIF Ultra: teste rápido molecular para tuberculose e avaliação de resistência a rifampicina) para confirmar resistência à rifampicina: se resultados divergentes, discuta.
*Notifique, discuta e encaminhe com prioridade para iniciar tratamento em até 7 dias.
 
2.1.2.   Sensibilidade à rifampicina ou não realizada (TRM-TB não realizado por material insuficiente ou diagnóstico somente pela baciloscopia)
*Diagnostique TB sensível. Notifique, ofereça cuidados de rotina e inicie tratamento para TB no mesmo dia (ver texto TB Sensível (TB-S): cuidados de rotina).
 
2.2.              MTB (Mycobacterium Tuberculosis) não detectado (Se resultado é 'MTB detectado traços': se HIV positivo, considere como resultado positivo para MTB, diagnostique TB, revise resultado da cultura e TS assim que disponível. Se HIV negativo, colete 1 nova amostra de escarro para TRM-TB, cultura e TS, interprete resultado).
 
* Se febre ou tosse com escarro: prescreva amoxicilina 500mg cada 8 horas por 7 dias ou, se alergia à penicilina, dê ao invés azitromicina 500mg ao dia por 3 dias.
- Se > 65 anos, uso de antibiótico < 3 meses, alcoolismo, HIV/DM mal controlados, doença renal/hepática/autoimune ou câncer: dê amoxicilina/clavulanato 500/125mg 1g cada 8 horas por 5 dias mais azitromicina 500mg ao dia por 3 dias. Se alergia á penicilina: discuta alternativas; ou prescreva, se disponível, levofloxacina 750mg ao dia por 5-7 dias.
*Se não realizou TRM-TB (TRM-TB - Xpert MTF/RIF Ultra: teste rápido molecular para tuberculose e avaliação de resistência a rifampicina) por material insuficiente e resultado somente pela baciloscopia (Se já teve TB e está investigando possível nova infecção ou reingresso após abandono, use baciloscopia/cultura para diagnosticar TB, e TS/resultado da resistência à rifampicina do TRM-TB: discuta, considere coletar/enviar 1 nova amostra para TRM-TB e interprete resultado.
*Se realizou TRM-TB e:
- HIV positivo: confirme se já realizou cultura e TS4, verifique resultado.
- HIV negativo e mantém sintomas: discuta e solicite cultura e TS4 (para investigação de micobacteriose não tuberculosa, especifique motivo na solicitação).
- HIV negativo e melhora dos sintomas: TB improvável, oriente retornar se sintomas.
 
 
3.    Verifique se laboratório já fez cultura e TS, se não: solicite nova amostra para cultura e TS. Verifique resultado do rx de tórax, da cultura e TS (ver interpretação de rx de tórax na tuberculose abaixo).
 
4.    Interprete o rx de tórax: Algum dos seguintes?
*Cavitação de lobo superior
* Linfadenopatia Intratorácica
*TB Miliar
*Derrame pleural (Confirme com punção: encaminhe no mesmo dia)
*Qualquer opacificação/ões pulmonar/es em paciente com HIV
*Derrame pericárdico: encaminhe no mesmo dia.
 
4.1.              Rx de tórax com algum dos acima
*Se ainda sem diagnóstico confirmado de TB e o rx de tórax sugere TB: notifique, ofereça cuidados de rotina e inicie tratamento para TB (ver texto TB Sensível (TB-S): cuidados de rotina).
*Se já tem diagnóstico de TB por TRM-TB ou baciloscopia: mantenha cuidados de rotina (ver texto: TB Sensível (TB-S): cuidados de rotina).
 
4.2.              Rx de tórax normal ou diferente do acima ou incerto
 
*Se ainda sem diagnóstico de TB:
- Se PVHIV e CD4 ≤ 100, faça teste rápido urinário TB LAM, se disponível.
*Se TB LAM positivo, discuta/encaminhe com prioridade para considerar diagnóstico de TB e iniciar tratamento no mesmo dia.
- Investigue causas de tosse (ver texto sobre tosse/falta de ar), febre (ver texto) ou perda de peso (ver texto).
- Investigue TB extra-pulmonar:
*Se dor abdominal, distensão ou diarreia, considere solicitar um USG abdominal e/ou discuta.
*Se dor de cabeça, discuta para considerar investigação complementar com exame de imagem/punção lombar.
*Se dor lombar, solicite rx de coluna lombar e/ou discuta.
*Se linfonodo ≥ 2cm, discuta para considerar investigação com aspiração para citologia.
*Se TB extra-pulomanar diagnosticada, discuta/encaminhe, ofereça cuidados de rotina e inicie tratamento para TB (ver texto: TB Sensível (TB-S): cuidados de rotina).
*Se já tem diagnóstico de TB por TRM-TB1 ou baciloscopia e:
- Rx de tórax normal, mantenha cuidados de rotina.
- Rx de tórax diferente do acima ou incerto, discuta.
 
5.    Revise o resultado da cultura de escarro e Teste de Sensibilidade:
 
5.1.              Cultura positiva (Mycobacterium tuberculosis confirmado)
5.1.1.   Sensivel aos fármacos - Diagnostique TB sensível Se ainda não tiver feito: notifique, ofereça cuidados de rotina e inicie tratamento para TB no mesmo dia.
5.1.2.   Resistência ao(s) fármaco(s): Diagnostique TB resistente. Notifique, discuta e encaminhe com prioridade para iniciar tratamento em até 7 dias.
 
5.2.              Cultura negativa ou pendente ou não realizada ou positiva para micobacteriose não tuberculosa (MNT)
 
*Se cultura negativa ou pendente ou não realizada:
- Se sintomas persistentes e outras causas descartadas, discuta para considerar iniciar tratamento para TB baseado em diagnóstico clínico 112 ou solicitar TC de tórax.
- Se melhora dos sintomas, oriente retornar se novos sintomas.
*Se cultura positiva para MNT, discuta e encaminhe com prioridade.


`
  },
  {
    titulo: 'TB Sensível (TB-S): cuidados de rotina',
    pagina: 112,
    conteudo: `
        TB Sensível (TB-S): cuidados de rotina

 
1.    Avalie paciente com TB-S no diagnóstico, após 2 semanas e depois mensalmente por todo o tratamento.
*Sintomas: Avalie em todas as consultas. Verifique sinais e sintomas de urgência (ver texto "Tuberculose (TB): Diagnóstico"). Se febre, dor de garganta, dor de cabeça, sintomas nasais ou de olfato/paladar, também considere COVID-19. Espere melhora gradual durante o tratamento para TB. Se os sintomas piorarem ou não melhorarem: discuta.
*Contatos Próximos: No diagnóstico, avalie todas as pessoas que tiveram contato próximo (no domicílio, escola ou trabalho) com paciente com TB (ver texto "Avalie paciente que é contato de TB / Trate ILTB").
*Planejamento Familiar: Em todas as consultas, avalie necessidade de contracepção, evite gravidez no tratamento (Ver texto "Contracepção"): Evite contraceptivo oral combinado, prefira DIU ou injetável.
*Adesão: Em todas as consultas, se dificuldade de adesão (Verificar texto “Apoie paciente em uso contínuo de medicamentos”). Maneje paciente que interrompe o tratamento para TB.
*Efeitos Adversos: Em todas as consultas, pergunte sobre efeitos adversos do tratamento.
*Uso de Álcool/Drogas: No diagnóstico; se má adesão. No último ano: 1) bebeu ≥ 4 doses/vez, 2) usou drogas ilegais ou 3) abusou de medicamentos com/sem prescrição? se sim para qualquer um, ver texto sobre "Uso de álcool/drogas".
*Depressão: Toda consulta. No último mês, sentiu 1) desanimado, deprimido, sem esperanças ou 2) pouco interesse ou prazer em fazer as coisas? se sim para qualquer um, verificar texto "Depressão: Diagnóstico".
*Cuidados Paliativos: Se piorando. Se não responder ao tratamento e piorando, ofereça cuidados paliativos (verificar texto "Cuidados paliativos de rotina").
*Peso e IMC: Em todas as consultas. Se IMC < 18,5: discuta. Espere aumento de peso ao tratar, ajuste dose. Se perda de peso: verifique adesão, resultado do Teste de Sensibilidade e discuta.
*Rx de Tórax: No diagnóstico e se necessário. Repita em 2 meses e ao final do tratamento se diagnosticado pelo rx de tórax (escarro negativo, não realizado no diagnóstico) ou não consegue escarrar. Repita (no mesmo dia) se piora ou tosse com sangue. Interprete e discuta.
*Baciloscopia de Controle: Mensal até final do tratamento (uma amostra de escarro da manhã). 
Se não consegue escarrar, induza: nebulize com solução salina hipertônica 3% (Adicione 0,5mL de cloreto de sódio 20% a 5mL de cloreto de sódio 0,9%) por 15 min. Se não conseguir, avalie com rx de tórax (como acima). 
Se baciloscopia negativa com 8 semanas, mude para a fase de manutenção do tratamento. 
Se baciloscopia positiva com 8 semanas, maneje conforme o algoritmo para baciloscopia positiva com 8 semanas. 
Use resultado das baciloscopias do 3o ou 4o ou 5o mês mais uma do 5o ou 6o mês de tratamento para decidir sobre cura.
*Cultura e Teste de Sensibilidade (TS): No diagnóstico e se baciloscopia continuar positiva com 8 semanas. Interprete (ver texto sobre "Tuberculose (TB): diagnóstico").
*Resultado do Tratamento: Ao completar tratamento. 
São necessárias 2 baciloscopias negativas na fase de manutenção, uma no decorrer e outra ao final do tratamento (5o e 6o mês) para considerar cura. 
Se baciloscopias do 3o ou 4° ou 5o mês mais a do 5o ou 6° mês forem negativas, pare tratamento, registre e notifique como cura. 
Se baciloscopias do 4° ou 6° mês forem positivas, repita a baciloscopia. Se baciloscopia positiva, registre e notifique como falência de tratamento e discuta. Se baciloscopia negativa, discuta. 
Se paciente é incapaz de produzir escarro (se necessário, induza) ou diagnóstico de TB no rx de tórax, solicite rx de tórax e interprete. 
Se TB extra-pulmonar e paciente melhor/sem sintomas, considere como tratamento completado; se sintomas, discuta.
*Teste Rápido de HIV: No diagnóstico. Teste para HIV (ver texto sobre "HIV: diagnóstico"). Se HIV positivo, inicie/reinicie/mantenha TARV e ofereça cuidados de rotina (verificar texto "HIV: cuidados de rotina") e, se necessário, ajuste TARV.

2.   Aconselhe paciente com TB
*Aconselhe/eduque sobre TB e importância da adesão para garantir o sucesso do tratamento e evitar desenvolvimento de resistências.
- Se necessário, encaminhe paciente para acompanhamento com agente comunitário de saúde ou equipe multiprofissional de apoio.
*Dê suporte ao paciente com má adesão (ver texto sobre adesão). Se interrompeu tratamento considere realizar TDO (tratamento diretamente observado).
*Eduque sobre como evitar a transmissão de TB para outras pessoas: manter ventilação adequada/janelas abertas, use máscara cirúrgica nas primeiras 2 semanas de tratamento (ou até baciloscopia negativa) sempre que tiver contato com outras pessoas, ao tossir/espirrar proteger com cotovelo, não com mãos. Higienize mãos regularmente.
*Oriente que pode retornar ao trabalho em duas semanas se melhora clínica ou logo que baciloscopia estiver negativa.
- Afaste do trabalho/escola inicialmente por 2 semanas e prolongue afastamento se necessário.
*Oriente paciente que faz uso arriscado de álcool/drogas. Uso arriscado de álcool/drogas interferem na recuperação e adesão (verificar texto “uso de álcool/drogas”).
*Estimule paciente tabagista a parar de fumar (verificar texto “Uso de Tabaco”). Apoie paciente para mudança.
*Eduque paciente sobre efeitos adversos do tratamento e oriente relatar prontamente se ocorrerem.
 
3.   Trate paciente com TB
 
3.1.      Se iniciando tratamento:
*Prescreva rifampicina/isoniazida/pirazinamida/etambutol (RHZE) 7 dias na semana por 8 semanas (veja tabela ao lado: ajuste dose à medida que paciente ganha peso).
*Se HIV positivo ou gestante: associe piridoxina 50mg ao dia, se disponível, até completar todo tratamento de TB.
*Se HIV positivo, verifique necessidade de ajuste de TARV (Ver texto Iniciar/reiniciar TARV no paciente com HIV):
- Se usa dolutegravir (DTG) ou raltegravir (RAL): dobre dose (DTG 50mg ou RAL 800mg cada 12 horas) até 15 dias após tratar TB.
– Se usa atazanavir/ritonavir ou darunavir/ritonavir: discuta/encaminhe para considerar troca de TARV ou troca de rifampicina por rifabutina.
- Se usa nevirapina: discuta/encaminhe para considerar alternativas.
 
Fase Intensiva: 8 Semanas 
*Durante a fase intensiva do tratamento, que dura 8 semanas, a dosagem do medicamento RHZE (150/75/400/275) é determinada pelo peso do paciente:
Peso 20-35 kg: 2 comprimidos.
Peso 36-50 kg: 3 comprimidos.
Peso 51-70 kg: 4 comprimidos.
Peso acima de 70 kg: 5 comprimidos.

3.2.      Após 8 semanas de RHZE (fase intensiva), decida se troca para RH (fase de manutenção):
 
3.2.1.          TB pulmonar
3.2.1.1.      Escarro positivo no diagnóstico. Qual resultado da baciloscopia de 8 semanas de tratamento?
3.2.1.1.1.         Positiva (ver item 3.6 abaixo sobre manejo de paciente com baciloscopia positiva com 8 semanas de tratamento)
3.2.1.1.2.         Negativa: Sintomas de TB estão melhorando, ganhou peso e, se realizado, rx de tórax com melhora?
3.2.1.1.2.1.            Sim:
*Mude para fase de manutenção: Prescreva rifampicina/isoniazida (RH) 7 dias na semana até completar todo tratamento de TB (veja tabela abaixo: ajuste dose à medida que paciente ganha peso).
 
3.2.1.1.2.2.            Não:
*Investigue causa: pergunte sobre adesão, uso de álcool/drogas, estresse, ansiedade, depressão e efeitos colaterais. Discuta.
 
3.2.2.          TB Extrapulmonar: Sintomas de TB estão melhorando, ganhou peso e, se realizado, rx de tórax com melhora?
3.2.2.1.      Sim:
*Mude para fase de manutenção: Prescreva rifampicina/isoniazida (RH) 7 dias na semana até completar todo tratamento de TB (veja tabela abaixo: ajuste dose à medida que paciente ganha peso).
 
3.2.2.2.      Não:
*Investigue causa: pergunte sobre adesão, uso de álcool/drogas, estresse, ansiedade, depressão e efeitos colaterais. Discuta.
 
 
3.3.      Decida a duração do tratamento:
*Se TB pulmonar ou extrapulmonar (exceto TB meningoencefálica e osteoarticular), prescreva fase de manutenção (RH) por 4 meses (total de 6 meses de tratamento).
*Se TB meningoencefálica ou osteoarticular, prescreva fase de manutenção (RH) por 10 meses (total de 12 meses de tratamento).

Fase de Manutenção: 4 Meses
*Durante a fase de manutenção do tratamento, que dura 4 meses, a dosagem do medicamento RH (300/150 ou 150/75) é ajustada conforme o peso do paciente:
Peso 20-35 kg: 1 comprimido de 300/150.
Peso 36-50 kg: 1 comprimido de 300/150 mais 1 comprimido de 150/75.
Peso 51-70 kg: 2 comprimidos de 300/150.
Peso acima de 70 kg: 2 comprimidos de 300/150 mais 1 comprimido de 150/75.
 
3.4.      Reavalie paciente com TB-S no diagnóstico, após 2 semanas e depois mensalmente por todo o tratamento de TB-S.

3.5.      Investigue e maneje os efeitos adversos do tratamento da TB-S
*Icterícia: Associada à maioria das drogas. Suspenda todas os medicamentos e discuta/encaminhe no mesmo dia.
*Rash/coceira: Associada à maioria das drogas. Avalie e maneje (verificar texto "Sintomas de Pele").
*Alterações visuais: Associadas ao Etambutol. Suspenda todas os medicamentos e discuta/encaminhe no mesmo dia.
*Náusea/perda de apetite: Associadas à Rifampicina. Tome o tratamento junto com desjejum ou à noite. Prescreva metoclopramida 10mg cada 8 horas por até 5 dias. Se ocorrerem vômitos e dor abdominal, discuta e considere solicitar TGP.
*Dor articular: Associada à Pirazinamida. Prescreva ibuprofeno (Tomar com alimentação. Não prescreva se úlcera péptica, reação alérgica ou exacerbação de asma com uso, doença renal, gestação. Considere associar omeprazol 20mg em jejum se HAS, diabetes, insuficiência cardíaca, ≥ 65 anos, dispepsia, úlcera péptica prévia, uso de AAS, corticosteroides, varfarina, abuso de álcool) 300mg a cada 8 horas por até 5 dias.
*Urina avermelhada: Associada à Rifampicina. Tranquilize o paciente.
*Queimação nos pés: Associada à Isoniazida. Prescreva piridoxina 50mg ao dia, se disponível. Se não melhorar com piridoxina 50mg, discuta para considerar ajustar dose ou outros tratamentos.
 
3.6.      Maneje o paciente com baciloscopia positiva com 8 semanas de tratamento:
 
*Procure por explicações para o resultado: pergunte sobre adesão, uso de álcool/drogas (verificar texto “Uso de álcool/drogas”), estresse (verificar texto “Tristeza, estresse ou nervosismo”) e efeitos adversos. Intensifique o suporte para adesão e eduque o paciente sobre os riscos da má adesão.
 
*Colete e envie 1 amostra de escarro para TRM-TB (Teste rápido molecular para tuberculose e avaliação de resistência à rifampicina) para avaliar resistência à rifampicina. Verifique resultado do TS (Teste de Sensibilidade a drogas contra a tuberculose) do diagnóstico e de 8 semanas quando disponível:
 
 
3.6.1.          TS do diagnostico não disponível ou com sensibilidade aos fármacos e TRM-TB com sensibilidade à rifampicina
 
*Prolongue fase intensiva por 30 dias e verifique resultado do TS (diagnóstico e 8 semanas) quando disponível.
*Com 12 semanas (3o mês da fase intensiva), envie uma amostra de escarro para baciloscopia, cultura e TS.
 
 
3.6.1.1.      Baciloscopia positiva:
 
*Verifique resultado do TS do diagnóstico, de 8 semanas e de 12 semanas quando disponível.
*Discuta.
 
 
3.6.1.2.      Baciloscopia negativa:
 
*Continue a fase de manutenção do tratamento para TB-S.
*Ao final do 6° mês e no 7° mês, envie 1 amostra de escarro para baciloscopia, cultura e TS.
 
3.6.1.2.1.         Baciloscopia positiva: repita a baciloscopia.
 
*Se positiva registre e notifique como falência de tratamento e discuta.
*Se negativa discuta
 
3.6.1.2.2.         Baciloscopia negativa
*Pare o tratamento com 7 meses.
*Registre e notifique como cura.
 
 
 
3.6.2.          Resistência ao(s) fármaco(s)
 
*Diagnostique TB resistente Notifique, discuta e encaminhe com prioridade para iniciar tratamento em até 7 dias.
 
 
3.7.       Maneje o paciente que interrompeu o tratamento para TB
*Faça busca ativa do paciente e investigue a razão do abandono. Pergunte sobre uso de álcool/drogas (ver texto), estresse (ver texto) e efeitos adversos.
 
*Intensifique o suporte para adesão e eduque o paciente sobre os riscos da má adesão.
 
*Maneje a interrupção do tratamento de acordo com a duração da interrupção:
 
 
3.7.1.          Interrompeu por < de 1 mês
*Continue o tratamento para TB.
*Paciente deverá compensar as doses que não tomou.
 
3.7.2.          Interrompeu por > de 1 mês
 
*Notifique e registre como abandono de acompanhamento.
*Colete e envie 2 amostras de escarro para diagnostico de TB (laboratório fará TRM-TB - Xpert MTF/RIF Ultra, baciloscopia, cultura e TS).
*Reinicie ciclo completo de tratamento para TB-S, notifique novamente e revise resultados.
 
 
 
3.7.2.1.      Baciloscopia ou TRM-TB1 com MTB detectado: mantém diagnóstico de TB.
 
3.7.2.1.1.         Sensibilidade à rifampicina ou não realizada
*Continue tratamento para TB-S e notifique retratamento.
*Verifique resultado da cultura e TS
 
3.7.2.1.2.         Resistência à rifampicina: Diagnostique TB resistente
 
*Colete e envie 1 nova amostra de escarro para TRM-TB.
*Notifique, discuta e encaminhe com prioridade.
*Verifique resultado da cultura e TS.
 
 
3.7.2.2.      Baciloscopia e TRM-TB1 com MTB não detectado
*Revise sintomas e resultado da cultura e TS2: discuta para decidir sobre tratamento e investigações adicionais.




`
  },
  {
    titulo: 'HIV: diagnóstico',
    pagina: 116,
    conteudo: `
         HIV: diagnóstico

 
1.   	Teste para HIV se:
*Último teste há > 1 ano
*Tem uma ou mais dos seguintes fatores de risco para HIV e último teste há > 6 meses:
- Uso irregular de preservativos ou nova/múltiplas parcerias sexuais ou usa drogas EV
- Troca sexo por dinheiro, objetos de valor, drogas, moradia
- Pratica chemsex (Sexo sob influência de drogas (álcool, metanfetaminas, GHB, MDMA, cocaína, poppers) para aumentar/facilitar experiências sexuais) e diminui/perde julgamento sobre práticas sexuais e uso de preservativos
*Diagnóstico de tuberculose ou suspeita de HIV/aids (ex: linfadenopatia, perda de peso, outros)
*Uso de PrEP (antes de iniciar/reiniciar, após 30 dias e cada 3-4 meses)
*Gestante (1a consulta, 14-26 e > 28 semanas) ou puérpera se teste não realizado na gestação
*Episódio de risco de infecção pelo HIV: sexo desprotegido/IST, acidente/exposição percutânea ou compartilhou instrumento para drogas EV
* Encoraje paciente/parcerias testar para HIV, oriente sobre HIV (Métodos de transmissão do HIV, fatores de risco, tratamento e benefícios de conhecer o status de HIV), obtenha consentimento verbal informado e então teste (Sempre que possível faça teste rápido. Se optar por teste laboratorial, amostra será testada por duas metodologias distintas e se a primeira amostra for reagente nas duas metodologias, solicite uma segunda amostra e somente confirme diagnóstico de HIV se segunda amostra também reagente. Se dúvidas, discuta): faça primeiro teste rápido de HIV - T1
 
1.1.              Não reagente – Resultado do teste de HIV é negativo - Episódio de risco de infecção pelo HIV há < 4 semanas?
1.1.1.  	Sim:
*Repita teste após 4 semanas do episódio de risco.
*Incentive paciente a praticar prevenção combinada/sexo seguro.
 
1.1.2.  	Não - Paciente não tem HIV
*Oriente prevenção combinada (Forneça e oriente uso de preservativo/gel lubrificante, oriente teste regular de ISTs e o que é e onde buscar PEP/PrEP).
*Repita teste anualmente ou cada 6 meses se: uso irregular de preservativos ou nova/múltiplas; troca sexo por dinheiro, objetos de valor, drogas, moradia; usa drogas EV; ou pratica chemsex. Se gestante, após 28 semanas de gestação. Se em PrEP, após 30 dias e cada 3-4 meses.
 
1.2.              Reagente - Faça teste rápido de HIV confirmatório - T2 - Se paciente tem autoteste reagente, a infecção pelo HIV também deve ser confirmada com T1 e T2, com metodologia, antígeno ou fabricante diferente
 
1.2.1.  	Reagente - Diagnostique infecção pelo HIV
*Identifique parcerias sexuais com risco de infecção e ofereça ajuda para revelar diagnóstico para cada uma.
*Incentive testagem de HIV para parcerias sexuais e filhos.
- Se disponível, ofereça autotestes de HIV para paciente entregar para parcerias.
*Notifique.
*Ofereça cuidados de rotina do HIV (considere iniciar tratamento nessa consulta (verificar texto “HIV: Cuidados de rotina”).
 
1.2.2.  	Não reagente - Repita ambos os testes rápidos de HIV (novo ciclo com T1 e T2 na mesma ordem)
1.2.2.1.            Ambos reagentes – Diagnostique infecção pelo HIV, vá para item 1.2.1.
1.2.2.2.            Ambos os testes não reagentes – Resultado do teste de HIV é negativo (seguir item 1.1.)
1.2.2.3.            Um reagente e outro não reagente: solicite teste de HIV laboratorial (Amostra será testada por duas metodologias distintas).
1.2.2.3.1.	Reagente – Repita teste de HIV laboratorial
1.2.2.3.1.1.           Reagente – Diagnostique infecção pelo HIV (vá para item 1.2.1.)
1.2.2.3.1.2.           Amostra inconclusiva - Repita teste de HIV laboratorial após 30 dias ou solicite carga viral, discuta para interpretar.
1.2.2.3.1.3.           Não reagente - Resultado do teste de HIV é negativo (vá para item 1.1.)
1.2.2.3.2.	Amostra inconclusiva (vá para item 1.2.2.3.1.2.)
1.2.2.3.3.	Não reagente (vá para item 1.1.)
 

`
  },
  {
    titulo: 'HIV: Cuidados de rotina',
    pagina: 117,
    conteudo: `
        HIV: cuidados de rotina

 
1.   	Acompanhamento de paciente com HIV

*Sintomas: Avaliar em toda consulta. Maneje sintomas conforme página do sintoma. Se sintomas genitais ou parceria sexual teve IST nos últimos 3 meses, verificar texto "Sintomas genitais".
*Tuberculose ativa (TB): Avaliar em toda consulta. Se tosse (independente da duração e sem outra causa provável), perda de peso, sudorese noturna ou febre, exclua TB. Verificar texto "Tuberculose (TB): diagnóstico". Se TB e iniciando/reiniciando TARV, inicie tratamento de TB, inicie TARV em até 7 dias. Verificar texto "Iniciar/reiniciar TARV no paciente com HIV". Se TB e em TARV, discuta/encaminhe com prioridade, trate TB e ajuste TARV.
*Adesão: Avaliar em toda consulta. Verifique assiduidade nas consultas e histórico de dispensação TARV. Se má adesão/absenteísmo, ofereça apoio para aumentar adesão/assiduidade. Verificar texto "Apoie paciente em uso contínuo de medicamentos".
*Efeitos adversos: Avaliar em toda consulta. Pergunte sobre efeitos adversos da TARV e, se em uso, também da isoniazida para ILTB, SMZ-TMP e azitromicina.
*Saúde mental: Avaliar em toda consulta. No último mês, pergunte se sentiu desanimado, deprimido, sem esperanças ou pouco interesse ou prazer em fazer as coisas. Verificar texto "Depressão: diagnóstico". No último ano, pergunte se bebeu ≥ 4 doses/vez, usou drogas ilegais ou abusou de medicamentos com/sem prescrição. Se sim para qualquer um verificar texto "Uso de álcool/drogas". Se por ao menos 6 meses ≥ 1 de: problema de memória, desorientação, dificuldade de linguagem, menos capaz para atividade diária/laboral/social, considere demência. Verificar texto "Demência: diagnóstico e cuidados de rotina".
*Saúde sexual: Avaliar em Toda Consulta. Pergunte sobre fatores de risco para IST. Se problemas sexuais, verificar texto "Problemas sexuais". Se < 6 meses de TARV ou CV detectável, oriente PrEP para parcerias sexuais. Verificar texto "PrEP: Profilaxia pré-exposição ao HIV".
*Planejamento familiar: Avaliar em toda consulta. Oriente contracepção, verifique interações medicamentosas antes de prescrever. Verificar texto "Contracepção". Se risco de gravidez, solicite/realize teste de gravidez. Se gestante, verificar texto "Gestação: avaliação". Se planeja engravidar nos próximos meses, não pare TARV, prescreva ácido fólico e oriente esperar até CV indetectável.
*Transmissão vertical: Avaliar se gestante ou amamentando. Se gestante e não usa TARV, inicie/reinicie imediatamente. Verificar texto "Iniciar/reiniciar TARV no paciente com HIV". Suspenda/contraindique amamentação, oriente fórmula e garanta acompanhamento do bebê.
*Risco cardiovascular: Avaliar anualmente. Meça PA, se ≥ 140/90, verificar texto "Hipertensão: diagnóstico". Se HAS, verificar texto "Hipertensão: cuidados de rotina". HIV é fator de RCV: se < 40 anos, maneje RCV, verificar texto "Risco Cardiovascular (RCV): cuidados de rotina". Se ≥ 40 anos ou DCV (IAM, AVC, AIT, angina ou doença arterial periférica), solicite CT, HDL e TG e avalie RCV. Verificar texto "Risco Cardiovascular (RCV): avaliação".
*Peso (IMC): Avaliar em toda consulta. Se IMC < 18,5, encaminhe para nutricionista. Se perda de peso ≥ 5% em 4 semanas, verificar texto "Perda de Peso". Se usa dolutegravir (DTG), monitore peso e reforce estilo de vida saudável.
*Boca e pele: Avaliar em toda consulta. Se lesões orais, verificar texto "Sintomas de boca e garganta", e discuta/encaminhe dentista. Se lesões em pele, verificar texto "Sintomas em pele".
*Rx de tórax: Avaliar no diagnóstico. Interprete e exclua TB. Verificar texto "Tuberculose (TB): diagnóstico". Se sem suspeita clínica de TB, não precisa aguardar rx de tórax para iniciar TARV. Se dúvidas, discuta/encaminhe.
*IGRA ou, se IGRA não disponível, PPD: Avaliar se CD4 > 350 e sem sintomas de TB e nunca teve TB ou infecção latente por TB (ILTB). Se PPD ≥ 5mm ou IGRA positivo ou indeterminado, reavalie rx de tórax recente para excluir TB ativa. Se não tem TB ativa, trate Infecção Latente por TB. Se PPD < 5mm ou IGRA negativo, repita PPD ou IGRA anualmente.
*Genotipagem pré-tratamento: Avaliar se necessário. Solicite se nunca usou TARV e um dos seguintes: uso de PrEP durante/após infecção, gestação atual, TB ativa, infecção por parceria com CV detectável em uso atual/prévio de TARV (risco de resistência transmitida) ou paciente com indicação de iniciar TARV com efavirenz. Não aguarde resultado para iniciar TARV. Discuta para interpretar.
*Citopatológico: Avaliar se necessário. Se mulher cis ou homem trans, avalie necessidade de fazer rastreio do câncer de colo de útero. Verificar texto "Rastreio do câncer de colo de útero".

 
2. Avaliar em toda consulta o estagio clínico. 
*Se estágio 3 ou 4: dê SMZ/TMP (verificar texto “Iniciar/reiniciar TARV no paciente com HIV”) inicie/reinicie TARV imediatamente, discuta e decida se encaminha com prioridade ou no mesmo dia.
*Se 1 ou mais, considere estágio 3 (aids avançada):
- TB pulmonar atual/outra infecção bacteriana grave
- Candidíase oral/vaginal persistente/recorrente
- Perda de peso (≥ 10%) inexplicada último ano
- Herpes zoster > 2 episódios/dermátomos
- Leucoplasia pilosa oral
- Febre ou diarreia há > 30 dias
- HB < 8 ou neutrófilos < 500 ou plaquetas < 50.000
*Se 1 ou mais, considere estágio 4 (aids avançada):
- TB extrapulmonar ou pneumocistose ou ≥ duas PNM grave
- Perda de peso inexplicada mais febre ou diarreia há > 30 dias
- Herpes genital ou em boca há > 1 mês; ou infecção por CMV
- Sarcoma de Kaposi ou linfoma ou câncer ou demência do HIV
- Candidíase esofágica
- Toxoplasmose
- Doença criptocócica
- Diarreia (cryptosp./isosp. belli)
 
3.  Continue avaliando paciente com HIV: realize/solicite os testes/exames laboratoriais conforme abaixo:
No diagnóstico:
*Avalie a presença de sífilis e decida qual teste realizar. Verificar texto "Sífilis: diagnóstico".
*Realize testes de HBsAg, anti-HBc total, anti-HBs, anti-HCV, anti-HAV IgG.
*Faça o rastreio de Chlamydia trachomatis (CT) e Neisseria gonorrhoeae (NG) na urina, se disponível.
*Solicite exames de CD4, carga viral.
*Realize exames de creatinina (TFGe), PU, TGO, TGP, BT/F, HMG.
*Se paciente com 40 anos ou mais ou com doença cardiovascular (DCV), solicite CT, HDL, TG.
*Se paciente não tem diabetes, rastreie a condição. Verificar texto "Diabetes: rastreio e diagnóstico".

Reiniciando ou alterando TARV:
*Se a última solicitação foi há mais de 6 meses, solicite os seguintes exames:
CD4, carga viral.
TGO, TGP, BT/F.
Se em TDF (tenofovir): creatinina, PU.
Se em AZT (zidovudina): HMG.
Se em IPs (atazanavir [ATV], darunavir [DRV], lopinavir [LPV], ritonavir) ou EFV (efavirenz): CT, HDL, TG.

2 meses pós-TARV:
*Verifique a carga viral.
*Se em TDF: creatinina, PU.
*Se em AZT: HMG.

6 meses pós-TARV:
*Solicite exames de CD4, carga viral.
*Realize exames de TGO, TGP, BT/F.
*Solicite HMG.
*Se em TDF: creatinina, PU.
*Solicite CT, HDL, TG.

1 ano pós-TARV:
*Solicite exames de CD4, carga viral.
*Realize exames de TGO, TGP, BT/F.
*Solicite HMG.
*Se em TDF: creatinina, PU.

Cada 6 meses:
*Teste para sífilis.
*Verifique a carga viral.
*Realize exames de TGO, TGP, BT/F.
*Se em AZT: solicite HMG.
*Se em TDF: creatinina, PU.

Anualmente:
*Rastreio de HCV (verificar texto “Hepatite C (HCV): diagnóstico”).
*Se fator de risco (IST no último ano, nova ou múltiplas parcerias sexuais, uso irregular de preservativos, solicite Chlamydia trachomatis (CT) e Neisseria gonorrhoeae (NG) na urina. Solicite detecção de CT/NG por biologia molecular (PCR) em amostra de urina para rastreio genital.
*Se ≥ 40 anos: CT, HDL, TG
*Se não tem DM, rastreie (verificar texto “Diabetes: rastreio e diagnóstico”).
*HMG

3.1. Outros exames de rotina:

*Sífilis: Avaliar no diagnóstico e a cada 6 meses. Realizar teste para sífilis. Se positivo, avalie sintomas oculares/neurológicos; se presentes, solicite punção lombar para avaliar neurossífilis.
*Hepatite A, B e C:
No diagnóstico e depois conforme necessário.
Hepatite A: Se anti-HAV IgG ou total não reagente, prescreva vacina para hepatite A. Se reagente, considere imune.
Hepatite B: Interprete HBsAg e anti-HBs. Se HBsAg reagente, discuta/encaminhe. Se HBsAg e anti-HBs não reagentes e anti-HBc total reagente, discuta. Se todos não reagentes, prescreva vacina para hepatite B.
Hepatite C: Interprete anti-HCV. Se não tem hepatite C, rastreie cada 12 meses. Se diagnóstico de HCV, discuta/encaminhe.
*Clamídia e Gonococo:
Solicite detecção de CT/NG (Chlamydia trachomatis e Neisseria gonorrhoeae por biologia molecular (PCR) em amostra de urina para rastreio genital, no diagnóstico e, se fatores de risco, a cada 12 meses.
Se CT e NG detectáveis ou somente NG detectável, trate paciente e parcerias dos últimos 60 dias com ceftriaxona 500mg IM e azitromicina 1g via oral.
Se somente CT detectável, trate com dose única de azitromicina 1g via oral.
*CD4:
Avaliar no diagnóstico ou ao reiniciar TARV, com 2 e 6 meses após TARV e depois conforme resultado e condições clínicas.
Se CD4 ≤ 200, repita cada 3 meses até dois resultados consecutivos > 200. Depois, repita cada 6 meses.
Se CD4 > 200, repita cada 6 meses. Se CD4 ≤ 350, discuta/encaminhe com prioridade e se sem TARV, inicie/reinicie imediatamente. Avalie profilaxia para ILTB.
Se em TARV e carga viral indetectável e 2 resultados consecutivos > 350 céls/mm³ e assintomático: não há necessidade de repetir/monitorar CD4.
*Carga Viral (CV):
Avaliar no diagnóstico ou ao reiniciar TARV após interrupção, com 2 meses e 6 meses, depois cada 6 meses.
Se gestante, avaliar na 1ª consulta, 1 mês após iniciar/trocar TARV e ≥ 34 semanas.
Se CV indetectável, repita cada 6 meses. Se CV há > 6 meses indetectável e usa efavirenz, discuta e considere troca por dolutegravir.
Se CV de 2 meses (1 mês se gestante) é ≥ CV basal, verifique/apoie adesão, não pare TARV e discuta/encaminhe com prioridade.
Se > 6 meses de TARV e CV detectável, verifique/apoie adesão, avalie medicamentos e interações com TARV, não pare TARV e repita CV após 4 semanas. Se CV repetida detectável, diagnostique falha virológica confirmada, não pare TARV, discuta/encaminhe com prioridade.
*Creatinina (calcule TFGe), PU:
Avaliar no diagnóstico e se em TDF, ao reiniciar após abandono, com 2 meses e 6 meses, depois cada 6 meses.
Se TFGe basal < 60 mL/min ou proteinúria, não prescreva tenofovir e discuta/encaminhe com prioridade para iniciar TARV.
Se em TARV e TFGe < 60 mL/min, caindo ou com proteinúria, pare/não prescreva AINEs, avalie PA e discuta/encaminhe com prioridade.
*TGO, TGP, BT/F:
Avaliar no diagnóstico, cada 6 meses.
Se náuseas/vômitos/dor abdominal ou icterícia, discuta/encaminhe com prioridade.
Se TGO ou TGP em TARV até 5 vezes LSN, revise status de hepatites, medicamentos, uso de álcool e discuta/encaminhe com prioridade.
Se TGO ou TGP em TARV 5-10 vezes LSN ou ≥ 10 vezes LSN, discuta/encaminhe no mesmo dia.
*HMG:
Avaliar no diagnóstico, a cada 6 meses e anualmente.
Se em AZT, avaliar a cada 2 meses e cada 6 meses.
Se Hb < 10 g/dL ou neutrófilos < 1.000, evite zidovudina, discuta/encaminhe com prioridade para iniciar ou alterar TARV.
*CT, HDL e TGC (para avaliar RCV):
Se ≥ 40 anos ou com DCV, avaliar no diagnóstico e repetir conforme RCV.
Avalie/maneje RCV. Interprete resultados. Se RCV < 20% ou DCV, reavalie em 1 ano. Se ≥ 20%, em 6 meses.
Se RCV ≥ 20% ou DCV, discuta/encaminhe se usa ABC, LPV, DRV, ATV, ritonavir ou EFV.
*Diabetes (DM):
Avaliar no diagnóstico, anualmente.
Se não tem DM conhecida, solicite glicose se em TARV; se não, verifique qual teste fazer. Se tem DM conhecida, verificar texto "Diabetes: cuidados de rotina".

4.	Aconselhe paciente com HIV
*Ofereça ajuda para revelar status para parceria, amigo ou familiar que apoie. Aconselhe parcerias sexuais e filhos testar para HIV. Se < 6 meses de TARV ou CV detectável, oriente PrEP para parcerias sexuais (Verificar “PrEP: Profilaxia pré-exposição ao HIV”).
*Oriente uso correto/consistente de preservativos com parcerias para prevenir HIV e outras ISTs. Demonstre e forneça preservativos e gel lubrificante. Ofereça autotestes de HIV para entregar para parcerias.
*Explique que o HIV tem tratamento, mas não tem cura e necessita adesão à TARV por toda a vida para prevenir doenças e resistências. Oriente, avalie e maneje efeitos adversos (Verificar texto “Iniciar/reiniciar TARV no paciente com HIV”)
*Explique benefícios de iniciar TARV precocemente e oriente que se > 6 meses de TARV, boa adesão e CV indetectável, HIV não é transmitido por via sexual: indetectável = intransmissível.
*Se não iniciar/reiniciar TARV, identifique barreiras e reavalie em 2 semanas. Reforce importância do tratamento, envolva equipe multiprofissional e aconselhe retorno regular ou imediato se sintomas.
*Se fuma tabaco, motive parar (Verificar texto “Uso de tabaco”).
 
5. Trate paciente com HIV
*Se não está TARV: inicie preferencialmente no mesmo dia ou em até 7 dias (prescreva TARV, independente do CD4, mas especialmente se CD4 ≤ 350 ou gestante ou não está bem).
*Se está em TARV: mantenha tratamento (garanta prescrição com saldo para 180 dias).
- Se usa efavirenz (EFV) e CV < 6 meses indetectável, discuta para considerar troca por dolutegravir (DTG).
- Se falha virológica confirmada, contraindicação a TARV atual ou efeitos adversos intoleráveis: discuta/encaminhe com prioridade para considerar troca da TARV.
- Se TB, ajuste TARV: se em DTG ou RAL, dobre dose (DTG 50mg ou RAL 800mg cada 12 horas) até 15 dias após tratar TB; se usa IPs, discuta/encaminhe para ajustar TARV ou tratamento de TB.
*Prescreva vacinas:
- Pneumocócica 13-v (Se CD4 < 200, discuta e considere adiar vacina até CD4 > 200 para melhor resposta vacinal) (1 dose) e então, após 2 meses prescreva vacina pneumocócica 23-v1 (2 doses: 0 e 5 anos).
- Meningocócica C conjugada1 (1 dose e repita cada 5 anos), Haemophilus influenzae tipo b1 (2 doses: 0 e 1-2 meses) e, se disponível e é homem cis ou mulher trans, vacina contra MPOX (2 doses: 0 e 1 mês).
- Se HBsAg, anti-HBc total e anti-HBs não reagente, vacina contra HBV1 (4 doses dobradas: 0, 1, 2 e 6-12 meses). Se anti-HAV IgG não reagente, vacina contra hepatite A1 (2 doses: 0 e 6-12 meses).
- Se ≤ 45 anos e não vacinado para HPV, vacina contra HPV1 (3 doses: 0, 1-2 e 6 meses).
- Vacina contra influenza1 anualmente, vacina contra COVID-19 (verifique recomendações atuais) e verifique necessidade de outras vacinas de rotina  23.
 
6. Use resultado do CD4 (se não disponível, usar estágio clínico), rx de tórax, sintomas de TB e história de tratamento de TB ou ILTB para decidir sobre profilaxias:

6.1. Infecção Latente por Tuberculose (ILTB):
*Quando Prescrever: No início ou reinício de TARV, planeje tratar ILTB após 30 dias de TARV. Prescrever se:
Sem sintomas de TB, TB excluída por rx de tórax, nunca teve/tratou TB ou ILTB, e mais um dos seguintes: cicatriz radiológica de TB não tratada; CD4 > 350 com PPD/IGRA positivo atual ou prévio sem tratamento de ILTB; ou CD4 ≤ 350.
Se CD4 ≤ 100, solicite TB LAM; se positivo ou indisponível, discuta; se negativo, trate ILTB.
Se contato de TB e sem sintomas, com TB excluída por rx de tórax.
*O que Prescrever: Siga algoritmo a partir do quadro 'Trate ILTB'. Se gestante, trate após o 3º mês de gestação.
*Efeitos Adversos: Queimação, alfinetadas ou dormência dos pés (neuropatia periférica), rash, hepatite (icterícia: encaminhe no mesmo dia; náuseas, vômitos, dor abdominal: solicite TGO, TGP e revise resultados em 24 horas).
*Quando Parar:
Se HP, após 12 doses de 12-15 semanas. Se perdeu ≥ 3 doses ou 3 semanas, reinicie.
Se H, após 270 doses de 9-12 meses. Se perdeu ≥ 90 doses ou 3 meses, reinicie.
Se R, após 120 doses de 4-6 meses. Se perdeu ≥ 60 doses ou 2 meses, reinicie.
6.2. Pneumocistose e Toxoplasmose (SMZ/TMP):
*Quando Prescrever: CD4 < 200 ou estágio clínico 3 ou 4 (aids avançada).
*O que Prescrever:
Se TFGe > 30mL/min: CD4 < 100, prescreva SMZ/TMP 800/160mg diariamente; CD4 100-200, prescreva SMZ/TMP 800/160mg três vezes por semana (ex. segunda, quarta, sexta).
Se TFGe 15-30mL/min, ajuste dose de SMZ/TMP.
Se TFGe < 15mL/min, evite SMZ/TMP e discuta.
*Efeitos Adversos: Náusea/vômitos, rash, hepatite (icterícia: encaminhe no mesmo dia; náuseas, vômitos, dor abdominal: solicite TGO, TGP e revise resultados em 24 horas).
*Quando Parar: Se CD4 > 200 por 6 meses (dois resultados consecutivos, com intervalo de 3 meses entre eles).
6.3. Mycobacterium Avium (Azitromicina):
*Quando Prescrever: CD4 < 50.
*O que Prescrever: Azitromicina 1.500mg por semana (dose única ou 500mg três vezes por semana, ex. segunda, quarta, sexta).
*Efeitos Adversos: Náusea/vômitos, diarreia.
*Quando Parar: Se CD4 > 100 por mais de 3 meses.
 
7. Reavalie paciente com HIV
*Se iniciando, reiniciando ou modificando TARV: reavalie em 2 semanas, 2 e 6 meses. Se em TARV e CV indetectável, reavalie cada 6 meses.
*Se carga viral detectável após 6 meses de TARV, alterações nos exames de monitoramento, baixa adesão, gestação ou não está bem: reavalie cada 1-3 meses e discuta/encaminhe com prioridade.
*Se paciente escolheu não iniciar/reiniciarTARV: reavalie em 2 semanas e cada 6 meses. Oriente paciente retornar mais precocemente se não estiver bem ou se decidir iniciar/reiniciar TARV.


`
  },
  {
    titulo: 'Asma e DPOC: diagnóstico',
    pagina: 125,
    conteudo: `
         Asma e DPOC: diagnóstico


Introdução:
*O paciente com tosse crônica pode ter mais de uma doença. Também considere tuberculose (TB), pneumocistose (PPC), câncer de pulmão, bronquite, insuficiência cardíaca, DRGE e tosse pós-infecciosa (verificar texto “Tosse ou falta de ar”).
*Diagnostique asma/DPOC com base na história, exame físico e resultado de espirometria. Tanto a asma quanto a doença pulmonar obstrutiva crônica (DPOC) apresentam-se com tosse, sibilos, aperto no peito ou falta de ar. Solicite espirometria e diferencie asma de DPOC:
Asma é provável se vários dos seguintes:
*Início antes dos 20 anos de idade.
*Associação com rinite alérgica, eczema, conjuntivite alérgica e outras alergias.
*Sintomas intermitentes com respiração normal entre as crises.
*Sintomas piores à noite, no início da manhã, com exposição a alérgenos, ao frio ou ao estresse.
*História pessoal ou familiar (pai/mãe/irmãos) de asma ou doenças atópicas.
*Espirometria:
VEF1/CVF menor que o valor normal para a idade, sexo e estatura.
VEF1 aumenta em ≥ 12% e ≥ 200 ml após broncodilatador.
*Ofereça cuidados de rotina para asma (verificar texto “Asma: cuidados de rotina”).
DPOC é provável se vários dos seguintes:
*Início após os 40 anos de idade.
*Sintomas são persistentes e pioram lentamente ao longo do tempo.
*Tosse com escarro inicia muito antes da falta de ar.
*História de tabagismo pesado (≥ 20 cigarros/dia) ou exposição ocupacional (poeira, químicos).
*Diagnóstico prévio de TB.
*Diagnóstico prévio de DPOC.
*Espirometria:
VEF1/CVF < 0,7 após broncodilatador.
*Ofereça cuidados de rotina para DPOC (verificar texto “Doença pulmonar obstrutiva crônica (DPOC): cuidados de rotina”).
Se não tiver certeza do diagnóstico, trate como asma (verificar texto “Asma: cuidados de rotina”) e discuta ou encaminhe.
Usando inaladores e espaçadores:
*Se o paciente não é capaz de usar um inalador corretamente, associe um espaçador para aumentar a distribuição do medicamento nos pulmões, especialmente se usa corticoide inalatório. Isso pode prevenir candidíase oral.
*Limpe o espaçador antes do primeiro uso e cada duas semanas: remova o recipiente do inalador e lave o espaçador com água e sabão. Deixe secar ao ar ambiente. Evite enxaguar com água após cada uso.
Instruções sobre como usar o inalador com espaçador:
*Passo 1: Agite o inalador e insira no espaçador.
*Passo 2: Levante-se e expire. Então, feche os lábios em volta do bocal.
*Passo 3: Pressione o dispositivo uma vez para liberar um jato dentro do espaçador.
*Passo 4: Faça 4 inspirações mantendo o espaçador na boca. Repita os passos 3 e 4 para cada jato. Enxague a boca após usar corticoide inalatório.
Nota: Se não tiver espaçador disponível, explique como usar o inalador sem espaçador: tire a tampa e agite o inalador. Expire. Feche os lábios em volta do bocal do inalador. Inspire lentamente. Enquanto inspira, aperte o dispositivo uma vez e mantenha a inspiração lenta. Feche a boca e segure a respiração por 10 segundos. Expire. Espere alguns segundos antes de repetir.

`
  },
  {
    titulo: 'Asma: cuidados de rotina',
    pagina: 126,
    conteudo: `
        Asma: cuidados de rotina


 1.   	Avalie paciente com asma
 
1.1.              Controle dos sintomas
*Avaliar em toda consulta
*Se piora do sibilos/aperto no peito ou da tosse ou da falta de ar, maneje como exacerbação aguda (verificar texto “Sibilos/aperto no peito”).
*Se um ou mais dos seguintes no último mês, asma não está controlada:
- Tosse, falta de ar, aperto no peito ou sibilos ou uso de salbutamol ≥ 3 vezes/semana (Não considerar uso para asma induzida por exercícios).
- Despertares noturnos devido sintomas de asma
- Limitação de atividades diárias devido sintomas de asma
*Se nenhum dos sintomas acima for observado, então a asma está controlada.
 
1.2.              Outros sintomas
*Avaliar em toda consulta
*Maneje sintomas conforme página do sintoma. Pergunte sobre e maneje rinite (verificar texto “Sintomas do nariz”) e dispepsia/refluxo (verificar texto “Dor abdominal”).
*Se usa corticoide inalatório e surgimento de manchas brancas na bochecha/gengiva/língua/palato, considere candidíase oral (verificar texto “Sintomas da boca e garganta”).
 
1.3.              Adesão/uso do inalador
*Avaliar em toda consulta
*Verifique adesão e se usa inalador e espaçador corretamente (Verificar texto “Asma e DPOC: diagnóstico). Se má adesão, ofereça apoio para aumentar adesão (verificar texto “Apoie paciente em uso contínuo de medicamentos”).
 
1.4.              Depressão
*Avaliar em toda consulta
*No último mês, sentiu 1) desanimado, deprimido, sem esperanças ou 2) pouco interesse ou prazer em fazer as coisas? se sim para qualquer um (verificar texto “Depressão: diagnóstico”).
 
1.5.              Espirometria
*Avaliar no diagnóstico e, posteriormente, conforme o controle da doença.
*Se asma controlada, não é necessário repetir. Se asma não controlada, avalie cada 6 meses.
*Compare resultados com valores anteriores. Se reduzidos, verifique adesão e considere ajustar tratamento.
 
2.   	Aconselhe paciente com asma
*Oriente evitar gatilhos que pioram asma/rinite (ex: animais, poeira, químicos, pólen), AAS, AINEs (ex: ibuprofeno) e beta-bloqueadores (ex: propranolol). Se fuma tabaco (verificar texto “Uso de tabaco”). Apoie para mudança (verificar texto “Apoie paciente para fazer uma mudança”).
*Assegure-se que paciente sabe como reconhecer se asma não está controlada e entende com usar os medicamentos: beta-agonista (salbutamol) alivia sintomas mas não controla asma. Corticoide inalatório (beclometasona) auxilia na prevenção das crises, sendo o principal medicamento de controle da asma.
*Entregue, por escrito, plano de ação de como usar os medicamentos se piora dos sintomas.
*Corticoides inalatórios podem causar candidíase oral: oriente paciente enxaguar boca e fazer gargarejos após cada dose.
 
3.   	Trate paciente com asma
*Prescreva vacina contra influenza anualmente e vacina para COVID-19 conforme recomendações atuais. Se asma moderada/grave prescreva também vacina pneumocócica 23-v (2 doses em zero e 5 anos).
*Prescreva salbutamol inalado 200-400mcg (2-4 jatos) se necessário, até 4 vezes ao dia. Se asma induzida por exercícios, prescreva salbutamol 200mcg (2 jatos) 5-10 minutos antes dos exercícios.
*Se exacerbação aguda nesta consulta:
- Prescreva prednisona 40mg ao dia num total de 5 dias. Se > 2 ciclos de prednisona em 6 meses ou exacerbações agudas com tratamento intensificado ao máximo, discuta ou encaminhe.
- Se temperatura axilar ≥ 38°C e escarro amarelo/esverdeado e crepitação pulmonar assimétrica/respiração brônquica, provável pneumonia: se disponível, confirme com RX de tórax e prescreva amoxicilina 500mg cada 8h por 5 dias (Se alergia à penicilina, prescreva ao invés azitromicina 500mg ao dia por 3 dias).
*Maneje de acordo com o controle da asma:
 
3.1.              Asma não controlada ou exacerbação aguda: intensifique tratamento
*Antes de intensificar tratamento verifique se está aderente, sabe usar inalador/espaçador (Verificar texto “Asma e DPOC: diagnóstico”), está evitando fumo e gatilhos de asma (alérgenos, AAS, AINEs, beta-bloqueadores).
*Prescreva beclometasona inalada 250mcg cada 12 horas (Se usa ritonavir, evite beclometasona e budesonida e discuta alternativas). Se já em uso, aumente para 500mcg cada 12 horas.
*Se ainda não controlada, pare beclometasona e prescreva formoterol/budesonida 12/400mcg cada 12 horas (Se usa ritonavir, evite beclometasona e budesonida e discuta alternativas). Se já em uso e não controlada após 3 meses, aumente para 24/800mcg cada 12 horas. Se já em uso e ainda não controlada após 3 meses, discuta ou encaminhe.
*Se asma não controlada ou exacerbação aguda, reavalie pós 1 mês.
 
3.2.              Asma controlada
*Continue medicamentos na mesma dose.
*Se asma controlada e sem exacerbações agudas ≥ 6 meses, reduza pela metade. Se formoterol/budesonida 12/400mcg cada 12 horas, reduza para 6/200mcg. Se já em 6/200mcg pare e dê beclometasona 500mcg cada 12 horas. Ou se usa beclometasona 250mcg cada 12 horas, pare beclometasona (Se usa ritonavir, evite beclometasona e budesonida e discuta alternativas).
*Se sintomas piorarem enquanto reduz tratamento, reinicie/aumente novamente medicamento para a mesma dose de quando paciente estava com asma controlada.
*Se asma controlada, reavaliar a cada 6 meses. Oriente retornar antes se não estiver melhor ou piorar.

`
  },
  {
    titulo: 'Doença pulmonar obstrutiva crônica (DPOC): cuidados de rotina',
    pagina: 127,
    conteudo: `
        Doença pulmonar obstrutiva crônica (DPOC): cuidados de rotina


Doença pulmonar obstrutiva crônica (DPOC): cuidados de rotina

1.	Avalie paciente com DPOC

*Avaliar sintomas de DPOC em todas as consultas
Se paciente tem sibilos/aperto no peito e está com falta de ar em repouso ou FR > 30, maneje como exacerbação aguda (verificar texto “Sibilos/aperto no peito”)
Avalie gravidade: se paciente pode caminhar tão rápido quanto outros da mesma idade, DPOC é leve. Se não, DPOC é moderada/grave.
Investigue TB somente se paciente tem outros sintomas de TB como perda de peso, sudorese noturna, escarro sanguinolento (verificar texto “Tuberculose (TB): diagnóstico”)
*Avaliar outros sintomas em toda consulta
Maneje sintomas conforme página do sintoma.
Se usa corticoide inalatório e manchas brancas na bochecha/gengiva/língua/palato, considere candidíase oral (verificar texto “Sintomas na boca e garganta”).
Se edema em ambas pernas, considere insuficiência cardíaca e cor pulmonale. Solicite ECG, RX de tórax e discuta.
*Avaliar adesão/uso do inalador em toda consulta
Verifique adesão e se usa inalador e espaçador corretamente (verificar texto “Asma e DPOC: diagnóstico”)
Se má adesão, ofereça apoio para aumentar adesão (verificar texto “Apoie paciente em uso contínuo de medicamentos”)
*Avaliar depressão em toda consulta
No último mês, sentiu 1) desanimado, deprimido, sem esperanças ou 2) pouco interesse ou prazer em fazer as coisas? se sim para qualquer um, verificar texto “Depressão: diagnóstico”
*Avaliar cuidados paliativos em toda consulta
Se falta de ar em repouso/mínimos esforços, > 3 hospitalizações/ano por DPOC, insuficiência cardíaca ou em uso de O2, ofereça cuidados paliativos (verificar texto “Cuidados paliativos de rotina)
*Avaliar risco cardiovascular no diagnóstico, reavaliar posteriormente conforme o risco
Avalie o risco cardiovascular (Texto 128). Se < 10% com fator de risco para doença cardiovascular ou 10-20%, reavalie após 1 ano; se > 20%, reavalie após 6 meses.
*Solicitar Rx de tórax no diagnóstico. Interprete resultado para excluir outras doenças e discuta, se necessário.
*Solicitar espirometria no diagnóstico e anualmente
Avalie gravidade usando VEF1: Se ≥ 80%, DPOC é leve, se ≥ 50% e < 80%, DPOC é moderada, se < 50%, DPOC é grave.
Se VEF1/CVF no diagnóstico ≥ 0,7 após broncodilatador ou discrepância entre resultado da espirometria e sintomas: discuta.

2.	Aconselhe paciente com DPOC
*Se fuma tabaco (verificar texto “Uso de tabaco”). Apoie para mudança (Verificar texto “Apoie paciente para fazer uma mudança”). Parar de fumar é o principal tratamento para manejo da DPOC.
*Incentive paciente a fazer caminhadas diárias e aumentar as atividades cotidianas como jardinagem, cuidados com a casa e utilizar escadas em vez de elevadores.
*Corticoides inalatórios podem causar candidíase oral: oriente paciente enxaguar boca e fazer gargarejos após cada dose.

3.	Trate paciente com DPOC
*Prescreva vacina contra influenza anualmente e vacina para COVID-19. Prescreva vacina pneumocócica 23-v (2 doses em zero e 5 anos).
*Prescreva salbutamol inalado 200mcg (2 jatos) se necessário, até 4 vezes ao dia.
*Antes de ajustar tratamento assegure-se que está aderente e sabe usar inalador/espaçador (verificar texto “Asma e DPOC: diagnóstico)
*Se DPOC moderada/grave ou não controlada com salbutamol, decida qual tratamento adicionar:
- Se < 2 exacerbações no último ano: adicione formoterol inalado 12mcg, 1 jato cada 12 horas.
- Se ≥ 2 exacerbações no último ano ou exacerbação com hospitalização no último ano ou sem melhora com formoterol: adicione (ou troque formoterol por) formoterol/budesonida (Se usa ritonavir, evite budesonida e discuta alternativas) 14/400mcg cada 12 horas. Se já em uso e sem melhora, aumente para 24/800mcg cada 12 horas. Se já em uso e ainda sem melhora após 3 meses, solicite espirometria e discuta/encaminhe.
*Se exacerbação aguda nesta consulta:
- Se recebeu prednisona ou hidrocortisona, prescreva prednisona 40mg ao dia num total de 5 dias.
- Se mudança na cor do escarro para amarelo/verde e aumento de volume ou falta de ar, prescreva amoxicilina 500mg cada 8 horas por 5 dias (Se alergia à penicilina, prescreva azitromicina 500mg ao dia por 3 dias). Se DPOC grave, ≥ 2 exacerbações/ano, exacerbação com hospitalização no último ano ou usou antibióticos há < 3 meses, prescreva amoxicilina/clavulanato (500mg/125mg) cada 8 horas por 5 dias (Se alergia à penicilina, discuta alternativas ou prescreva, se disponível, levofloxacina 500 mg ao dia por 5-7 dias. Se VEF1 < 30%, bronquiectasias, uso crônico de corticoide ou usou amoxicilina/clavulanato ou quinolona há < 3 meses, considere prescrever ciprofloxacino 500mg cada 12 horas por 5-7 dias). Se sem melhora após 3 dias, reavalie e discuta.

4.	Se exacerbação recente, ajuste de tratamento, sente-se pior/não tão bem como antes, reavalie mensalmente. Se não, cada 6 meses.


`
  },
  {
    titulo: 'Hipertensão: diagnóstico',
    pagina: 136,
    conteudo: `
         Hipertensão: diagnóstico

Verifique a Pressão Arterial (PA)
*Deixe paciente sentado recostado na cadeira com o braço apoiado ao nível do coração e ambos os pés apoiados no chão por 5 minutos.
*Use um manguito maior se a circunferência medial do braço for > 34cm.
*Garanta que paciente esta com bexiga vazia e não tomou bebida com cafeina, fumou tabaco ou fez atividade física intensa nos últimos 30 minutos. Oriente paciente evitar falar enquanto mede PA.
*Considere também que se paciente está estressado ou com dor, o valor da PA pode estar alterado.
*Primeiro verifique a PA em ambos os bracos e use o braço com maior valor para as aferições seguintes.
Se diferença > 15mmHg entre os braços, repita mais de uma vez para confirmar e, se confirmar, considere suspeita de dissecção de aorta e discuta.
*Depois verifique a PA no braço com maior valor de PA mais uma vez após 1-2 minutos. Faça a média de ambas a medidas para determinar a PA do paciente.
*Se gestante, interprete resultados (verificar texto “Gestação: avaliação”).


Atenda com urgência paciente com PA ≥ 180/120 e um ou mais dos seguintes:
*Alterações visuais
*Tontura
*Confusão
*Dor de cabeça
*Dor no peito (verificar texto “Dor no peito”)
*Falta de ar que piora ao deitar ou com edema de MMII (verificar texto “Insuficiência cardíaca: cuidados de rotina”).
*Início súbito de fraqueza ou dormência assimétrica da face (com mínimo ou nenhum envolvimento
da testa), braço ou perna; dificuldade na fala ou alteração visual: considere derrame ou AIT (verificar texto “Derrame (AVC): diagnóstico e cuidados de rotina”) 

2.1. Maneje:
*Encaminhe com urgência.
*Enquanto aguarda remoção, discuta para considerar uso de medicamentos hipotensores (podem causar uma queda intensa na PA e AVC).


Abordagem do paciente que não necessita de atenção urgente

3.1. PA < 140/90 - Decida quando repetir PA de acordo com a medida:

3.1.1. PA < 120/80
*Se < 40 anos e sem fatores de Risco Cardiovascular (RCV): reavalie após 5 anos. Considere os seguintes fatores de RCV: DM, DRC, tabagismo (atual ou há < 1 ano), IMC > 25, circunferência abdominal > 88 cm (mulher) ou > 102 cm (homem) ou pais/irmãos com DCV precoce (homem < 55 anos ou mulher < 65 anos. 
• Se < 40 anos e com fatores de RCV: reavalie após 1 ano.
• Se ≥ 40 anos, reavalie após 1 ano.

3.1.2. PA 120/80 – 139/89
*Reavalie a PA após 1 ano.
*Maneje RCV  (verificar texto “Risco Cardiovascular (RCV): cuidados de rotina”).

3.2. PA 140/90 – 179/109
*Repita PA em outras 2 ocasiões, sendo uma delas fora do consultório.
*Evite diagnosticar hipertensão com apenas uma medida.

3.2.1. Se 1 das medidas: PA < 140/90  Neste caso, vá para item 3.1 para definir periodicidade das medidas. Se medida fora do consultório é PA ≥ 140/90, discuta e considere hipertensão mascarada

3.2.2. Se as 2 medidas: PA 140/90 – 179/109 - Diagnostique hipertensão
*Ofereça cuidados de rotina para hipertensão (verificar texto “Hipertensão: cuidados de rotina”).
*Se PA ≥ 180/120 ou paciente com < 30 anos e IMC < 30 e sem história familiar de hipertensão, considere hipertensão secundária e discuta para solicitar investigação complementar.

3.3. PA ≥ 180/110
*Repita PA após 1 hora de repouso. 
*Evite diagnosticar hipertensão com apenas uma medida.
*Se PA confirmada ≥ 180/110. Se não tiver feito, verificar necessidade de atenção urgente conforme item 2. Diagnostique hipertensão e proceda conforme item 3.2.2.



`
  },
  {
    titulo: 'Derrame (AVC): diagnóstico e cuidados de rotina',
    pagina: 141,
    conteudo: `
        Derrame (AVC): diagnóstico e cuidados de rotina

 
1.      Diagnóstico:
 
Início súbito de qualquer um dos seguintes sugere um derrame (AVC) ou um acidente isquêmico transitório (AIT):
 
*Fraqueza ou dormência da face, braços ou pernas, especialmente se unilateral
*Visão borrada ou diminuída em um ou em ambos os olhos ou visão dupla
*Dificuldade em falar ou entender o que é dito
*Dificuldade em caminhar, tontura, perda de equilíbrio ou de coordenação
 
Confirme diagnóstico de derrame (AVC) e maneje como abaixo se < 7 dias do início dos sintomas. Discuta se > 7 dias do início dos sintomas.
 
2.      Atendimento de urgência:
 
Atenda e encaminhe com urgência paciente com derrame/AIT se < 7 dias do início dos sintomas (para considerar trombólise em unidade especializada em derrame, se disponível):
 
*Se SaO2 < 94% ou FC > 30, aplique oxigênio via cânula nasal 1-6L/min para manter SaO2 > 94%.
*Verifique glicemia: se < 55mg/dL (verificar texto “Avalie e maneje glicemia capilar aleatória”).
*Mantenha paciente sem nada pela boca até avaliar deglutição.
*Aplique cloreto de sódio 0,9% 1L EV a cada 4-6 horas. Não prescreva fluidos com glicose/dextrose (glicose elevada pode piorar AVC).
*Se PA ≥ 220/120, discuta com especialista/referência sobre necessidade de tratamento. Se PA elevada < 220/120, evite tratamento (pode piorar AVC).
 
3.      Avalie paciente com derrame/AIT
 
*Sintomas: Avalie em toda consulta. Pergunte sobre sintomas de outro derrame ou Acidente Isquêmico Transitório (AIT), dor no peito (verificar texto “Dor no peito”), ou dor na perna (verificar texto “Sintomas nas pernas”. Maneje outros sintomas conforme orientações específicas da página do sintoma.
*Depressão: Avalie em toda consulta. Questionar se no último mês o paciente se sentiu desanimado, deprimido, sem esperanças ou teve pouco interesse ou prazer em fazer as coisas. Se a resposta for positiva para qualquer um desses sintomas, verificar texto “Depressão: diagnóstico”.
*Reabilitação: Avalie em toda consulta. Se houver problemas de mobilidade, encaminhe para fisioterapia. Se houver problemas de deglutição, fala, tosse pós-alimentar ou saliva excessiva, encaminhe para fonoaudiologia. Em casos de má-nutrição ou Índice de Massa Corporal (IMC) menor que 18,5 (ou menor que 22 se maior de 65 anos), encaminhe para nutricionista. Se houver alteração da visão, encaminhe para oftalmologia.
*Cuidados paliativos: Avalie em toda consulta. Se observada piora da função física ou mental, ou dificuldades significativas em engolir ou respirar, ofereça também cuidados paliativos (verificar texto “Cuidados paliativos de rotina”).
*Pressão Arterial (PA): Avalie em toda consulta. Se o paciente não tem hipertensão arterial sistêmica (HAS) conhecida, interprete os valores de pressão (verificar texto “Hipertensão: diagnóstico”). Se tiver HAS, discuta as metas de pressão arterial, considerando valores menores que 130/80 e ofereça cuidados de rotina (Verificar texto “Hipertensão: cuidados de rotina”.
*Ausculta cardíaca e carotídea: Avalie em toda consulta. Se detectado sopro cardíaco diastólico, sistólico acentuado ou holossistólico, ou frêmito sistólico, solicite um ecocardiograma e discuta o caso. Se detectado sopro carotídeo, solicite uma ultrassonografia (USG) e discuta o caso.
*Lesão por pressão: Avalie se o paciente está acamado ou cadeirante. Verifique áreas comuns para mudança de cor da pele e lesões por pressão. Se presentes, verificar texto “Úlcera de pele ou ferida que não cicatriza: cuidados de rotina”.
*Diabetes: Avalie no diagnóstico e, posteriormente, anualmente. Se o paciente não tem diagnóstico prévio de diabetes, verifique qual teste é apropriado e interprete os resultados (verificar texto “Diabetes: rastreio e diagnóstico”). Se o diabetes for uma condição conhecida, verifique o texto “Diabetes: cuidados de rotina”.
*Risco Cardiovascular (RCV): Avalie na primeira consulta e anualmente. Solicite exames para colesterol total, HDL e triglicerídeos e avalie o risco cardiovascular (verificar texto “Risco Cardiovascular (RCV): avaliação”). Interprete os resultados conforme as instruções específicas (verificar texto “Risco Cardiovascular (RCV): cuidados de rotina”).
*Eletrocardiograma (ECG): Avalie no diagnóstico. Se o ECG estiver alterado, discuta.
 
 
4.      Aconselhe paciente com derrame/AIT
 
*Aconselhe paciente a procurar atendimento médico imediato se os sintomas recorrerem. O tratamento rápido de um derrame/AIT pequeno pode reduzir o risco de um derrame (AVC) maior.
*Aconselhe/maneje fatores de RCV (verificar texto “Risco Cardiovascular (RCV): avaliação”). Se fuma, motive parar (verificar texto “Uso de tabaco”). Se problemas de mobilidade, oriente como evitar quedas.
*Não prescreva contracepção com estrogênio, aconselhe outros métodos (Verificar texto “Contracepção”). Se tem < 55 anos (homem) ou < 65 anos (mulher), recomende avaliar RCV de parentes de 1o grau.
 
5.      Trate paciente com derrame/AIT
 
*Prescreva vacina pneumocócica 23-v (2 doses em zero e 5 anos), Haemophilus influenzae tipo b (dose única, se não fez na infância), influenza anual e COVID conforme recomendação vigente.
*Prescreva AAS 100mg ao dia com comida. Se alergia ao AAS, prescreva ao invés clopidogrel 75mg ao dia (Tomar com alimentação. Não prescreva se úlcera péptica atual, distúrbios de coagulação. Cuidado se dispepsia, > 65 anos, uso de AINEs, corticoide, varfarina). Se doença valvar ou fibrilação atrial, encaminhe para substituir o AAS/clopidogrel por varfarina.
*Prescreva sinvastatina 40mg à noite, uso contínuo. Se usa anlodipino, considere prescrever 20mg por dia. Se já usa 40mg, mantenha e discuta. Evite se gestante ou doença hepática. Não prescreva sinvastatina se usa, atazanavir/ritonavir ou darunavir/ritonavir: considere ao invés atorvastatina ou pravastatina.
- Solicite CT, HDL e TGC antes, 3 meses após iniciar sinvastatina/estatina(Estatina: sinvastatina ou outras estatinas como atorvastatina, pravastatina, rosuvastatina). e anualmente. Almeje reduzir não-HDLc (Colesterol não-HDL (não-HDLc) = colesterol total menos HDL) > 40% após 3 meses de uso e manter redução. Interprete resultados (verificar texto “Risco Cardiovascular (RCV): cuidados de rotina”).
 

`
  },
  {
    titulo: 'Doença cardíaca isquêmica: avaliação inicial',
    pagina: 142,
    conteudo: `
        Doença cardíaca isquêmica: avaliação inicial

 
1.      Se dor no peito no momento do atendimento: inicie avaliação pela página de dor no peito, se ainda não tiver feito (verificar texto “Dor no peito”).
 
2.      O paciente tem doença cardíaca isquêmica conhecida ou angina (Dor no peito causada por doença cardíaca isquêmica)?
 
2.1. Não - Dor/desconforto no peito atual ou prévio com qualquer um dos seguintes:
*Sensação como de pressão, peso ou aperto em região central ou lado esquerdo do peito
*Irradiação para mandíbula, pescoço, braço(s)
*Pode estar associado com náuseas, vômitos, palidez, sudorese ou falta de ar
 
2.1.1.      Ñão para todos, dor no peito sem as características acima. Avalie outras causas de dor no peito (verificar texto “Dor no peito”)
2.1.2.      Sim para qualquer um.
*A dor/desconforto no peito é:
- Desencadeada por exercícios, esforço ou ansiedade e
- Alivia com repouso e
- Dura < 10 minutos
 
2.1.2.1.  Sim para todos - Provável angina estável
*Confirme diagnóstico, solicite teste ergométrico (se paciente incapaz de realizar teste por problemas misculoesqueléticos, discuta).
*Se já não tiver feito, considere também outras causas de dor no peito (siga algoritmo de abordagem do paciente com dor no peito que não necessita de atenção urgente – verificar texto “Dor no peito”)
*Ofereça cuidados de rotina para doença isquêmica cardíaca (verificar texto “Doença cardíaca isquêmica: cuidados de rotina”). Se paciente com alto RCV conhecido, DM, HAS, homem ≥ 55 anos ou mulher ≥ 65 anos: não aguarde resultado do teste ergométrico para iniciar tratamento. Se dúvidas, discuta.
 
2.1.2.2.  Não para qualquer um - Provável síndrome coronariana aguda (ataque cardíaco ou angina instável). Observação: Se dor no peito que não é em aperto ou opressiva, é bem localizada, reproduzível à palpação e sem outros sinais/sintomas do quadro do texto “Dor no peito”, discuta para considerar problema musculoesquelético.
*Encaminhe com urgência: chame ajuda, peça para ligar SAMU 192. Se disponível, faça um ECG (ECG pode mostrar elevação/depressão de ST ou bloqueio de ramo esquerdo, mas um ECG normal não exclui diagnóstico de angina instável ou ataque cardíaco) nos primeiros 10 minutos. Inicie manejo imediatamente e discuta:
*Se SaO2 < 90% ou falta de ar ou FR > 30, aplique oxigênio via cânula nasal 1-6L/min para manter SaO2 entre 91-96% (se DPOC, 88-92%).
- Se 6L/min e fora do alvo/sem melhora da falta de ar, use máscara com reservatório e aumente até 15L/min.
*Dê AAS 300mg em dose única mastigado. Se alergia ao AAS, dê clopidogrel 300 mg em dose única. Tomar com alimentação. Não prescreva se úlcera péptica atual, distúrbios de coagulação. Cuidado se dispepsia, > 65 anos, uso de AINEs, corticoide, varfarina.
*Estabeleça acesso EV.
*Se PAS ≤ 90, discuta com especialista/referência. Se sem crepitações/sibilos pulmonares e sem edema nas pernas, aplique cloreto de sódio 0,9% 250mL EV em 30 minutos. Pare se piora/nova falta de ar ou novas crepitações pulmonares. Meça PA novamente: se ainda PAS ≤ 90, discuta.
*Se dor no peito atual e PAS > 90 (se PAS ≤ 90, discuta manejo):
- Dê dinitrato de isossorbida sublingual 5mg cada 5 minutos até que dor alivie ou até máximo de 4 doses. Não prescreva se usou sildenafila/vardenafila nas últimas 24 horas ou tadalafila nas últimas 48 horas.
- Se dor persistente ou intensa ou contraindicação ao uso de dinidrato de isossorbida: aplique morfina 4mg EV (Dilua 10mg de morfina em 9mL de cloreto de sódio 0,9% e dê 4mL) lentamente. Se necessário, repita cada 5-15 minutos. Monitore PA, pare se PAS < 90.
- Se PA > 180/130, discuta com especialista/referência.
*Se FC < 50 ou > 100, discuta com especialista/referência.
 
 
2.2.  Sim (tem doença cardíaca isquêmica conhecida ou angina)
*Dor/desconforto no peito atual com qualquer um dos seguintes:
- Ocorre em repouso ou com mínimo esforço ou
- Não alivia com repouso ou nitrato sublingual ou
- Dura ≥ 10 minutos ou
- Pior/maior duração que o usual ou
- Ocorre mais frequente que o usual
 
2.2.1.      Se sim para qualquer um dos acima, provável síndrome coronariana aguda (ataque cardíaco ou angina instável) – ir para item 2.1.2.2. acima.
 
 
2.2.2.      Não para todos os item acima:
*Se já não tiver feito, considere também outras causas de dor no peito (siga algoritmo de abordagem do paciente com dor no peito que não necessita de atenção urgente).
*Ofereça cuidados de rotina para doença isquêmica cardíaca (verificar texto “Doença cardíaca isquêmica: cuidados de rotina”).
 

`
  },
  {
    titulo: 'Doença cardíaca isquêmica: cuidados de rotina',
    pagina: 143,
    conteudo: `
         Doença cardíaca isquêmica: cuidados de rotina

 
1.      Avaliações clínicas de paciente com doença cardíaca isquêmica
*Sintomas: Em cada consulta, faça uma avaliação inicial se ainda não foi feita (verificar texto “Doença cardíaca isquêmica: avaliação inicial”). Além disso, pergunte sobre dor na perna (verificar texto “Sintomas nas pernas”) e sintomas de AVC/AIT (verificar texto “Derrame (AVC): diagnóstico e cuidados de rotina”).
*Depressão: Durante cada consulta, questione se no último mês o paciente sentiu-se 1) desanimado, deprimido, sem esperanças ou 2) teve pouco interesse ou prazer em fazer as coisas. Se afirmativo para qualquer uma dessas questões, proceda conforme o texto "Depressão: diagnóstico”.
*Cuidados Paliativos: Nos casos em que o paciente apresentar falta de ar ou dor no peito em repouso que não responde ao tratamento já maximizado, ofereça cuidados paliativos conforme o texto “Cuidados paliativos de rotina”.
*Pressão Arterial (PA): Avalie a PA em cada consulta. Se o paciente não tem hipertensão arterial sistêmica (HAS) conhecida, proceda conforme o texto “Hipertensão: diagnóstico”. Se a HAS é conhecida, discuta para considerar uma meta de PA < 130/80 (Se idoso frágil, discuta para individualizar meta da PA) e ofereça também cuidados de rotina para HAS (verificar texto “Hipertensão: cuidados de rotina”).
*Diabetes: No diagnóstico e, posteriormente, de forma anual, se o paciente não tem diabetes conhecida, verifique qual teste realizar conforme o texto “Diabetes: rastreio e diagnóstico” e interprete os resultados. Se a diabetes já é conhecida, verificar texto “Diabetes: cuidados de rotina”.
*Risco Cardiovascular (RCV): Na primeira consulta e de forma anual, solicite exames de colesterol total, HDL e triglicerídeos para avaliar o RCV (verificar texto “Risco Cardiovascular (RCV): avaliação”). Interprete os resultados conforme o texto “Risco Cardiovascular (RCV): cuidados de rotina”.
 
2.      Aconselhe paciente com doença cardíaca isquêmica
 
*Aconselhe/maneje fatores de RCV (verificar texto “Risco Cardiovascular (RCV): cuidados de rotina”). Se fuma, motive parar (verificar texto “Uso de tabaco”. Se IAM, oriente que pode retornar atividade sexual 4 semanas após se sem sintomas. Se disponível, encaminhe para reabilitação cardíaca.
*Explique que nitratos não causam dependência e que nitratos sublinguais podem ser usados antes de uma atividade que pode provocar dor no peito.
*Enfatize importância da adesão aos medicamentos por toda vida para garantir sucesso do tratamento. Se má adesão, ofereça apoio (verificar texto “Apoie paciente em uso contínuo de medicamentos”). Garanta que sabe como usar nitrato sublingual como descrito abaixo.
*Oriente paciente evitar AINEs (como ibuprofeno, nimesulida, diclofenaco), pois eles podem precipitar dor no peito ou um ataque cardíaco.
*Se paciente tem < 55 anos (homem) ou < 65 anos (mulher), recomende avaliação do RCV dos parentes de primeiro grau (verificar texto “Risco Cardiovascular (RCV): avaliação”.
 
3.      Trate paciente com doença cardíaca isquêmica:
 
*Prescreva AAS 100mg ao dia com comida (Não prescreva se úlcera péptica atual, distúrbios de coagulação. Cuidado se dispepsia, > 65 anos, uso de AINEs, corticoide, varfarina). Se alergia ao AAS, prescreva ao invés clopidogrel 75mg ao dia. Se doença valvar ou fibrilação atrial, encaminhe para substituir AAS/clopidogrel por varfarina.
*Após evento agudo (síndrome coronariana) ou intervenção coronariana/carotídea (ex. stent), continue AAS e dê também clopidogrel 75mg ao dia. Discuta para decidir quando parar.
*Prescreva sinvastatina 40mg à noite, uso contínuo (se usa anlodipino, considere prescrever 20mg por dia. Se já usa 40mg, mantenha e discuta). Evite se gestante ou doença hepática. Não prescreva sinvastatina se usa, atazanavir/ritonavir ou darunavir/ritonavir: considere ao invés atorvastatina ou pravastatina.
- Solicite colesterol total, HDL e triglicerídios antes, 3 meses após iniciar sinvastatina/estatina (Estatina: sinvastatina ou outras estatinas como atorvastatina, pravastatina, rosuvastatina) e depois anualmente. Almeje reduzir não-HDLc > 40% após 3 meses de uso e manter redução (Colesterol não-HDL (não-HDLc) = colesterol total menos HDL. Interprete resultados (verificar texto “Risco Cardiovascular (RCV): cuidados de rotina”).
*Prescreva atenolol 50mg ao dia mesmo se sem angina. Almeje FC = 50-60. Se necessário, aumente até 100mg ao dia (ver item 4.). Se IC considere substituir Atenolol por carvedilol (ver item 4.)
*Se paciente tem HAS, DM, DRC ou IC (disfunção sistólica): prescreva enalapril 5mg cada 12 horas e aumente lentamente até 10mg cada 12 horas. Se enalapril não for tolerado (tosse como efeito adverso) prescreva ao invés losartana 50-100mg/dia. Não prescreva enalapril/losartana se angioedema prévio, gestante/amamentando.
*Prescreva vacina pneumocócica 23-v (2 doses em zero e 5 anos), Haemophilus influenzae tipo b (dose única, se não fez na infância), influenza anual e COVID conforme recomendação vigente.
*Se paciente tem angina estável: trate usando medicamentos de forma gradual conforme item 4. Se desconforto/dor no peito (angina) controlada, continua mesmo medicamento e dose.
*Se angina persistir no peito 4 semanas após iniciar/mudar medicamento, aumente para dose máxima, e então adicione próximo passo. Confirme adesão antes de intensificar tratamento.
* Discuta/encaminhe se angina persiste/interfere nas atividades cotidianas apesar do tratamento.
 
 
4.      Protocolo de Medicação para Tratamento Cardíaco:
Passo 1:
*Medicamento: Dinitrato de isossorbida
*Dose Inicial: 5mg sublingual (SL) se angina ou antes de esforços
*Dose Máxima: 3 doses de 5mg em 1 episódio de angina
*Observações: Se angina, pare qualquer atividade e tome a primeira dose. Se a angina persistir, tome até duas doses adicionais, cada uma a cada 5 minutos. Se não houver melhora 5 minutos após a terceira dose, procure atendimento urgente. Não usar se sildenafila ou vardenafila foram usados nas últimas 24 horas, ou tadalafila nas últimas 48 horas.
Passo 2:
*Medicamento: Atenolol (ATL)
*Dose Inicial: 50mg ao dia
*Dose Máxima: 100mg ao dia
*Observações: Se insuficiência cardíaca (IC) ou necessidade de controle da pressão arterial (como 4ª ou 5ª droga), considere substituir por carvedilol (CVL) 6,25mg cada 12 horas, até 25mg cada 12 horas (50mg se >85Kg). Não prescrever CVL se DPOC/asma leve/moderada. Não prescrever ATL/CVL se DPOC/asma grave/descontrolada, IC descompensada, frequência cardíaca (FC) < 50 antes do tratamento ou pressão arterial sistólica (PAS) < 100. Se DPOC/asma grave/descontrolada ou efeitos adversos intoleráveis (apreensão torácica, fadiga, bradicardia, dor de cabeça, mãos/pés frios, impotência), considere anlodipino.
Passo 3:
*Medicamento: Anlodipino
*Dose Inicial: 5mg pela manhã
*Dose Máxima: 10mg ao dia
*Observações: Não prescrever se IC descompensada. Se IC estável, discutir opções. Efeitos adversos como edema em tornozelo, tontura, rubor facial, dor de cabeça e fadiga são geralmente autolimitados. Se intoleráveis, discutir alternativas.
Passo 4:
*Medicamento: Mononitrato de isossorbida
*Dose Inicial: 20mg cada 12 horas
*Dose Máxima: 40mg cada 12 horas
*Observações: Não prescrever se glaucoma de ângulo fechado. Evitar uso com sildenafila, tadalafila ou vardenafila devido ao risco de hipotensão grave.
 

`
  },
  {
    titulo:
      'Doença Arterial Periférica (DAP): diagnóstico e cuidados de rotina',
    pagina: 144,
    conteudo: `
         Doença Arterial Periférica (DAP): diagnóstico e cuidados de rotina

 
1.      Informações gerais:
*Doença arterial periférica é caracterizada por claudicação: dor muscular (tipo cãibras) ao caminhar/exercitar-se, dor é na parte inferior da perna, coxa ou nádega e alivia com repouso.
*Pulso(s) da(s) perna(s) estão reduzidos e pele pode estar fria, brilhante e sem pêlos. Pode ter dor inexplicada no pé em repouso (pior à noite), feridas que não cicatrizam nas pernas.
*Se disponível, calcule índice tornozelo-braquial (ITB). Se ITB ≤ 0,9: confirme diagnóstico de DAP. Se ITB não disponível ou dúvidas, discuta/encaminhe.
 
 
2.      Atenda com urgência paciente com doença arterial periférica e um ou mais dos seguintes:
 
*Início súbito de dor intensa na perna ao repouso com qualquer um dos seguintes na perna: dormência, fraqueza, palidez, ausência de pulso: provável isquemia aguda de membro.
*Dor na perna que ocorre em repouso, úlcera ou gangrena na perna: provável isquemia crítica de membro.
*Massa pulsátil no abdome com dor abdominal/nas costas ou PAS ≤ 90: provável ruptura de aneurisma de aorta abdominal.
*Maneje e encaminhe com urgência (se provável isquemia crítica de membro, discuta mesmo dia com especialista/referência para decidir se encaminha no mesmo dia):
*Se provável ruptura de aneurisma de aorta abdominal: não aplique fluidos EV mesmo se PAS ≤ 90 (aumentar a pressão arterial pode piorar a ruptura).
 
3.      Avalie paciente com doença arterial periférica:
*Sintomas: Em cada consulta, pergunte sobre dor no peito (verificar texto “Dor no peito”) e sintomas de derrame/AIT (Verificar texto “Derrame (AVC): diagnóstico e cuidados de rotina”). Registre também a distância de caminhada até o início da claudicação.
*Depressão: Em cada consulta, avalie se o paciente sentiu-se desanimado, deprimido, sem esperanças ou demonstrou pouco interesse ou prazer em fazer as coisas no último mês. Se afirmativo, verificar texto “Depressão: diagnóstico”.
*Cuidados Paliativos: Ofereça cuidados paliativos conforme necessário, especialmente se os sintomas forem intensos, não melhorarem com o tratamento e não houver possibilidade de cirurgia (Verificar texto “Cuidados paliativos de rotina”).
*Pressão Arterial (PA): Meça a PA em cada consulta. Se o paciente não tem hipertensão arterial sistêmica (HAS) conhecida (verificar texto “Hipertensão: diagnóstico”). Se HAS for conhecida, ofereça também cuidados de rotina para HAS (verificar texto “Hipertensão: cuidados de rotina”).
*Pernas e Pés: Avalie dor, pulsos, sensações, deformidades e problemas de pele em cada consulta. Forneça orientações de rastreio e cuidado dos pés (verificar texto “Cuidados nos pés”). Se houver úlcera na perna que não cicatriza, verificar texto “Úlceras de pele ou feridas que não cicatrizam: diagnóstico”.
*Abdome: Em cada consulta, verifique a presença de massa pulsátil no abdome, que pode indicar aneurisma da aorta abdominal. Se detectada, solicite uma ultrassonografia (USG) e discuta o caso. Se o paciente apresentar dor abdominal/nas costas ou pressão arterial sistólica (PAS) ≤ 90, encaminhe com urgência.
*Diabetes: No diagnóstico e anualmente, se o paciente não tem diabetes conhecida, determine qual teste realizar (verificar texto “Diabetes: rastreio e diagnóstico”) e interprete os resultados. Se diabetes é conhecida, verificar texto “Diabetes: cuidados de rotina”.
*Risco Cardiovascular (RCV): Na primeira consulta e anualmente, solicite exames de colesterol total, HDL e triglicerídeos para avaliar o RCV (verificar texto “Risco Cardiovascular (RCV): avaliação”). Interprete os resultados conforme o texto “Risco Cardiovascular (RCV): cuidados de rotina”.
 
4.      Aconselhe paciente com doença arterial periférica
 
*Aconselhe/maneje fatores de RCV  (verificar texto “Risco Cardiovascular (RCV): cuidados de rotina”). Se fuma, motive parar (verificar texto “Uso de tabaco”).
*Oriente a manter pernas aquecidas e abaixo do nível do coração (especialmente à noite), e evite medicamentos descongestionantes que façam vasoconstrição.
*Oriente paciente que a atividade física é uma parte importante do tratamento. Ela aumenta o suprimento de sangue para as pernas e pode significar melhora dos sintomas.
*Se paciente tem < 55 anos (homem) ou < 65 anos (mulher), recomende avaliação do RCV dos parentes de primeiro grau (verificar texto “Risco Cardiovascular (RCV): avaliação”).
 
5.      Trate paciente com doença arterial periférica
 
*Oriente exercícios (como caminhadas em passos rápidos) por 30 minutos pelo menos 3 vezes na semana (de preferência diariamente). Oriente paciente a parar e descansar quando tiver claudicação.
*Prescreva AAS (Tomar com alimentação. Não prescreva se úlcera péptica atual, distúrbios de coagulação. Cuidado se dispepsia, > 65 anos, uso de AINEs, corticoide, varfarina) 100mg ao dia com comida. Se alergia ao AAS, prescreva ao invés clopidogrel 75mg ao dia. Se doença valvar ou fibrilação atrial, encaminhe para substituir o AAS/clopidogrel por varfarina.
*Prescreva sinvastatina 40 mg à noite, uso contínuo (Não prescreva sinvastatina se usa atazanavir/ritonavir ou darunavir/ritonavir: considere ao invés atorvastatina ou pravastatina). Se usa anlodipino, considere prescrever 20mg por dia. Se já usa 40mg, mantenha e discuta. Evite se gestante ou doença hepática.
*Solicite CT, HDL e TGC antes, 3 meses após iniciar sinvastatina/estatina (Estatina: sinvastatina ou outras estatinas como atorvastatina, pravastatina, rosuvastatina) e depois anualmente. Almeje reduzir não-HDLc (Colesterol não-HDL (não-HDLc) = colesterol total menos HDL) > 40% após 3 meses de uso e manter redução. Interprete resultados (verificar texto “Risco Cardiovascular (RCV): cuidados de rotina”).
 
6.      Acompanhe paciente com doença arterial periférica:
*Reavalie paciente com doença arterial periférica cada 3 meses até estável (suportando atividades cotidianas e com PA, glicemia e dislipidemia controladas), então cada 6-12 meses.
*Discuta/encaminhe se mantém sintomas apesar de aderente ao tratamento, exercícios e às modificações de estilo de vida, dor ao repouso ou se úlcera/ferida que não cicatriza.
 


`
  },
  {
    titulo: 'Artrite crônica: diagnóstico e cuidados de rotina',
    pagina: 154,
    conteudo: `
         Artrite crônica: diagnóstico e cuidados de rotina

 
1.      Informações gerais:
*Se o pacientes tem episódios de dor articular e edema que resolvem completamente entre um episódio e outro, considere gota (Verificar texto “Gota: diagnóstico e cuidados de rotina”).
*O paciente com artrite crônica tem dor articular contínua por ao menos 6 semanas. Distinguir osteoartrite mecânica de artrite reumatoide inflamatória conforme a seguir:
 
*Provável osteoartrite se:
- Afeta somente articulações.
- Articulações que sustentam o peso e possívelmente mãos e pés.
- Articulações podem inchar mas não esquentar.
- Rigidez ao acordar dura menos de 30 minutos.
- A dor piora com atividade e melhora com repouso.
 
*Provável artrite inflamatória se:
- Pode ser sistêmica: perda de peso, fadiga, perda de apetite, atrofia muscular.
- Envolvimento frequente de pés e mãos (especialmente metacarpofalângicas).
- Articulações estão inchadas e quentes.
- Rigidez ao acordar dura mais de 30 minutos.
- Dor e rigidez melhoram com a atividade, pioram com repouso.
 
*Se artrite inflamatória provável ou incerteza diagnóstica: discuta ou encaminhe.
 
2.      Avalie paciente com artrite crônica:
*Sintomas: Avalie em todas as consultas e maneje conforme as instruções específicas para cada sintoma.
*Atividades Rotineiras: Em todas as consultas, questione se o paciente ainda consegue realizar atividades cotidianas, como caminhar normalmente, abotoar roupas e usar garfo e faca adequadamente.
*Sono: Verifique em cada consulta se o paciente tem dificuldades para dormir (verificar texto “Dificuldade para dormir”.
*Depressão: Em todas as consultas, pergunte se, no último mês, o paciente se sentiu desanimado, deprimido, sem esperanças ou demonstrou pouco interesse ou prazer em fazer as coisas. Se positivo para qualquer um desses sintomas, verificar texto “Depressão: diagnóstico”.
*Articulações: Examine em cada consulta a presença de calor, sensibilidade e limitação na amplitude de movimento das articulações.
*Índice de Massa Corporal (IMC): Avalie no diagnóstico. Se o IMC for superior a 25, oriente a perda de peso para reduzir a sobrecarga nas articulações dos joelhos e pés, e maneje o Risco Cardiovascular (RCV) (verificar texto “Risco Cardiovascular (RCV): avaliação”).
*PCR/VHS/FR: Em casos de artrite inflamatória ou diagnóstico incerto, se a Proteína C Reativa (PCR) ou a Velocidade de Hemossedimentação (VHS) estiverem elevadas e/ou o Fator Reumatóide (FR) for positivo, confirme o diagnóstico e discuta ou encaminhe o paciente para considerar a solicitação do teste anti-CCP.
*HIV: Realize o teste para HIV no diagnóstico (verificar texto “HIV: diagnóstico”).
*Raio-X de Mãos e Pés: Solicite raio-X em vistas anteroposterior (AP) e oblíqua de ambos pés e mãos no diagnóstico. Interprete o resultado e, se houver dúvidas, discuta.
 
3.      Aconselhe paciente com artrite crônica
*Estimule paciente manter-se tão ativo quanto possível, mas repousar em eventos agudos, e alimentar-se de forma saudável. Se fuma tabaco, motive parar (verificar texto “Uso de tabaco”. Apoie para mudança de hábitos (verificar texto “Apoie paciente para fazer uma mudança”).
 
4.      Trate paciente com artrite crônica
*Se dificuldade para atividades rotineiras ou artrite reumatoide, encaminhe para fisioterapeuta ou educador físico.
*Se osteartrite:
- Prescreva paracetamol ou dipirona (evite se alergia) 500-1000mg cada 6 horas se necessário.
- Se não melhora ou inflamação presente, associe ibuprofeno 300-600mg cada 8 horas ou nimesulida 100mg cada 12 horas se necessário por até 7 dias. Não prescreva anti-inflamatórios se úlcera péptica, reação alérgica ou exacerbação de asma com uso, doença renal, gestação. Considere associar omeprazol 20mg em jejum se HAS, diabetes, insuficiência cardíaca, ≥ 65 anos, dispepsia, úlcera péptica prévia, uso de AAS, corticosteroides, varfarina, abuso de álcool.
 
*Se artrite reumatoide:
- Encaminhe para reumatologista para início precoce de drogas modificadoras de doença (DMARD) para controlar sintomas, preservar função e minimizar danos.
- Enquanto aguardar especialista, prescreva ibuprofeno 300-600mg cada 8 horas ou nimesulida 100mg cada 12 horas por até 14 dias. Se não melhora ou contraindicação ao AINEs, prescreva ao invés prednisona 5-10mg ao dia por até 21 dias. Se dúvidas ou não melhora, discuta.
 
*Reavalie até os sintomas estarem controlados, então a cada 6 meses. Se pouca resposta ao tratamento: discuta ou encaminhe.
 


`
  },
  {
    titulo: 'Gota: diagnóstico e cuidados de rotina',
    pagina: 155,
    conteudo: `
        Gota: diagnóstico e cuidados de rotina

 
1.  	Informações gerais:
*Considere crise aguda de gota se: início súbito de dor intensa, vermelhidão e inchaço em 1 única articulação, geralmente 1o dedo do pé ou joelho, com melhora completa em alguns dias.
*Considere gota crônica tofácea se: acometimento assimétrico > de 1 articulação; dor não intensa; depósitos podem ser vistos ou palpados nas articulações; recuperação incompleta.
 
2.  	Avalie paciente com gota:
2.1  Sintomas:
*Avalie em todas as consultas e gerencie conforme as diretrizes específicas para cada sintoma.
2.2  Uso de Álcool/Drogas:
*Verifique em cada consulta se, no último ano, o paciente consumiu quatro ou mais doses de álcool em uma única ocasião (Uma dose é 50mL (um copinho) de destilados, 125mL (uma taça pequena) de vinho ou 330mL (uma lata ou garrafinha) de cerveja), usou drogas ilegais, ou abusou de medicamentos prescritos ou não. Se afirmativo, verificar texto “Uso de álcool/drogas”.
2.3  Medicamentos:
*Avalie em todas as consultas a necessidade de ajustar medicamentos que podem induzir crises de gota, como hidroclorotiazida, furosemida, etambutol, pirazinamida e AAS. Considere mudar o medicamento se possível. Evite interromper o AAS se prescrito para doença cardiovascular confirmada.
2.4  Articulações:
*Examine em cada consulta. Identifique sinais de crise aguda de gota (articulações quentes, doloridas, avermelhadas e inchadas, frequentemente no primeiro dedo do pé ou joelho) e gota crônica tofácea (depósitos nódulos amarelados, indolores, duros e irregulares ao redor das articulações).
2.5  Risco Cardiovascular (RCV):
*Avalie no diagnóstico e depois conforme o risco (verificar texto “Risco Cardiovascular (RCV): avaliação”). Reavaliações devem ocorrer após 1 ano se risco CV < 10% associado a fator de risco para DCV ou se risco estiver entre 10-20%. Reavaliar após 6 meses se for superior a 20%. Se IMC < 18.5 ou paciente < 40 anos, discuta para excluir câncer como causa para a gota.
2.6  Creatinina (TFGe) e Ácido Úrico:
*Meça a creatinina no diagnóstico e a cada seis meses se o paciente estiver usando AINEs ou alopurinol. Para o ácido úrico, aguarde pelo menos duas semanas após uma crise aguda de gota antes de dosar. Se estiver em tratamento com alopurinol, ajuste a dose com base em medições mensais até que o ácido úrico seja inferior a 6 mg/dL, e depois continue com verificações a cada 6 meses.
 
3.  	Aconselhe paciente com gota
*Ajude paciente manejar seu RCV (verificar texto “Risco Cardiovascular (RCV): avaliação”).
*Ofereça orientação dietética: reduzir álcool (especialmente cerveja), bebidas gasosas doces, frutos do mar, miúdos e carne; aumentar o consumo de laticínios com baixo teor de gordura; evitar jejum e desidratação, pois podem aumentar o risco de uma crise aguda de gota.
*Oriente o paciente a evitar os medicamentos acima que podem induzir uma crise aguda de gota.
 
4.  	Trate o paciente com gota
4.1. Trate paciente com uma crise aguda de gota
*Prescreva ibuprofeno 300-600mg a cada 6 horas se necessário até 2 dias depois de melhorar (geralmente por 5-7 dias). Tomar com alimentação. Não prescreva se úlcera péptica, reação alérgica ou exacerbação de asma com uso, doença renal, gestação. Considere associar omeprazol 20mg em jejum se HAS, diabetes, insuficiência cardíaca, ≥ 65 anos, dispepsia, úlcera péptica prévia, uso de AAS, corticosteroides, varfarina, abuso de álcool.
*Se AINEs não é indicado/tolerado ou é inefetivo: prescreva ao invés prednisona 40mg ao dia, diminua 10mg cada 3 dias até parar.
*Oriente repousar com o membro elevado e aplicar gelo por 20 minutos a cada 2-3 horas.
*Se paciente já está tomando alopurinol, não suspenda durante a crise aguda.
 
4.2. Trate paciente com gota crônica tofácea
*Paciente necessita de alopurinol se: ≥ 2 crises por ano, gota crônica tofácea ou cálculo renal/doença renal causada por gota.
*Considere esperar 2 semanas após uma crise aguda de gota antes de iniciar alopurinol (se possível, verifique ácido úrico 2 semanas após a crise antes de iniciar).
*Prescreva alopurinol 100mg/dia, se disponível. Use menor dose para manter ácido úrico < 6mg/dL: aumente 100mg/mês, até 800mg em doses divididas (2-3x/dia). Dose usual de manutenção 300mg/dia.
 
4.3. Discuta ou encaminhe se não houver resposta ao tratamento ou não tiver certeza do diagnóstico.
 

`
  },
  {
    titulo: 'Menopausa',
    pagina: 166,
    conteudo: `
        Menopausa

 
1.  	Informações gerais
*Exclua gestação antes de diagnosticar menopausa. Se gestante (verificar texto “Gestação: avaliação”).
*Menopausa é ausência de menstruação por ≥ 12 meses seguidos (diagnóstico sem necessidade de exames). Maioria apresenta sintomas de menopausa e ciclos irregulares na perimenopausa.
*Se < 40 anos, discuta/encaminhe.
 
2.  	Avalie paciente em menopausa
2.1.  Sintomas:
*Quando avaliar: Toda consulta
*Observações:
- Pergunte sobre: fogachos, suores noturnos, secura vaginal, alterações de humor, problemas de memória, dificuldade para dormir (Verificar texto “Dificuldade para dormir”) e problemas sexuais (Verificar texto “Problemas sexuais”).
- Se suores noturnos, questione sintomas de TB como perda de peso e tosse ≥ 3 semanas. Se presentes, exclua TB (Verificar texto “Tuberculose (TB): diagnóstico”).
- Se alterações no peso sem explicação, frequência cardíaca ≥ 100, tremores, pele seca, fraqueza, constipação, intolerância ao frio ou calor: solicite TSH e interprete.
- Se amenorreia e IMC < 18,5 e preocupações excessivas sobre peso corporal, discuta para investigar anorexia.
2.2.  Saúde mental:
*Quando avaliar: Toda consulta
*Observações:
- Avalie e maneje o estresse (Verificar texto “Tristeza, estresse ou nervosismo”).
- No último mês, sentiu 1) desanimado, deprimido, sem esperanças ou 2) pouco interesse ou prazer em fazer as coisas? Se sim para qualquer um (Verificar texto “Depressão: diagnóstico”).
2.3. Sangramento vaginal:
*Quando avaliar: Toda consulta
*Observações: Se sangramento após relação sexual ou após 1 ano de amenorreia: solicite ultrassonografia (USG), interprete e discuta.
2.4. Risco Cardiovascular (RCV):
*Quando avaliar: No diagnóstico, conforme risco
*Observações: Avalie RCV (verificar texto “Risco Cardiovascular (RCV): avaliação”).
2.5. Risco de osteoporose:
*Quando avaliar: No diagnóstico
*Observações: Considere avaliação diagnóstica/tratamento se fatores de risco: < 65 anos com perda de > 3cm na altura ou fratura de quadril/punho/coluna; fratura não traumática prévia; uso de corticoides > 3 meses; início da menopausa < 45 anos; IMC < 21; > 2 doses de álcool/dia (Uma dose é 50mL (um copinho) de destilados, 125mL (uma taça pequena) de vinho ou 330mL (uma lata ou garrafa) de cerveja); tabagismo pesado (≥ 20 cigarros/dia).
2.6. Planejamento familiar:
*Quando avaliar: No diagnóstico
*Observações:
- Se < 50 anos, prescreva/mantenha contracepção por 2 anos após última menstruação (verificar texto “Contracepçao”).
- Se ≥ 50 anos, mude para método não hormonal ou pílula de progestágeno isolado/ACMP por até 1 ano após última menstruação (Verificar texto “Contracepção”).
2.7. Risco de câncer de mama:
*Quando avaliar: No diagnóstico e anual
*Observações: Examine mamas e axilas: se nódulo/s nas mamas ou axilas (Verificar texto “Sintomas mamários”). Se indicada terapia hormonal (TH), solicite mamografia antes de iniciar e interprete resultado (Verificar texto “Sintomas mamários”).
2.8. Exame citopatológico:
*Quando avaliar: Se necessário
*Observações: Avalie necessidade de fazer rastreio do câncer de colo de útero (Verificar texto “Rastreio do câncer de colo de útero”).
 
3.  	Aconselhe paciente em menopausa
3.1. Fogachos: Oriente a paciente a usar roupas leves, diminuir o consumo de álcool e evitar alimentos apimentados, cafeína, bebidas e ambientes quentes. Ajude a manejar seu RCV  (verificar texto “Risco Cardiovascular (RCV): cuidados de rotina”).
3.2. Alterações de Humor: Se a paciente tem tido dificuldades em lidar com suas alterações de humor, considere envolver a equipe multiprofissional de apoio. Se fuma tabaco, motive parar (verificar texto “Uso de tabaco”).
3.3. Terapia Hormonal (TH): Informe sobre riscos e contraindicações:
*Estrogênio solo: Risco aumentado de AVC/AIT e TVP, contraindicado em pessoas com útero devido ao risco de hiperplasia/câncer endometrial.
*TH Combinada: Risco aumentado de câncer de mama (uso >5 anos), AVC, TVP, TEP e IAM.
*Contraindicações comuns: Ambas as TH são contraindicadas se: câncer de mama/endométrio/ovário (suspeita, atual ou prévio), sangramento uterino anormal de causa desconhecida, TVP/TEP prévio ou atual, doença hepática ativa (com alteração da função hepática), trombofilias, história de IAM/AVC/AIT, alto RCV, HAS não tratada.
*Benefícios: Geralmente usada por 2-5 anos para controle de sintomas, podendo se estender conforme necessário.
 
4.  	Trate paciente em menopausa
 
*Se fogachos/suor noturno/dificuldade para dormir que interferem com funções da vida diária, ofereça TH se não houver contraindicação (ver contra-indicações acima):
- Se paciente teve útero removido (histerectomia): discuta alternativas que contenham somente estrogênio.
- Se paciente tem útero: discuta alternativas que contenham estrogênio e progestágeno.
*Se atrofia/ressecamento vaginal/dor na relação sexual: ofereça gel lubrificante (se usa com preservativo, evite base oleosa/petróleo) e/ou dê estriol 1mg/g creme vaginal 0,5g ao dia por 14 dias. Se sem melhora após 14 dias, discuta. Se melhora, reduza para 2x/semana por até 3 meses. Se após tratamento paciente reiniciar com sintomas, considere reiniciar por 2x/semana e discuta quando parar.
*Reavalie cada 12 meses se em TH e tente diminuir/parar se sintomas controlados. Se ≥ 5 anos de TH ou ≥ 10 anos da menopausa ou > 60 anos, pare TH. Se ainda sintomática, discuta/encaminhe
 

`
  },
  {
    titulo: 'Cuidados paliativos de rotina',
    pagina: 167,
    conteudo: `
         Cuidados paliativos de rotina

 
1.  	Um paciente pode receber cuidados curativos e paliativos ao mesmo tempo. Confirme que paciente necessita de cuidados paliativos:
 
*Paciente fica na cama ou cadeira por mais da metade do dia ou depende de outros para maioria dos cuidados de rotina ou teve internações hospitalares não planejadas nos últimos 3 meses e/ou
*Paciente com doença avançada escolhe apenas cuidado paliativo e recusa cuidados curativos e/ou
*Paciente com doença avançada não respondendo ao tratamento: insuficiência cardíaca, DPOC, insuficiência renal ou hepática, câncer, HIV, TB, demência ou outra doença neurológica progressiva.
 
2.  	Avalie paciente que necessita de cuidados paliativos
 
2.1.  Sintomas:
*Se constipação, náusea/vômitos, cólicas abdominais, coceira generalizada, ansiedade ou tosse/falta de ar, maneje conforme item 5 abaixo.
*Se dificuldade para dormir, verificar texto “Difuculdade para dormir”.
*Maneje outros sintomas conforme a página do sintoma específico.
2.2.  Dor:
*Avalie a gravidade e o tipo da dor para ajudar o paciente a decidir qual analgésico será iniciado ou otimizado (ver item 4 abaixo).
*Peça ao paciente para apontar em escala de dor se sua dor é leve, moderada ou intensa (escala de 0 a 10).
*Peça para descrever a dor: espasmos musculares; dor óssea; choque/queimação, provável dor neuropática; se câimbras, cólica abdominal, provável dor somática.
2.3.  Saúde mental:
*Pergunte se tem sentimentos persistentes de desesperança ou inutilidade (Verificar texto “Depressão: diagnóstico”).
*Se pensamentos ou planos de suicídio, consulte a página (Verificar texto “Autoagressão ou suicídio”).
*Se tristeza, estresse ou ansiedade, verificar texto “Tristeza, estresse ou nervosismo”.
2.4.  Efeitos adversos:
*Maneje efeitos adversos como na página do sintoma. Náusea, confusão e sonolência em uso de morfina geralmente melhoram após os primeiros dias.
2.5.  Cuidador:
*Pergunte como o cuidador está lidando com a situação e quais suportes/ajudas precisa agora e no futuro.
2.6.  Cuidado crônico:
*Avalie quanto o paciente e família entendem sobre a condição e pergunte quais informações adicionais precisam.
*Avalie a necessidade contínua de cuidados crônicos, discuta com o paciente e equipe. Considere qual medicamento pode ser descontinuado.
2.7.  Terminalidade:
*Se o paciente está deteriorando e apresenta ≥ 2 de: restrito ao leito, consciência diminuída, capaz de ingerir somente líquidos ou incapaz de tomar comprimidos, avalie as necessidades do(a) paciente (Verificar texto “Atenda as necessidade de paciente em processo de morte”).
2.8.  Boca:
*Verifique higiene oral e investigue boca seca, úlceras ou candidíase oral (verificar texto “Sintomas da boca e garganta”).
*Se sintomas da gengiva ou dentes, consulte a página (verificar texto “Sintomas dos dentes/gengivas”).
*Se dificuldade para engolir, discuta.
2.9.  Lesão por pressão:
*Se o paciente está restrito ao leito ou em cadeira de rodas, verifique áreas comuns para lesão de pele (mudança de cor) e lesão por pressão. Se tem lesão por pressão, verificar texto “Úlcera de pele ou ferida que não cicatriza: cuidados de rotina”.
 
3.      Aconselhe paciente que necessita de cuidados paliativos e seu(sua) cuidador(a)
*Explique sobre a doença e o prognóstico. Explicar o que está acontecendo alivia o medo e a ansiedade. Apoie o paciente para dar o máximo de autocuidado possível.
*Encaminhe paciente e cuidador para grupos de suporte, equipe multiprofissional de apoio, conselheiro espiritual ou cuidado pastoral. Lide com o luto (verificar texto “Tristeza, estresse ou nervosismo”.
*Previna lesão por pressão: lavar e secar pele diariamente. Manter lençóis secos. Mover (elevar, não arrastar) paciente cada 1-2h. Procurar alterações na cor da pele.
*Previna contraturas se restrito ao leito: pelo menos duas vezes ao dia, dobre e estique gentilmente as articulações na máxima extensão. Não cause dor. Massageie os músculos.
*Previna lesões orais: escovar dentes e língua regularmente usando pasta de dente ou bicarbonato de sódio diluído. Enxague boca com 1⁄2 colher de chá de sal em 1 copo d’água após comer e à noite.
*Enfatize a importância de tomar o medicamento para dor regularmente (não conforme necessidade) e se estiver usando codeína/morfina, usar diariamente laxantes para evitar constipação.
*O apetite do paciente deve diminuir à medida que adoece. Ofereça pequenas refeições frequentemente e permita que escolha o que comer dentro do que estiver disponível.
*Eduque cuidador para reconhecer sinais de deterioração e morte eminente: pode ficar menos responsivo, tornar-se frio, sonolento, com respiração irregular e sem interesse em comer.
*Discuta com paciente e cuidador planos e preferências. Documente as escolhas.
 
4.      Tratamento de dor em paciente que necessita de cuidados paliativos
*Se dor, objetive paciente sem dor em repouso, capaz de dormir e apto a lidar com tarefas básicas diárias. Inicie medicamento para dor com base no tipo e gravidade da dor:
 
4.1. Dor não causada por câncer
*Se dor leve (1-3), comece pelo passo 1 (item 4.3.1.).
*Se dor moderada (4-6) ou intensa (7-10), comece pelo passo 2 (item 4.3.2.).
*Se dor neuropática, associe amitriptilina em qualquer passo.
*Se dúvidas, comece pelo passo 1 (item 4.3.1.) e ajuste dose e medicamento se necessário.
 
4.2. Dor causada por câncer
*Se dor leve (1-3), comece pelo passo 1 (item 4.3.1.).
*Se dor moderada (4-6) ou intensa (7-10), comece pelo passo 3 (item 4.3.3.).
*Considere adicionar amitriptilina em qualquer passo (item 4.3.4.).
*Se dúvidas, comece pelo passo 1 e ajuste dose e medicamento se necessário.
 
4.3. Uso de medicações para controle da dor:
4.3.1.      Passo 1: Comece com um dos três:
*Paracetamol
- Dose inicial: 500 mg cada 4-6 horas
- Dose máxima: 4g ao dia
- Observações: Se necessário, considere combinar paracetamol cada 4h e dipirona cada 4h, alternando cada um cada 2h.
*Dipirona
- Dose inicial: 500 mg cada 4-6 horas
- Dose máxima: 4g ao dia
- Observações: Não prescreva se alergia prévia.
*Ibuprofeno
- Dose inicial: 600 mg cada 4-6 horas
- Dose máxima: 2,4g ao dia
- Observações: Tomar com alimentação. Não prescreva se úlcera péptica, reação alérgica ou exacerbação de asma com uso, doença renal, gestação. Considere associar omeprazol 20mg em jejum se HAS, diabetes, insuficiência cardíaca, ≥ 65 anos, dispepsia, úlcera péptica prévia, uso de AAS, corticosteroides, varfarina, abuso de álcool.
4.3.2. Passo 2: Adicione ao passo 1:
*Codeína
- Dose inicial: 30 mg cada 4 horas
- Dose máxima: 240 mg ao dia
- Observações: Se não tiver diarreia, prescreva óleo mineral 15-45mL à noite para constipação.
4.3.3. Passo 3 (somente se dor causada por câncer): Pare codeína, mantenha paracetamol ou dipirona ou ibuprofeno e adicione:
*Morfina (oral ou retal, se incapaz de engolir)
- Dose inicial: 5-10 mg cada 4 horas (Se ≥ 65 anos: inicie com 2,5-5 mg)
- Dose máxima: Não há dose máxima para controle da dor.
- Observações: Se constipação, náusea/vômito ou coceira, maneje como indicado abaixo. Se não tiver diarreia, prescreva óleo mineral 15-45 ml à noite para constipação. Se dor não melhorar após 24h, aumente dose 1,5-2 vezes. Se não melhorar após 2 dias, discuta. Se crise de dor antes do horário estimado para próxima dose de morfina: dê dose extra de morfina e continue com as doses regulares nos horários definidos. Aumente dose para o próximo dia. Calcule nova dose: some quantidade de morfina extra ofertada nas últimas 24 horas, divida o resultado por 6 e adicione esse valor a cada dose regular prevista inicialmente.
4.3.4.      Adjuvante: Amitriptilina
*Dose inicial: 25 mg à noite
*Dose máxima: 75 mg à noite
*Observações: Usar à noite. Oriente que pode causar tonturas, sonolência e evitar dirigir e usar máquinas pesadas.
 
4.4.      Seguimento no controle da dor
*Se dor controlada, mantenha medicamento na mesma dose. Se controlada por 1 mês, considere reduzir dose/voltar um passo. Se dor piorar, ajuste dose/aumente um passo.
*Se dor persiste > 2 dias ou piora, aumente progressivamente até dose máxima. Se ainda não melhorar após 2 dias, prossiga para próximo passo.
*Se dor não causada por câncer persistir no passo 2, discuta. Se dor causada por câncer persistir no passo 3, discuta.
*Reavalie paciente 2 dias após iniciar ou mudar medicamento para dor. Se dor persistente/pior mesmo em dose máxima dos medicamentos ou efeitos adversos intoleráveis, discuta.
 
5.           Se efeito adverso de medicamento para dor ou outro sintoma, maneje:
5.1. Constipação
*Prescreva óleo mineral 15-45mL ao dia ou a cada 12 horas.
*Se impactação fecal (massa fecal imóvel e sólida no reto), remova gentilmente usando lubrificação. Depois faça enema com óleo mineral. Se sangramento, dor intensa ou não conseguir, pare e discuta.
 
5.2. Náusea/vômito
*Prescreva metoclopramida 10 mg cada 8 horas, se necessário.
*Permita paciente escolher o que quer comer. Ofereça pequenas quantidades de alimento com frequência.
*Estimule ingerir frequentemente pequenas quantidades de líquidos, como água, chás, sucos.
*Comidas ou bebidas com gengibre podem auxiliar nos sintomas. Evite gengibre em pó.
*Aconselhe cuidador evitar cozinhar perto do paciente.
 
5.3.      Cólicas abdominais
*Prescreva hioscina 10mg cada 6 horas por até 3 dias, se necessário.
 
5.4.      Coceira generalizado
*Prescreva, se disponível, hioscina 10mg cada 6 horas por ate 3 dias, se necessário.
 
5.5.      Ansiedade
*Prescreva diazepam 2,5-5mg à noite ou cada 12 horas, se necessário.
 
5.6.      Tosse ou falta de ar
*Se escarro espesso, faça inalação com vapor. Se expectora > 30 mL/dia, oriente respirações profundas, com drenagem postural. Discuta/ encaminhe para fisioterapia, se disponível.
*Se escarro não espesso e excessivo ou tosse seca persistente, discuta.
*Se falta de ar aos mínimos esforços, considere prescrever codeína 30 mg cada 4 horas.
*Se baixa SaO2, considere O2 domiciliar.
 


`
  },
  {
    titulo: 'Atenda as necessidade de paciente em processo de morte',
    pagina: 169,
    conteudo: `
        Atenda as necessidade de paciente em processo de morte

 
1.  	Paciente com uma doença incurável está morrendo se estiver se deteriorando e ≥ 2 de: restrito ao leito, consciência diminuída, capaz de ingerir somente líquidos ou incapaz de tomar comprimidos.
2.  	Avalie paciente em processo de morte.
2.1.  Sintomas:
*Avalie se tem falta de ar, agitação, dor, constipação, diarreia, náusea/vômito e cólicas abdominais. Verificar texto “Cuidados paliativos de rotina”.
2.2.  Cuidado atual:
*Avalie medicamentos em uso e pare qualquer medicamento não essencial.
*Discuta com o paciente/cuidador e equipe de saúde sobre a pertinência de realizar exames.
*Se o paciente não consegue engolir, considere trocar medicamentos via oral por via subcutânea.
2.3.  Ingesta alimentar:
*Verifique com o cuidador/família quais são as necessidades de ingestão de líquidos/alimentos do paciente e se os líquidos/alimentos são necessários.
2.4.  Bem estar psíquico:
*Pergunte para o paciente e cuidador como estão lidando e que apoio e/ou cuidado espiritual são necessários.
*Se o cuidador não conseguir lidar com a situação em casa, discuta a possibilidade de encaminhar o paciente para cuidado hospitalar.
2.5. Boca:
*Verifique a higiene bucal.
*Certifique-se de que a boca do paciente esteja úmida e limpa.
*Considere usar glicerina para manter os lábios/boca úmidos.
2.6. Higiene pessoal:
*Verifique cuidados com a pele, limpe os olhos e troque as roupas de acordo com a necessidade do(a) paciente.
 
3.  	Aconselhe paciente em processo de morte e cuidador
 
*Certifique-se de que paciente e cuidador estejam cientes de que paciente está morrendo. Considere encaminhar cuidador/familiar para assistente social.
*Informe cuidador/familiar que alimentos/líquidos são apenas para conforto, não prolongam a vida e uma necessidade reduzida de alimentos/líquidos faz parte do processo natural de morte.
*Informe que exames e tratamentos curativos como antibióticos não são indicados e serão reduzidos ao mínimo necessário de acordo com plano de cuidados do(a) paciente.
*Discuta com paciente e cuidador/familiar sobre local de morte preferido (casa ou hospital), como família deve ser informada sobre morte iminente e o que fazer em caso de morte.
*Discuta desejos, sentimentos, fé, crenças e valores do(a) paciente. Discuta necessidades do(a) paciente agora, na morte e depois. Escute e responda às preocupações/medos do(a) paciente e cuidador.
*Assegure-se de que paciente e cuidador/família recebam explicação completa e tenham compreensão do plano de cuidado atual. Identifique quaisquer preocupações sobre plano de cuidados atual.
 
 
4.  	Trate paciente em processo de morte
*Se respiração ruidosa, provável excesso de secreção: tente mudar paciente de posição. Considere hioscina 10mg cada 6 horas por ate 3 dias, se necessário.
*Se falta de ar, use ventilador ou deixe janela(s) aberta(s). Prescreva codeína 30 mg cada 4 horas. Aumente lentamente se necessário.
*Se retenção urinária, insira cateter uretral.
*Se dor, constipação, diarreia, náusea/vômito ou cólicas abdominais, maneje (Verificar texto “Cuidados paliativos de rotina”.
*Se agitação: primeiro avalie e controle dor, retenção urinaria, constipação e desidratação.
- Se nenhum dos acima, considere mudar paciente de posição e prescreva diazepam 5mg (ou 2,5mg se insuficiência hepática). Se não melhorar, repita dose.
 
5.  	Reavalie paciente em processo de morte
*Reavalie paciente cada 3 dias ou antes se cuidador/familiar estiver preocupado com plano de cuidados atual ou se nível de consciência, capacidade funcional, ingestão oral ou mobilidade melhorarem.
*Se dúvidas, discuta
 
6.  	Constate a morte
*Sem pulso carotídeo (pescoço) por 2 minutos e sem bulhas cardíacas por 2 minutos e sem sons respiratórios ou movimento do tórax por 2 minutos e as pupilas estão fixas, dilatadas e não respondem à luz.


`
  }
]
