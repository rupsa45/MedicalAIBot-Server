const isMedicalRelated = (question) => {
  const keywords = [
    "fever", "headache", "cold", "cough", "pain", "infection",
    "medicine", "symptom", "treatment", "allergy", "health", "doctor",
    "nausea", "vomit", "diarrhea", "disease", "flu", "injury", "wound" ,
    "throat", "sore throat", "chronic", "acute", "diagnosis", "prescription",
    "vaccine", "immunization", "healthcare", "clinic", "hospital", "patient",
    "medical", "therapy", "surgery", "checkup", "examination", "consultation",
    "wellness", "nutrition", "exercise", "mental health", "psychology",
    "psychological", "depression", "anxiety", "stress", "medication",
    "treatment plan", "rehabilitation", "physiotherapy", "health condition",
    "chronic disease", "acute condition", "health issue", "medical advice",
    "health problem", "medical condition", "health concern", "health risk",
    "health assessment", "health evaluation", "health screening",
    "health check", "health monitoring", "health management", "health care",
    "health service", "health system", "health policy", "health education",
  ];
  const lowerQ = question.toLowerCase();
  return keywords.some((kw) => lowerQ.includes(kw));
};

module.exports = isMedicalRelated;
