const isMedicalRelated = (question) => {
  const keywords = [
    "fever", "headache", "cold", "cough", "pain", "infection",
    "medicine", "symptom", "treatment", "allergy", "health", "doctor",
    "nausea", "vomit", "diarrhea", "disease", "flu", "injury", "wound"
  ];
  const lowerQ = question.toLowerCase();
  return keywords.some((kw) => lowerQ.includes(kw));
};

module.exports = isMedicalRelated;
