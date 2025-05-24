import { DynamicStructuredTool } from '@langchain/core/tools'
import { z } from 'zod'

/**
 * Example placeholder async functions
 * ----------------------------------
 * In an actual implementation, these might call external APIs or databases
 * to fetch real medical information. For now, they return static strings.
 */
async function get_medicaments(
  nameOfMedicine: string,
  contextOfQuestion?: string
) {
  return `Here is the medicament information for ${nameOfMedicine} in the content ${contextOfQuestion}.`
}

async function get_Treatments(
  nameOfDisease: string,
  _nameOfTreatment?: string,
  contextOfQuestion?: string
) {
  return `Here is the treatment information for ${nameOfDisease} in the content ${contextOfQuestion}.`
}

async function get_DisorderInformation(
  nameOfDisorder: string,
  queries?: string[]
) {
  return `Here is the disease information for ${nameOfDisorder} in the content ${queries}.`
}

async function getDifferentialDiagnosis(hypothesis: any) {
  return `Here is the diagnostic evaluation and acute care information for ${JSON.stringify(
    hypothesis
  )}.`
}

async function get_diagnosticEvaluationAndAcuteCare(
  symptoms: string,
  severity: string,
  context_of_care: string
) {
  return `Here is the diagnostic evaluation and acute care information for ${symptoms} in the content ${severity} and ${context_of_care}.`
}

async function get_proceduresSurgeries(
  procedures_surgeries: string,
  query_goal: string,
  queries: string[]
) {
  return `Here is the procedures and surgeries information for ${procedures_surgeries} in the content ${queries} and ${query_goal}.`
}

async function get_signsAndSymptoms(
  signsAndsymptoms: string,
  contextOfQuestion: string
) {
  return `Here is the signs and symptoms information for ${signsAndsymptoms} in the content ${contextOfQuestion}.`
}

async function get_travelMedicalAdvice(travelDestination: string) {
  return `Here is the travel medical advice information for ${travelDestination}.`
}

async function get_vaccines(nameOfVaccine: string, query_goal: string) {
  return `Here is the vaccines information for ${nameOfVaccine} in the content ${query_goal}.`
}

async function get_medicationsInteractions(
  nameOfMedications: string,
  contextOfQuestion?: string
) {
  return `Here is the medications interactions information for ${nameOfMedications} in the content ${contextOfQuestion}.`
}

async function get_healthcareCodesAndClassifications(
  nameOfCodingandClassificationSystem: string,
  contextOfUse: string,
  item: string,
  _language: string,
  _query_goal: string | undefined | null
) {
  return `Here is the healthcare codes and classifications information for ${nameOfCodingandClassificationSystem} in the content ${contextOfUse} and ${item}.`
}

async function get_healthcareRegulationsAndPolicies(
  nameOfRegulation: string,
  objectOfMatter: string,
  regulatoryBody: string
) {
  return `Here is the healthcare regulations and policies information for ${nameOfRegulation} in the content ${objectOfMatter} and ${regulatoryBody}.`
}

async function get_protocolsAndGuidelines(
  diseaseName: string,
  contextOfUse: string,
  regulatoryBody: string
) {
  return `Here is the protocols and guidelines information for ${diseaseName} in the content ${contextOfUse} and ${regulatoryBody}.`
}

async function get_initialMedicalGuidance(userQuery: string) {
  return `Your query: "${userQuery}" is a bit general. Could you provide more details about the patient's condition, symptoms, or context? For example:
  - Duration and intensity of symptoms
  - Associated signs (fever, nausea, difficulty breathing)
  - Relevant medical history or current medications

Once we have more specific information, we can offer more targeted guidance or direct you to the appropriate specialized resource.`
}

/**
 * getMedicaments
 */
const medicaments = new DynamicStructuredTool({
  name: 'getMedicaments',
  description:
    'Provides detailed pharmacological information about a specified medication (dosage, side effects, interactions, contraindications). If a user context is provided, it focuses on that aspect; otherwise, it defaults to general medication details. You output should be in English language.',
  schema: z.object({
    nameOfMedicine: z.string().describe('Name of the medication (in English).'),
    query_goal: z
      .string()
      .describe(
        'in a short sentence describe the goal of the query in English language, so you can evaluate if the search results are relevant to the goal'
      ),
    queries: z
      .array(
        z
          .string()
          .describe(
            'Create 2 short, focused search queries in English language, addressing different aspects of the question. Each query should be concise (4-6 words) and searchable on Google. The first query should focus on the primary aspect (e.g., "rosuvastatin dosage 50-year-old"), while the second should address a complementary aspect (e.g., "rosuvastatin preventive use adults"). DO NOT create long, detailed queries as they won\'t return search results. Break down the question into simpler parts that together will provide enough context.'
          )
      )
      .length(2)
      .describe(
        'Two short, complementary search queries in English language that address different angles of the question.'
      )
  }),
  func: async ({ nameOfMedicine, query_goal }) => {
    const result = await get_medicaments(
      nameOfMedicine,
      query_goal ?? 'general information'
    )
    return result
  }
})

/**
 * getTreatments
 */
const treatments = new DynamicStructuredTool({
  name: 'getTreatments',
  description:
    'Provides standard or widely recognized therapies (e.g., medications, surgeries, and other interventions) for a given disease. Focuses on practical treatment details rather than formal guidelines from health authorities. If a user provides a context, it focuses on that aspect; otherwise, defaults to general treatment information.',
  schema: z.object({
    nameOfDisorder: z.string().describe('Disorder name.'),
    nameOfTreatment: z
      .string()
      .optional()
      .nullable()
      .describe('Specific treatment name (if provided).'),
    query_goal: z
      .string()
      .describe(
        'in a short sentence describe the goal of the query in English language, so you can evaluate if the search results are relevant to the goal'
      ),
    queries: z
      .array(
        z
          .string()
          .describe(
            'Create 2 short, focused search queries in English language, addressing different aspects of the question. Each query should be concise (4-6 words) and searchable on Google. The first query should focus on the primary aspect (e.g., "rosuvastatin dosage 50-year-old"), while the second should address a complementary aspect (e.g., "rosuvastatin preventive use adults"). DO NOT create long, detailed queries as they won\'t return search results. Break down the question into simpler parts that together will provide enough context.'
          )
      )
      .length(2)
      .describe(
        'Two short, complementary search queries in English language that address different angles of the question.'
      )
  }),
  func: async ({ nameOfDisorder, nameOfTreatment, query_goal }) => {
    const result = await get_Treatments(
      nameOfDisorder,
      nameOfTreatment ?? '',
      query_goal ?? 'general treatment information'
    )
    return result
  }
})

/**
 * getMedicationsInteractions
 */
const interactions = new DynamicStructuredTool({
  name: 'getMedicationsInteractions',
  description:
    'Identifies possible interactions between medications. If context is provided, it focuses on that aspect; otherwise defaults to general interactions.',
  schema: z.object({
    nameOfMedications: z.string().describe('Names of medications.'),
    query_goal: z
      .string()
      .describe(
        'in a short sentence describe the goal of the query in English language, so you can evaluate if the search results are relevant to the goal'
      ),
    queries: z
      .array(
        z
          .string()
          .describe(
            'Create 2 short, focused search queries in English language, addressing different aspects of the question. Each query should be concise (4-6 words) and searchable on Google. The first query should focus on the primary aspect (e.g., "rosuvastatin dosage 50-year-old"), while the second should address a complementary aspect (e.g., "rosuvastatin preventive use adults"). DO NOT create long, detailed queries as they won\'t return search results. Break down the question into simpler parts that together will provide enough context.'
          )
      )
      .length(2)
      .describe(
        'Two short, complementary search queries in English language that address different angles of the question.'
      )
  }),
  func: async ({ nameOfMedications, query_goal }) => {
    const result = await get_medicationsInteractions(
      nameOfMedications,
      query_goal ?? 'general interactions'
    )
    return result
  }
})

/**
 * Disorder Information Tool
 * Provides a comprehensive overview of a specified disorder including its definition,
 * key symptoms, diagnostic criteria, and broad management guidelines.
 *
 * When to Use:
 * - When the inquiry asks for general information about a disease or disorder.
 * - When the inquiry includes the disease name and requests its clinical features
 *   (e.g., “What are the symptoms of Linfangioleiomiomatose (LAM)?”).
 * - Use this tool to retrieve core details about the disorder.
 */
const disorderInformation = new DynamicStructuredTool({
  name: 'getDisorderInformation',
  description: `
  Provides a comprehensive overview of a specified disorder, including its definition, key symptoms, diagnostic criteria, and broad management guidelines.
  Use this tool when the inquiry focuses on general disease information or when the disease name is provided and the question asks about its clinical features.
    `,
  schema: z.object({
    nameOfDisorder: z.string().describe('Disorder name.'),
    query_goal: z
      .string()
      .describe(
        'In a short sentence, describe the goal of the query in English so you can evaluate if the search results are relevant.'
      ),
    queries: z
      .array(
        z
          .string()
          .describe(
            'Create 2 short, neutral search queries in English that explore the basic clinical features of the condition without assuming any advanced associations. Each query should be concise (4–6 words) and include the full disorder name (e.g., "Lymphangioleiomyomatosis") along with clarifying terms like "disease" to avoid ambiguity.'
          )
      )
      .length(2)
      .describe(
        'Two short, neutral search queries addressing different basic aspects of the question, using the full disorder name to ensure clarity.'
      )
  }),
  func: async ({ nameOfDisorder, queries }) => {
    const result = await get_DisorderInformation(nameOfDisorder, queries)
    return result
  }
})

/**
 * Clinical Case Structuring Tool
 * Converts an unstructured or raw clinical case description into a standardized, strongly-typed ClinicalCase object.
 *
 * When to Use:
 * - When the inquiry involves patient information such as demographics, history, symptoms, physical findings, or diagnostic test results.
 * - When organizing detailed clinical data before further analysis (e.g., for generating a differential diagnosis).
 */
const patientIdentificationSchema = z.object({
  age: z.number().nullable().optional().describe("Patient's age in years"),
  sex: z
    .string()
    .nullable()
    .optional()
    .describe("Patient's sex or gender designation")
})

const clinicalCaseSchema = z.object({
  patientIdentification: patientIdentificationSchema.describe(
    "Patient's identifying information"
  ),
  chiefComplaint: z
    .string()
    .nullable()
    .optional()
    .describe('Primary reason for seeking medical care'),
  historyOfPresentIllness: z
    .string()
    .nullable()
    .optional()
    .describe('Detailed description of the current illness'),
  pastMedicalHistory: z
    .string()
    .nullable()
    .optional()
    .describe('List of past and ongoing medical issues'),
  pastSurgicalHistory: z
    .string()
    .nullable()
    .optional()
    .describe('List of past surgeries or procedures'),
  medications: z
    .string()
    .nullable()
    .optional()
    .describe(
      'Current medications, including prescription and over-the-counter'
    ),
  allergies: z
    .string()
    .nullable()
    .optional()
    .describe('Known allergies and associated reactions'),
  familyHistory: z
    .string()
    .nullable()
    .optional()
    .describe('Relevant diseases or conditions among family members'),
  socialHistory: z
    .string()
    .nullable()
    .optional()
    .describe('Lifestyle factors and social circumstances'),
  reviewOfSystems: z
    .string()
    .nullable()
    .optional()
    .describe('System-by-system review for symptoms'),
  vitalSigns: z
    .string()
    .nullable()
    .optional()
    .describe('Recorded vital signs (BP, HR, RR, Temp, etc.)'),
  physicalExamination: z
    .string()
    .nullable()
    .optional()
    .describe('Findings from the physical exam by system'),
  diagnosticStudies: z
    .string()
    .nullable()
    .optional()
    .describe('Results of labs, imaging, or other diagnostic tests'),
  assessment: z
    .string()
    .nullable()
    .optional()
    .describe('Working diagnosis or differential diagnosis'),
  plan: z
    .string()
    .nullable()
    .optional()
    .describe('Proposed treatments, follow-up, and patient instructions')
})

export type ClinicalCase = z.infer<typeof clinicalCaseSchema>

const clinicalCase = new DynamicStructuredTool({
  name: 'gatherClinicalCase',
  description: `
  Converts an unstructured or raw clinical case vignette into a standardized, strongly-typed ClinicalCase object.
  When an inquiry presents a complete patient scenario (e.g., demographics, history, exam findings, lab results) along with a question asking for the likely diagnosis, first use this tool to structure all available clinical information.
    `,
  schema: clinicalCaseSchema,
  func: async (clinicalCaseData) => {
    console.log(clinicalCaseData)
  }
})

/**
 * Differential Diagnosis Tool
 * Refines and narrows down multiple potential diagnoses using a structured clinical case and up to three diagnostic hypotheses.
 *
 * When to Use:
 * - When the inquiry involves comparing several possible conditions based on clinical signs, symptoms, and patient history.
 * - When transitioning from a general symptom inquiry to a targeted differential diagnosis.
 */
const differentialDiagnosis = new DynamicStructuredTool({
  name: 'getDifferentialDiagnosis',
  description: `
  Refines and narrows down multiple potential diagnoses using a structured clinical case and up to three diagnostic hypotheses.
  Even if the clinical case appears to strongly suggest a single diagnosis (e.g., acute interstitial nephritis), this tool is intended to generate a set of up to three hypotheses. This approach encourages comprehensive clinical reasoning and prompts physicians to consider alternative or concurrent diagnoses rather than settling on a final answer immediately.
  Use this tool when a comprehensive clinical case is provided along with an explicit question about the likely diagnosis.
    `,
  schema: z.object({
    hypothesis: z
      .string()
      .describe(
        'Provide up to 3 diagnostic hypotheses to consider. Even if one diagnosis seems most likely, include alternative possibilities to encourage broader clinical reasoning.'
      ),
    query_goal: z
      .string()
      .describe(
        'In a short sentence, describe the goal of the query in English. For example, "Determine a differential diagnosis based on the provided clinical case."'
      ),
    queries: z
      .array(
        z
          .string()
          .describe(
            'Create 3 short, neutral search queries in English that explore the basic clinical features of the case without assuming advanced associations. Each query should be concise (4–6 words) and designed to support a broad, unbiased search for relevant diagnostic information.'
          )
      )
      .length(3)
      .describe(
        'Three short, neutral search queries addressing different basic aspects of the clinical case.'
      )
  }),
  func: async ({ hypothesis }) => {
    const result = await getDifferentialDiagnosis(hypothesis)
    return result
  }
})

/**
 * Acute Diagnostic Evaluation and Acute Care Tool
 * Evaluates and manages non-life-threatening, acute symptoms.
 *
 * When to Use:
 * - When the inquiry describes recent or sudden-onset symptoms that require evaluation but are not immediately life-threatening.
 * - When additional context such as care setting (e.g., "urgent care") and severity is provided.
 */
const diagnostic_Evaluation_and_Acute_Care = new DynamicStructuredTool({
  name: 'getDiagnostic_Evaluation_and_Acute_Care',
  description: `
  Focuses on evaluating and managing non-life-threatening acute symptoms.
  Use this tool when the inquiry involves acute symptom evaluation with context on severity and care setting.
    `,
  schema: z.object({
    symptoms: z.string().describe('Description of acute symptoms.'),
    severity: z.string().describe('Severity of the condition.'),
    context_of_care: z.string().describe('Care setting, e.g., "urgent care".'),
    query_goal: z
      .string()
      .describe(
        'In a short sentence, describe the goal of the query in English.'
      ),
    queries: z
      .array(
        z
          .string()
          .describe(
            'Create 2 short, focused search queries addressing different aspects of the question. Each query should be concise (4-6 words) and Google-searchable.'
          )
      )
      .length(2)
      .describe(
        'Two short, complementary search queries addressing different angles of the question.'
      )
  }),
  func: async ({ symptoms, severity, context_of_care }) => {
    const result = await get_diagnosticEvaluationAndAcuteCare(
      symptoms,
      severity,
      context_of_care
    )
    return result
  }
})

/**
 * Procedures and Surgeries Tool
 * Provides detailed technical information on a specified procedure or surgery.
 *
 * When to Use:
 * - When the inquiry asks about the technical aspects, indications, or detailed steps of a particular procedure or surgery.
 * - When the focus is on procedure-specific information rather than on patient symptoms or overall disease profiles.
 */
const procedures_Surgeries = new DynamicStructuredTool({
  name: 'getProcedures_Surgeries',
  description: `
  Provides detailed technical information on a specified procedure or surgery.
  Use this tool when the inquiry focuses on the technical aspects or procedural details rather than on patient-specific symptoms.
    `,
  schema: z.object({
    procedures_surgeries: z.string().describe('Procedure or surgery name.'),
    query_goal: z
      .string()
      .describe(
        'In a short sentence, describe the goal of the query in English.'
      ),
    queries: z
      .array(
        z
          .string()
          .describe(
            'Create 2 short, focused search queries addressing different aspects of the question. Each query should be concise (4-6 words) and Google-searchable.'
          )
      )
      .length(2)
      .describe(
        'Two short, complementary search queries addressing different angles of the question.'
      )
  }),
  func: async ({ procedures_surgeries, query_goal, queries }) => {
    const result = await get_proceduresSurgeries(
      procedures_surgeries,
      query_goal ?? 'general procedure information',
      queries
    )
    return result
  }
})

/**
 * Signs and Symptoms Tool
 * Provides detailed technical information on clinical signs and symptoms.
 *
 * When to Use:
 * - When the inquiry describes a set of signs or symptoms that can be observed, measured, or reported and that may be used to lead to a diagnosis.
 * - For example, use this tool if the question details specific clinical findings (e.g., “I experience shortness of breath and a persistent cough—what might this indicate?”).
 * - Note: If the inquiry includes the disease name and asks for its symptoms (e.g., “What are the symptoms of LAM disease?”),
 *   then the Disorder Information tool should be used instead.
 */
const signsAndSymptoms = new DynamicStructuredTool({
  name: 'getSignsAndSymptoms',
  description: `
  Provides detailed technical information on clinical signs and symptoms.
  Use this tool when the inquiry focuses on describing or evaluating specific clinical signs or patient-reported symptoms that could lead to a diagnosis.
  Note: If the inquiry names a disease (e.g., LAM) and asks about its symptoms, use the Disorder Information tool instead.
    `,
  schema: z.object({
    signsAndsymptoms: z
      .string()
      .describe('Description of signs and/or symptoms.'),
    query_goal: z
      .string()
      .describe(
        'In a short sentence, describe the goal of the query in English.'
      ),
    queries: z
      .array(
        z
          .string()
          .describe(
            'Create 2 short, focused search queries addressing different aspects of the question. Each query should be concise (4-6 words) and Google-searchable.'
          )
      )
      .length(2)
      .describe(
        'Two short, complementary search queries addressing different angles of the question.'
      )
  }),
  func: async ({ signsAndsymptoms, query_goal }) => {
    const result = await get_signsAndSymptoms(
      signsAndsymptoms,
      query_goal ?? 'general symptom information'
    )
    return result
  }
})

/**
 * getTravelMedicalAdvice
 */
const travelMedicalAdvice = new DynamicStructuredTool({
  name: 'getTravelMedicalAdvice',
  description:
    'Provides preventive healthcare advice for travelers based on destination. No context field, just the location.',
  schema: z.object({
    travelDestination: z.string().describe('Travel destination.'),
    query_goal: z
      .string()
      .describe(
        'in a short sentence describe the goal of the query in English language, so you can evaluate if the search results are relevant to the goal'
      ),
    queries: z
      .array(
        z
          .string()
          .describe(
            'Create 2 short, focused search queries in English language, addressing different aspects of the question. Each query should be concise (4-6 words) and searchable on Google. The first query should focus on the primary aspect (e.g., "rosuvastatin dosage 50-year-old"), while the second should address a complementary aspect (e.g., "rosuvastatin preventive use adults"). DO NOT create long, detailed queries as they won\'t return search results. Break down the question into simpler parts that together will provide enough context.'
          )
      )
      .length(2)
      .describe(
        'Two short, complementary search queries in English language that address different angles of the question.'
      )
  }),
  func: async ({ travelDestination }) => {
    const result = await get_travelMedicalAdvice(travelDestination)
    return result
  }
})

/**
 * getVaccines
 */
const vaccines = new DynamicStructuredTool({
  name: 'getVaccines',
  description:
    'Supplies information on a specific vaccine (indications, schedules, side effects). If a context is provided, focuses on that aspect; otherwise defaults to general vaccine info.',
  schema: z.object({
    nameOfVaccine: z.string().describe('Name of the vaccine.'),
    query_goal: z
      .string()
      .describe(
        'in a short sentence describe the goal of the query in English language, so you can evaluate if the search results are relevant to the goal'
      ),
    queries: z
      .array(
        z
          .string()
          .describe(
            'Create 2 short, focused search queries in English language, addressing different aspects of the question. Each query should be concise (4-6 words) and searchable on Google. The first query should focus on the primary aspect (e.g., "rosuvastatin dosage 50-year-old"), while the second should address a complementary aspect (e.g., "rosuvastatin preventive use adults"). DO NOT create long, detailed queries as they won\'t return search results. Break down the question into simpler parts that together will provide enough context.'
          )
      )
      .length(2)
      .describe(
        'Two short, complementary search queries in English language that address different angles of the question.'
      )
  }),
  func: async ({ nameOfVaccine, query_goal }) => {
    const result = await get_vaccines(
      nameOfVaccine,
      query_goal ?? 'general vaccine information'
    )
    return result
  }
})

/**
 * get_Healthcare_Codes_and_Classifications
 */
const healthcareCodes = new DynamicStructuredTool({
  name: 'get_Healthcare_Codes_and_Classifications',
  description:
    'Addresses queries about healthcare coding systems (ICD-10, TUSS, etc.). If the user provides a context, it focuses on that; otherwise defaults to general coding info.',
  schema: z.object({
    nameOfCodingandClassificationSystem: z
      .string()
      .describe('Name of the coding/classification system,.'),
    contextOfUse: z
      .string()
      .optional()
      .nullable()
      .describe('An optional coding-related aspect.'),
    item: z.string().describe('Item to code or classify.'),
    language: z.string().describe('Language of the query.'),
    query_goal: z
      .string()
      .describe(
        'in a short sentence describe the goal of the query in English language, so you can evaluate if the search results are relevant to the goal'
      ),
    queries: z
      .array(
        z
          .string()
          .describe(
            'Create 2 short, focused search queries in English language, addressing different aspects of the question. Each query should be concise (4-6 words) and searchable on Google. The first query should focus on the primary aspect (e.g., "rosuvastatin dosage 50-year-old"), while the second should address a complementary aspect (e.g., "rosuvastatin preventive use adults"). DO NOT create long, detailed queries as they won\'t return search results. Break down the question into simpler parts that together will provide enough context.'
          )
      )
      .length(2)
      .describe(
        'Two short, complementary search queries in English language that address different angles of the question.'
      )
  }),
  func: async ({
    nameOfCodingandClassificationSystem,
    contextOfUse,
    item,
    language,
    query_goal
  }) => {
    const result = await get_healthcareCodesAndClassifications(
      nameOfCodingandClassificationSystem,
      contextOfUse ?? 'general coding information',
      item,
      language,
      query_goal
    )
    return result
  }
})

/**
 * get_Healthcare_Regulations_and_Policies
 * 
 * Handles legal, regulatory, or policy-level inquiries such as approval processes,
 * compliance requirements, or retrieving the content of specific regulatory documents.
 * When a user provides context, this tool focuses on that aspect; otherwise, it defaults
 * to a general regulatory context.
 */
const healthcareRegulations = new DynamicStructuredTool({
    name: 'get_Healthcare_Regulations_and_Policies',
    description:
      'Handles legal, regulatory, or policy-level inquiries. Use this tool when the question involves specific regulations, policies, or compliance issues. If user context is provided, the tool will focus on that aspect; otherwise, it defaults to a general regulatory overview.',
    schema: z.object({
      nameOfRegulation: z
        .string()
        .describe('The full name or identifier of the regulation or policy (e.g., "DUT n 71", "RN 465/2021").'),
      objectOfMatter: z
        .string()
        .optional()
        .nullable()
        .describe('The subject matter related to the regulation, such as a disease, treatment, or administrative process.'),
      regulatoryBody: z
        .string()
        .describe('The governing regulatory authority (e.g., ANS, FDA, ANVISA).'),
      contextOfUse: z
        .string()
        .optional()
        .nullable()
        .describe('An optional detail indicating the specific regulatory aspect, for example, "approval process" or "compliance requirements".'),
      language: z
        .string()
        .describe('The language of the query (e.g., "Portuguese", "English").'),
      query_goal: z
        .string()
        .describe('In a short sentence in English, describe the goal of the query so that the search results are relevant.'),
      queries: z
        .array(
          z.string().describe(
            'Create 2 short, neutral search queries in English that explore the basic aspects of the regulation. Each query should be concise (4–6 words) and include disambiguating terms, such as the full regulation name and "regulation" or "policy", to avoid ambiguity.'
          )
        )
        .length(2)
        .describe(
          'Two short, complementary search queries addressing different basic angles of the regulatory question.'
        )
    }),
  func: async ({
    nameOfRegulation,
    objectOfMatter,
    regulatoryBody,
    _contextOfUse,
    _language,
    _query_goal
  }) => {
    const result = await get_healthcareRegulationsAndPolicies(
      nameOfRegulation,
      objectOfMatter ?? '',
      regulatoryBody
    )
    return result
  }
})

/**
 * get_Protocols_and_Guidelines
 */
const protocols_guidelines = new DynamicStructuredTool({
  name: 'get_Protocols_and_Guidelines',
  description: `Focuses on official or widely recognized clinical protocols and guidelines from health authorities (WHO, CDC, etc.). 
     Use this when the user specifically references "protocols," "official guidelines," or guidelines from recognized bodies. 
     If context is given, it focuses on that; otherwise, defaults to general guideline information.`,
  schema: z.object({
    diseaseName: z.string().describe('Disease name.'),
    contextOfUse: z
      .string()
      .optional()
      .nullable()
      .describe('A guideline-related aspect (e.g., "WHO guidance").'),
    regulatoryBody: z
      .string()
      .optional()
      .nullable()
      .describe('Authority or body issuing the guideline, e.g. WHO, CDC.'),
    language: z
      .string()
      .optional()
      .nullable()
      .describe('Language of the query.'),
    query_goal: z
      .string()
      .describe(
        'in a short sentence describe the goal of the query in English language, so you can evaluate if the search results are relevant to the goal'
      ),
    queries: z
      .array(
        z
          .string()
          .describe(
            'Create 2 short, focused search queries in English language, addressing different aspects of the question. Each query should be concise (4-6 words) and searchable on Google. The first query should focus on the primary aspect (e.g., "rosuvastatin dosage 50-year-old"), while the second should address a complementary aspect (e.g., "rosuvastatin preventive use adults"). DO NOT create long, detailed queries as they won\'t return search results. Break down the question into simpler parts that together will provide enough context.'
          )
      )
      .length(2)
      .describe(
        'Two short, complementary search queries in English language that address different angles of the question.'
      )
  }),
  func: async ({
    diseaseName,
    contextOfUse,
    regulatoryBody,
    _language,
    _query_goal
  }) => {
    const result = await get_protocolsAndGuidelines(
      diseaseName,
      contextOfUse ?? 'general guideline information',
      regulatoryBody ?? ''
    )
    return result
  }
})

/**
 * getInitialMedicalGuidance
 */
const initialMedicalGuidance = new DynamicStructuredTool({
  name: 'getInitialMedicalGuidance',
  description:
    'Use this tool if the user query is too vague, incomplete, or ambiguous, prompting them to provide more details about symptoms, duration, medical history, etc.',
  schema: z.object({
    query_goal: z
      .string()
      .describe(
        'in a short sentence describe the goal of the query in English language, so you can evaluate if the search results are relevant to the goal'
      ),
    queries: z
      .array(
        z
          .string()
          .describe(
            'Create 2 short, focused search queries in English language, addressing different aspects of the question. Each query should be concise (4-6 words) and searchable on Google. The first query should focus on the primary aspect (e.g., "rosuvastatin dosage 50-year-old"), while the second should address a complementary aspect (e.g., "rosuvastatin preventive use adults"). DO NOT create long, detailed queries as they won\'t return search results. Break down the question into simpler parts that together will provide enough context.'
          )
      )
      .length(2)
      .describe(
        'Two short, complementary search queries in English language that address different angles of the question.'
      )
  }),
  func: async ({ queries }) => {
    const result = JSON.stringify(queries)
    return result
  }
})

/**
 * getGeneralMedicalQueries
 */
const generalMedicalQueries = new DynamicStructuredTool({
  name: 'getGeneralMedicalQueries',
  description: `Use this tool for a medical question that does not fit into any other specific category 
     (medicaments, treatments, diseaseInformation, etc.), or if you cannot determine the best category. 
     Examples: a very broad question, a closed question not clearly linked to a single tool, 
     or something that doesn't match existing specialized tools.`,
  schema: z.object({
    query_goal: z
      .string()
      .describe(
        'in a short sentence describe the goal of the query in English language, so you can evaluate if the search results are relevant to the goal'
      ),
    queries: z
      .array(
        z
          .string()
          .describe(
            'Create 2 short, focused search queries in English language, addressing different aspects of the question. Each query should be concise (4-6 words) and searchable on Google. The first query should focus on the primary aspect (e.g., "rosuvastatin dosage 50-year-old"), while the second should address a complementary aspect (e.g., "rosuvastatin preventive use adults"). DO NOT create long, detailed queries as they won\'t return search results. Break down the question into simpler parts that together will provide enough context.'
          )
      )
      .length(2)
      .describe(
        'Two short, complementary search queries in English language that address different angles of the question.'
      )
  }),
  func: async ({ query_goal }) => {
    // Reusing initialMedicalGuidance response
    const result = await get_initialMedicalGuidance(query_goal)
    return result
  }
})

async function get_secondOpinion(
  clinicalSituation: string,
  medicalProcedure: string,
  initialOpinion: string,
  language: string
) {
  return `Here is an objective second opinion for the described case considering clinical situation: "${clinicalSituation}", medical procedure: "${medicalProcedure}", and initial opinion: "${initialOpinion}" in ${language}.`
}

/**
 * Second Opinion Tool
 * Provides an objective analysis of a medical opinion regarding a proposed procedure for a specific clinical situation.
 *
 * When to Use:
 * - When evaluating the appropriateness of a proposed medical procedure for a specific clinical condition
 * - When seeking verification of medical necessity for insurance purposes
 * - When comparing different medical opinions or treatment approaches
 */
const secondOpinion = new DynamicStructuredTool({
  name: 'getSecondOpinion',
  description: `
  Provides an objective, evidence-based analysis of a medical opinion regarding a proposed procedure for a specific clinical situation. 
  This tool evaluates whether the proposed procedure is technically justified, explores alternatives if applicable, and considers regulatory/insurance aspects.
  Use this tool when seeking verification of medical necessity, evaluating appropriateness of procedures, or comparing different treatment approaches.
  `,
  schema: z.object({
    clinicalSituation: z.string().describe('Description of the patient\'s clinical situation, including relevant history, diagnosis, and clinical findings.'),
    medicalProcedure: z.string().describe('The actual medical procedure(s) being proposed in plain language. Extract the procedure name (e.g., "cirurgia de Mohs", "excisão com retalho cutâneo") rather than focusing on codes or administrative details.'),
    initialOpinion: z.string().describe('The initial medical opinion that requires objective analysis or a second review.'),
    language: z.string().describe('The language for the response (e.g., "Portuguese", "English").'),
    query_goal: z
      .string()
      .describe(
        'In a short sentence, describe the goal of the query in English so you can evaluate if the search results are relevant.'
      ),
    queries: z
      .array(
        z
          .string()
          .describe(
            'Create 3 short, neutral search queries in English that explore key aspects of the procedure\'s appropriateness for the clinical situation. Each query should be concise (4–6 words) and constructed to retrieve evidence-based information.'
          )
      )
      .length(3)
      .describe(
        'Three short, neutral search queries addressing different aspects of the procedure\'s appropriateness.'
      )
  }),
  func: async ({ clinicalSituation, medicalProcedure, initialOpinion, language }) => {
    const result = await get_secondOpinion(
      clinicalSituation,
      medicalProcedure,
      initialOpinion,
      language
    )
    return result
  }
})

async function get_DUTSearchTerms(listTerms: string[]) {
  // Esta função seria implementada com NLP ou outro método de processamento mais sofisticado
  // Por enquanto, retorna um exemplo simulado similar ao esperado
  console.log('Processando texto clínico para extração de termos para DUT:', listTerms);
  // Em produção, aqui entraria a lógica de extração de entidades médicas
  return {
    procedimentos: [
      'Carcinoma basocelular (nodular e esclerodermiforme)',
      'Cirurgia de Mohs',
      'Exérese e sutura',
      'Rotação de retalhos'
    ]
  };
}

/**
 * DUT Search Terms Tool
 * Extrai procedimentos médicos e condições de saúde de um texto clínico para pesquisa nas DUTs da ANS.
 *
 * When to Use:
 * - Quando precisar identificar procedimentos e diagnósticos em um texto clínico para verificar cobertura nas DUTs
 * - Quando precisar preparar uma lista estruturada de termos para consultar regulamentações da ANS
 * - Quando for analisar a elegibilidade de procedimentos conforme diretrizes oficiais
 */
const dutSearchTerms = new DynamicStructuredTool({
  name: 'getDUTSearchTerms',
  description: `
  Analisa um texto clínico e extrai procedimentos médicos e condições de saúde mencionados para pesquisa nas 
  Diretrizes de Utilização (DUTs) da ANS. O resultado é uma lista estruturada em formato JSON com os termos
  que devem ser verificados quanto à cobertura e indicações nas regulamentações da ANS.
  Use esta ferramenta quando precisar identificar procedimentos e diagnósticos relevantes em um caso clínico 
  para verificação de cobertura por planos de saúde segundo as normativas da ANS.
  `,
  schema: z.object({
    listTerms:  z
    .array(
      z
        .string()
        .describe(
          'name of term to be queried in ANS DUT'
        )
    )
    .describe(
      'List of terms to be queried in ANS DUT'
    )
  }),
  func: async ({ listTerms }) => {
    const result = await get_DUTSearchTerms(listTerms);
    return JSON.stringify(result);
  }
});

/**
 * Export Tools
 * Note: Some tools like 'diagnostic_Evaluation_and_Acute_Care',
 * 'healthcareRegulations', and 'protocols_guidelines' might be commented out
 * in the final array if not in active use.
 */
export const tools = [
  medicaments,
  treatments,
  disorderInformation,
  differentialDiagnosis,
  diagnostic_Evaluation_and_Acute_Care, // Uncomment if needed
  procedures_Surgeries,
  signsAndSymptoms,
  travelMedicalAdvice,
  vaccines,
  interactions,
  healthcareCodes,
  healthcareRegulations, // Uncomment if needed
  protocols_guidelines, // Uncomment if needed
  initialMedicalGuidance,
  generalMedicalQueries,
  secondOpinion,
  dutSearchTerms
]

export const toolsByName = {
  getMedicaments: medicaments,
  getMedicationsInteractions: interactions,
  getTreatments: treatments,
  getDisorderInformation: disorderInformation,
  getDiagnostic_Evaluation_and_Acute_Care: diagnostic_Evaluation_and_Acute_Care,
  getProcedures_Surgeries: procedures_Surgeries,
  getSignsAndSymptoms: signsAndSymptoms,
  getTravelMedicalAdvice: travelMedicalAdvice,
  getVaccines: vaccines,
  getDifferentialDiagnosis: differentialDiagnosis,
  get_Healthcare_Codes_and_Classifications: healthcareCodes,
  get_Healthcare_Regulations_and_Policies: healthcareRegulations,
  get_Protocols_and_Guidelines: protocols_guidelines,
  getInitialMedicalGuidance: initialMedicalGuidance,
  getGeneralMedicalQueries: generalMedicalQueries,
  getSecondOpinion: secondOpinion,
  getDUTSearchTerms: dutSearchTerms
}
