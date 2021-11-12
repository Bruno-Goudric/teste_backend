module.exports = function FormatPhone(data) {
    let numberFormat = data.match(/(\d{2})(\d{2})(\d{5})(\d{4})/)
    numberFormat = + numberFormat[1] + numberFormat[2] + numberFormat[3].substr(1) + numberFormat[4]
  
    return numberFormat;
  }