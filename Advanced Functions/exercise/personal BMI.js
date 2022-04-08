function solve(name, age, weight, height) {
    const patient = {
        name,
        'personalInfo': {
            age,
            weight,
            height
        }
    }
    Object.defineProperty(patient, 'BMI', {
        value: Number((patient.personalInfo.weight / ((patient.personalInfo.height / 100) ** 2)).toFixed(0)),
    });
    Object.defineProperty(patient, 'status', {
        value: '',
        writable: true,
    });
    if(patient.BMI < 18.5) {
        patient.status = 'underweight';
    } else if(patient.BMI < 25) {
        patient.status = 'normal';
    } else if (patient.BMI < 30) {
        patient.status = 'overweight';
    } else if (patient.BMI >= 30) {
        patient.status = 'obese';
        Object.defineProperty(patient, 'recommendation', {
            value: 'admission required',
        })
    }
    return patient;
}

console.log(solve("Peter", 29, 75, 182))
console.log(solve("Honey Boo Boo", 9, 57, 137))