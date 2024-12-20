document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('.navigation').classList.toggle('dark-mode');
    document.querySelectorAll('.navigation ul li a').forEach(link => {
        link.classList.toggle('dark-mode');
    });
    document.querySelectorAll('h2').forEach(h2 => {
        h2.classList.toggle('dark-mode');
    });
    document.querySelectorAll('.left, .middle, .right').forEach(section => {
        section.classList.toggle('dark-mode');
    });
    document.querySelectorAll('.contact-form input').forEach(input => {
        input.classList.toggle('dark-mode');
    });
    document.querySelectorAll('.contact-form textarea').forEach(textarea => {
        textarea.classList.toggle('dark-mode');
    });
    document.querySelectorAll('.contact-form button').forEach(button => {
        button.classList.toggle('dark-mode');
    });
    document.querySelectorAll('.about').forEach(about => {
        about.classList.toggle('dark-mode');
    });
    document.querySelectorAll('.resources').forEach(resources => {
        resources.classList.toggle('dark-mode');
    });
});
function calculateFootprint() {
    // Getting ze input values
    const electricity = parseFloat(document.getElementById('electricity').value);
    const car = parseFloat(document.getElementById('car').value);
    const flights = parseFloat(document.getElementById('flights').value);
    const water = parseFloat(document.getElementById('water').value);
    const heating = parseFloat(document.getElementById('heating').value);

    // Validate inputs
    if (isNaN(electricity) || isNaN(car) || isNaN(flights) || isNaN(water) || isNaN(heating)) {
        alert("Please enter valid numbers for all fields.");
        return; 
    }

    // Carbon footprint emission factors (in kg CO2e)
    const electricityEmissionFactor = 0.92; // kg CO2 per kWh
    const carEmissionFactor = 0.21; // kg CO2 per km
    const flightEmissionFactor = 0.9; // kg CO2 per km (average flight distance considered)
    const waterEmissionFactor = 0.002; // kg CO2 per liter of water
    const heatingEmissionFactor = 2.9; // kg CO2 per liter of gas

    // Calculating zee emissions
    const monthlyElectricityEmission = electricity * electricityEmissionFactor * 30;
    const monthlyCarEmission = car * carEmissionFactor * 30;
    const annualFlightEmission = flights * 1500 * flightEmissionFactor; // assuming 1500 km per flight
    const monthlyWaterEmission = water * waterEmissionFactor * 30;
    const monthlyHeatingEmission = heating * heatingEmissionFactor;

    // Calculate ze total monthly and annual emissions
    const totalMonthlyEmission = monthlyElectricityEmission + monthlyCarEmission + monthlyWaterEmission + monthlyHeatingEmission;
    const totalAnnualEmission = totalMonthlyEmission * 12 + annualFlightEmission;

    // Display ze results
    document.getElementById('monthly-emit').innerHTML = `Total Monthly Carbon Emission: ${totalMonthlyEmission.toFixed(2)} kg CO2`;
    document.getElementById('annual-emit').innerHTML = `Total Annual Carbon Emission: ${totalAnnualEmission.toFixed(2)} kg CO2`;
}


