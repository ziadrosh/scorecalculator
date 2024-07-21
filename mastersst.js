function calculateAggregate() {
    const sscObtained = parseFloat(document.getElementById('ssc-obtained').value) || 0;
    const sscTotal = parseFloat(document.getElementById('ssc-total').value) || 0;
    const hsscObtained = parseFloat(document.getElementById('hssc-obtained').value) || 0;
    const hsscTotal = parseFloat(document.getElementById('hssc-total').value) || 0;
    const baObtained = parseFloat(document.getElementById('ba-obtained').value) || 0;
    const baTotal = parseFloat(document.getElementById('ba-total').value) || 0;
    const maObtained = parseFloat(document.getElementById('ma-obtained').value) || 0;
    const maTotal = parseFloat(document.getElementById('ma-total').value) || 0;
    const bedObtained = parseFloat(document.getElementById('bed-obtained').value) || 0;
    const bedTotal = parseFloat(document.getElementById('bed-total').value) || 0;
    const medObtained = parseFloat(document.getElementById('med-obtained').value) || 0;
    const medTotal = parseFloat(document.getElementById('med-total').value) || 0;
    const mphilObtained = parseFloat(document.getElementById('mphil-obtained').value) || 0;
    const mphilTotal = parseFloat(document.getElementById('mphil-total').value) || 0;
    const phdObtained = parseFloat(document.getElementById('phd-obtained').value) || 0;
    const phdTotal = parseFloat(document.getElementById('phd-total').value) || 0;

    const sscAggregate = sscTotal ? (sscObtained * 15) / sscTotal : 0;
    const hsscAggregate = hsscTotal ? (hsscObtained * 20) / hsscTotal : 0;
    const baAggregate = baTotal ? (baObtained * 20) / baTotal : 0;
    const maAggregate = maTotal ? (maObtained * 15) / maTotal : 0;
    const bedAggregate = bedTotal ? (bedObtained * 15) / bedTotal : 0;
    const medAggregate = medTotal ? (medObtained * 5) / medTotal : 0;
    const mphilAggregate = mphilTotal ? (mphilObtained * 5) / mphilTotal : 0;
    const phdAggregate = phdTotal ? (phdObtained * 5) / phdTotal : 0;

    const totalAggregate = sscAggregate + hsscAggregate + baAggregate + maAggregate + bedAggregate + medAggregate + mphilAggregate + phdAggregate;

    document.getElementById('aggregate-score').textContent = totalAggregate.toFixed(2);
}
