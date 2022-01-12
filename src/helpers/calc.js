const addTotal = (expenses) => expenses.reduce(
  (acc, exp) => acc + Number(exp.value * Number(exp.exchangeRates[exp.currency].ask)),
  0,
);

export default addTotal;

// criação deste método graças ao mateus turola da turma 16 for(ever);
