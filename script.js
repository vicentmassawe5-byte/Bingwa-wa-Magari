/* BINGWA WA MAGARI USED - JavaScript */

// All 100 vehicles
const vehicles = [
    { id: 1, brand: "Toyota", model: "Harrier", year: 2018, price: 28000000, mileage: 65000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Harrier.jpg", description: "Immaculate Toyota Harrier in excellent condition. Single owner, full service history." },
    { id: 2, brand: "Nissan", model: "X-Trail", year: 2017, price: 22000000, mileage: 82000, fuel: "Diesel", transmission: "Automatic", condition: "Very Good", image: "images/Nissan X-Trail.jpg", description: "Reliable Nissan X-Trail with diesel engine. Perfect for family adventures." },
    { id: 3, brand: "Mazda", model: "CX-5", year: 2020, price: 38000000, mileage: 45000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Mazda.jpg", description: "Nearly new Mazda CX-5 with Skyactiv technology." },
    { id: 4, brand: "Subaru", model: "Forester", year: 2019, price: 32000000, mileage: 55000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Subaru forester.jpg", description: "Subaru Forester with legendary Symmetrical AWD." },
    { id: 5, brand: "Toyota", model: "Vitz", year: 2018, price: 15000000, mileage: 48000, fuel: "Petrol", transmission: "Automatic", condition: "Very Good", image: "images/Toyota Vitz.jpg", description: "Compact and efficient Toyota Vitz. Ideal for city driving." },
    { id: 6, brand: "Toyota", model: "Prado", year: 2016, price: 45000000, mileage: 95000, fuel: "Diesel", transmission: "Automatic", condition: "Very Good", image: "images/Prado.jpg", description: "Legendary Toyota Prado Land Cruiser. Built for adventure." },
    { id: 7, brand: "Toyota", model: "RAV4", year: 2019, price: 35000000, mileage: 52000, fuel: "Hybrid", transmission: "Automatic", condition: "Excellent", image: "images/RAV4.jpg", description: "Toyota RAV4 Hybrid for maximum efficiency." },
    { id: 8, brand: "Toyota", model: "Alphard", year: 2017, price: 42000000, mileage: 78000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Alphard.jpg", description: "Luxury Toyota Alphard minivan. Premium executive transport." },
    { id: 9, brand: "Toyota", model: "Allion", year: 2018, price: 18000000, mileage: 60000, fuel: "Petrol", transmission: "Automatic", condition: "Very Good", image: "images/Allion.jpg", description: "Elegant Toyota Allion sedan. Spacious and comfortable." },
    { id: 10, brand: "Toyota", model: "Premio", year: 2019, price: 20000000, mileage: 42000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Premio.jpg", description: "Sophisticated Toyota Premio. Premium sedan." },
    { id: 11, brand: "Toyota", model: "Wish", year: 2017, price: 16000000, mileage: 70000, fuel: "Petrol", transmission: "Automatic", condition: "Very Good", image: "images/Wish.jpg", description: "Versatile Toyota Wish 7-seater." },
    { id: 12, brand: "Toyota", model: "Noah", year: 2018, price: 24000000, mileage: 58000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Noah.jpg", description: "Popular Toyota Noah with dual power sliding doors." },
    { id: 13, brand: "Toyota", model: "Crown", year: 2016, price: 30000000, mileage: 85000, fuel: "Hybrid", transmission: "Automatic", condition: "Very Good", image: "images/Crown.jpg", description: "Executive Toyota Crown hybrid sedan." },
    { id: 14, brand: "Toyota", model: "Hilux", year: 2019, price: 40000000, mileage: 40000, fuel: "Diesel", transmission: "Manual", condition: "Excellent", image: "images/Hilux.jpg", description: "Rugged Toyota Hilux pickup. Built tough." },
    { id: 15, brand: "Nissan", model: "Juke", year: 2018, price: 17000000, mileage: 55000, fuel: "Petrol", transmission: "Automatic", condition: "Very Good", image: "images/Juke.jpg", description: "Stylish Nissan Juke crossover. Unique design." },
    { id: 16, brand: "Mercedes-Benz", model: "G-Class G63 AMG", year: 2020, price: 280000000, mileage: 25000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/G-Wagon.jpg", description: "Iconic Mercedes-Benz G-Wagon G63 AMG. Ultimate luxury SUV with commanding presence." },
    { id: 17, brand: "Mercedes-Benz", model: "C-Class C200", year: 2019, price: 55000000, mileage: 48000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Mercedes C200.jpg", description: "Elegant Mercedes-Benz C-Class. Premium German engineering." },
    { id: 18, brand: "Mercedes-Benz", model: "E-Class E300", year: 2020, price: 78000000, mileage: 35000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Mercedes E300.jpg", description: "Executive Mercedes-Benz E-Class. Sophistication meets performance." },
    { id: 19, brand: "Mercedes-Benz", model: "GLC 300", year: 2019, price: 65000000, mileage: 42000, fuel: "Petrol", transmission: "Automatic", condition: "Very Good", image: "images/Mercedes GLC.jpg", description: "Versatile Mercedes-Benz GLC SUV. Luxury for every journey." },
    { id: 20, brand: "Mercedes-Benz", model: "GLE 450", year: 2021, price: 95000000, mileage: 28000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Mercedes GLE.jpg", description: "Premium Mercedes-Benz GLE. Spacious luxury SUV." },
    { id: 21, brand: "Mercedes-Benz", model: "S-Class S500", year: 2018, price: 120000000, mileage: 55000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Mercedes S500.jpg", description: "Flagship Mercedes-Benz S-Class. The pinnacle of automotive luxury." },
    { id: 22, brand: "Mercedes-Benz", model: "CLA 250", year: 2020, price: 48000000, mileage: 38000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Mercedes CLA.jpg", description: "Sporty Mercedes-Benz CLA coupe. Dynamic and stylish." },
    { id: 23, brand: "BMW", model: "X5 xDrive40i", year: 2020, price: 88000000, mileage: 32000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/BMW X5.jpg", description: "Powerful BMW X5. The ultimate driving machine in SUV form." },
    { id: 24, brand: "BMW", model: "3 Series 320i", year: 2019, price: 45000000, mileage: 52000, fuel: "Petrol", transmission: "Automatic", condition: "Very Good", image: "images/BMW 320i.jpg", description: "Classic BMW 3 Series. Sporty sedan with precision handling." },
    { id: 25, brand: "BMW", model: "X3 xDrive28i", year: 2019, price: 58000000, mileage: 45000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/BMW X3.jpg", description: "Compact luxury BMW X3 SUV. Agile and refined." },
    { id: 26, brand: "BMW", model: "5 Series 530i", year: 2020, price: 72000000, mileage: 38000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/BMW 530i.jpg", description: "Executive BMW 5 Series. Business class comfort." },
    { id: 27, brand: "BMW", model: "X1 sDrive18i", year: 2018, price: 38000000, mileage: 58000, fuel: "Petrol", transmission: "Automatic", condition: "Very Good", image: "images/BMW X1.jpg", description: "Entry-level BMW X1. Compact luxury crossover." },
    { id: 28, brand: "BMW", model: "7 Series 740Li", year: 2019, price: 110000000, mileage: 42000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/BMW 740Li.jpg", description: "Flagship BMW 7 Series. Ultimate luxury sedan." },
    { id: 29, brand: "Audi", model: "Q5 45 TFSI", year: 2020, price: 62000000, mileage: 35000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Audi Q5.jpg", description: "Sophisticated Audi Q5. Premium German SUV with quattro AWD." },
    { id: 30, brand: "Audi", model: "A4 40 TFSI", year: 2019, price: 48000000, mileage: 48000, fuel: "Petrol", transmission: "Automatic", condition: "Very Good", image: "images/Audi A4.jpg", description: "Elegant Audi A4 sedan. Technology-driven luxury." },
    { id: 31, brand: "Audi", model: "Q7 55 TFSI", year: 2020, price: 85000000, mileage: 30000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Audi Q7.jpg", description: "Spacious Audi Q7. Seven-seat luxury SUV." },
    { id: 32, brand: "Audi", model: "A6 45 TFSI", year: 2020, price: 68000000, mileage: 38000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Audi A6.jpg", description: "Executive Audi A6. Progressive luxury sedan." },
    { id: 33, brand: "Audi", model: "Q3 35 TFSI", year: 2019, price: 42000000, mileage: 52000, fuel: "Petrol", transmission: "Automatic", condition: "Very Good", image: "images/Audi Q3.jpg", description: "Compact Audi Q3. Urban luxury crossover." },
    { id: 34, brand: "Lexus", model: "RX 350", year: 2020, price: 72000000, mileage: 35000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Lexus RX350.jpg", description: "Refined Lexus RX 350. Japanese luxury with reliability." },
    { id: 35, brand: "Lexus", model: "NX 300", year: 2019, price: 55000000, mileage: 45000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Lexus NX300.jpg", description: "Sporty Lexus NX 300. Compact luxury crossover." },
    { id: 36, brand: "Lexus", model: "ES 250", year: 2020, price: 58000000, mileage: 38000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Lexus ES250.jpg", description: "Elegant Lexus ES 250. Smooth and comfortable sedan." },
    { id: 37, brand: "Lexus", model: "LX 570", year: 2018, price: 150000000, mileage: 65000, fuel: "Petrol", transmission: "Automatic", condition: "Very Good", image: "images/Lexus LX570.jpg", description: "Mighty Lexus LX 570. Full-size luxury SUV, Land Cruiser based." },
    { id: 38, brand: "Lexus", model: "IS 300", year: 2019, price: 48000000, mileage: 48000, fuel: "Petrol", transmission: "Automatic", condition: "Very Good", image: "images/Lexus IS300.jpg", description: "Athletic Lexus IS 300. Sporty compact luxury sedan." },
    { id: 39, brand: "Land Rover", model: "Range Rover Sport HSE", year: 2020, price: 135000000, mileage: 32000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Range Rover Sport.jpg", description: "Dynamic Range Rover Sport. Luxury off-road capability." },
    { id: 40, brand: "Land Rover", model: "Discovery 5 HSE", year: 2019, price: 95000000, mileage: 48000, fuel: "Diesel", transmission: "Automatic", condition: "Excellent", image: "images/Land Rover Discovery.jpg", description: "Versatile Land Rover Discovery 5. Seven-seat adventure SUV." },
    { id: 41, brand: "Land Rover", model: "Range Rover Evoque", year: 2020, price: 68000000, mileage: 35000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Range Rover Evoque.jpg", description: "Stylish Range Rover Evoque. Compact luxury crossover." },
    { id: 42, brand: "Land Rover", model: "Defender 110", year: 2021, price: 145000000, mileage: 18000, fuel: "Diesel", transmission: "Automatic", condition: "Excellent", image: "images/Land Rover Defender.jpg", description: "Legendary Land Rover Defender 110. Iconic off-road capability reborn." },
    { id: 43, brand: "Land Rover", model: "Range Rover Velar", year: 2019, price: 88000000, mileage: 42000, fuel: "Petrol", transmission: "Automatic", condition: "Very Good", image: "images/Range Rover Velar.jpg", description: "Avant-garde Range Rover Velar. Design-focused luxury SUV." },
    { id: 44, brand: "Porsche", model: "Cayenne S", year: 2020, price: 125000000, mileage: 28000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Porsche Cayenne.jpg", description: "Sporty Porsche Cayenne S. Performance luxury SUV." },
    { id: 45, brand: "Porsche", model: "Macan S", year: 2019, price: 88000000, mileage: 38000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Porsche Macan.jpg", description: "Compact Porsche Macan. Sports car DNA in SUV form." },
    { id: 46, brand: "Porsche", model: "Panamera 4S", year: 2020, price: 155000000, mileage: 25000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Porsche Panamera.jpg", description: "Executive Porsche Panamera. Four-door sports car." },
    { id: 47, brand: "Volkswagen", model: "Tiguan R-Line", year: 2020, price: 52000000, mileage: 38000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/VW Tiguan.jpg", description: "Refined Volkswagen Tiguan. German engineering crossover." },
    { id: 48, brand: "Volkswagen", model: "Passat R-Line", year: 2019, price: 42000000, mileage: 48000, fuel: "Petrol", transmission: "Automatic", condition: "Very Good", image: "images/VW Passat.jpg", description: "Spacious Volkswagen Passat. Executive sedan value." },
    { id: 49, brand: "Volkswagen", model: "Touareg V6", year: 2020, price: 75000000, mileage: 32000, fuel: "Diesel", transmission: "Automatic", condition: "Excellent", image: "images/VW Touareg.jpg", description: "Premium Volkswagen Touareg. Luxury SUV with understated elegance." },
    { id: 50, brand: "Volkswagen", model: "Golf GTI", year: 2020, price: 38000000, mileage: 42000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/VW Golf GTI.jpg", description: "Iconic Volkswagen Golf GTI. Hot hatch legend." },
    { id: 51, brand: "Honda", model: "CR-V Touring", year: 2020, price: 48000000, mileage: 38000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Honda CRV.jpg", description: "Reliable Honda CR-V. Spacious family SUV with Honda Sensing." },
    { id: 52, brand: "Honda", model: "Accord Touring", year: 2020, price: 42000000, mileage: 35000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Honda Accord.jpg", description: "Sophisticated Honda Accord. Midsize sedan excellence." },
    { id: 53, brand: "Honda", model: "Civic RS", year: 2020, price: 32000000, mileage: 42000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Honda Civic.jpg", description: "Sporty Honda Civic RS. Dynamic compact sedan." },
    { id: 54, brand: "Honda", model: "HR-V", year: 2019, price: 28000000, mileage: 52000, fuel: "Petrol", transmission: "Automatic", condition: "Very Good", image: "images/Honda HRV.jpg", description: "Compact Honda HR-V. Versatile urban crossover." },
    { id: 55, brand: "Honda", model: "Pilot Elite", year: 2019, price: 58000000, mileage: 48000, fuel: "Petrol", transmission: "Automatic", condition: "Very Good", image: "images/Honda Pilot.jpg", description: "Family-sized Honda Pilot. Eight-seat SUV capability." },
    { id: 56, brand: "Hyundai", model: "Tucson Elite", year: 2020, price: 42000000, mileage: 35000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Hyundai Tucson.jpg", description: "Modern Hyundai Tucson. Feature-packed compact SUV." },
    { id: 57, brand: "Hyundai", model: "Santa Fe", year: 2020, price: 52000000, mileage: 32000, fuel: "Diesel", transmission: "Automatic", condition: "Excellent", image: "images/Hyundai Santa Fe.jpg", description: "Spacious Hyundai Santa Fe. Seven-seat family SUV." },
    { id: 58, brand: "Hyundai", model: "Elantra", year: 2020, price: 25000000, mileage: 42000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Hyundai Elantra.jpg", description: "Stylish Hyundai Elantra. Value-packed compact sedan." },
    { id: 59, brand: "Hyundai", model: "Palisade", year: 2021, price: 68000000, mileage: 25000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Hyundai Palisade.jpg", description: "Premium Hyundai Palisade. Eight-seat luxury SUV." },
    { id: 60, brand: "Hyundai", model: "Kona", year: 2020, price: 28000000, mileage: 38000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Hyundai Kona.jpg", description: "Compact Hyundai Kona. Bold urban crossover." },
    { id: 61, brand: "Kia", model: "Sportage GT-Line", year: 2020, price: 40000000, mileage: 38000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Kia Sportage.jpg", description: "Stylish Kia Sportage. European design flair." },
    { id: 62, brand: "Kia", model: "Sorento", year: 2021, price: 58000000, mileage: 28000, fuel: "Diesel", transmission: "Automatic", condition: "Excellent", image: "images/Kia Sorento.jpg", description: "Premium Kia Sorento. Seven-seat SUV with luxury features." },
    { id: 63, brand: "Kia", model: "Carnival", year: 2021, price: 62000000, mileage: 22000, fuel: "Diesel", transmission: "Automatic", condition: "Excellent", image: "images/Kia Carnival.jpg", description: "Luxurious Kia Carnival. Eight-seat people mover with style." },
    { id: 64, brand: "Kia", model: "Seltos", year: 2020, price: 28000000, mileage: 42000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Kia Seltos.jpg", description: "Compact Kia Seltos. Feature-rich small SUV." },
    { id: 65, brand: "Kia", model: "Telluride", year: 2021, price: 72000000, mileage: 25000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Kia Telluride.jpg", description: "Award-winning Kia Telluride. Eight-seat premium SUV." },
    { id: 66, brand: "Ford", model: "Ranger Wildtrak", year: 2021, price: 58000000, mileage: 28000, fuel: "Diesel", transmission: "Automatic", condition: "Excellent", image: "images/Ford Ranger.jpg", description: "Capable Ford Ranger Wildtrak. Premium pickup truck." },
    { id: 67, brand: "Ford", model: "Everest Titanium", year: 2020, price: 68000000, mileage: 35000, fuel: "Diesel", transmission: "Automatic", condition: "Excellent", image: "images/Ford Everest.jpg", description: "Rugged Ford Everest. Seven-seat SUV based on Ranger platform." },
    { id: 68, brand: "Ford", model: "Mustang GT", year: 2020, price: 85000000, mileage: 28000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Ford Mustang.jpg", description: "Iconic Ford Mustang GT. American muscle car heritage." },
    { id: 69, brand: "Ford", model: "Explorer ST", year: 2021, price: 78000000, mileage: 25000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Ford Explorer.jpg", description: "Powerful Ford Explorer ST. Three-row performance SUV." },
    { id: 70, brand: "Mazda", model: "CX-9", year: 2020, price: 55000000, mileage: 35000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Mazda CX9.jpg", description: "Elegant Mazda CX-9. Seven-seat premium SUV with Kodo design." },
    { id: 71, brand: "Mazda", model: "Mazda6", year: 2020, price: 38000000, mileage: 42000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Mazda6.jpg", description: "Refined Mazda6. Stylish midsize sedan with premium feel." },
    { id: 72, brand: "Mazda", model: "CX-30", year: 2021, price: 32000000, mileage: 28000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Mazda CX30.jpg", description: "Compact Mazda CX-30. Premium small crossover." },
    { id: 73, brand: "Mazda", model: "MX-5 Miata", year: 2020, price: 45000000, mileage: 22000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Mazda MX5.jpg", description: "Legendary Mazda MX-5 Miata. Pure driving joy convertible." },
    { id: 74, brand: "Subaru", model: "Outback", year: 2020, price: 48000000, mileage: 38000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Subaru Outback.jpg", description: "Adventure-ready Subaru Outback. Rugged wagon with AWD." },
    { id: 75, brand: "Subaru", model: "XV", year: 2020, price: 32000000, mileage: 42000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Subaru XV.jpg", description: "Compact Subaru XV. Crossover with standard AWD." },
    { id: 76, brand: "Subaru", model: "Legacy", year: 2020, price: 38000000, mileage: 38000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Subaru Legacy.jpg", description: "Reliable Subaru Legacy. All-weather midsize sedan." },
    { id: 77, brand: "Subaru", model: "WRX STI", year: 2019, price: 52000000, mileage: 45000, fuel: "Petrol", transmission: "Manual", condition: "Very Good", image: "images/Subaru WRX.jpg", description: "Rally-bred Subaru WRX STI. Performance sedan icon." },
    { id: 78, brand: "Suzuki", model: "Vitara", year: 2020, price: 28000000, mileage: 35000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Suzuki Vitara.jpg", description: "Compact Suzuki Vitara. Fun and affordable crossover." },
    { id: 79, brand: "Suzuki", model: "Jimny", year: 2021, price: 35000000, mileage: 18000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Suzuki Jimny.jpg", description: "Adorable Suzuki Jimny. Mini off-road legend with big character." },
    { id: 80, brand: "Suzuki", model: "Swift Sport", year: 2020, price: 22000000, mileage: 42000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Suzuki Swift.jpg", description: "Peppy Suzuki Swift Sport. Lightweight hot hatch fun." },
    { id: 81, brand: "Toyota", model: "Land Cruiser 200", year: 2019, price: 180000000, mileage: 55000, fuel: "Diesel", transmission: "Automatic", condition: "Very Good", image: "images/Land Cruiser 200.jpg", description: "Legendary Toyota Land Cruiser 200. The king of off-road." },
    { id: 82, brand: "Toyota", model: "Fortuner", year: 2020, price: 58000000, mileage: 38000, fuel: "Diesel", transmission: "Automatic", condition: "Excellent", image: "images/Toyota Fortuner.jpg", description: "Rugged Toyota Fortuner. Seven-seat SUV for tough terrain." },
    { id: 83, brand: "Toyota", model: "Corolla Cross", year: 2021, price: 35000000, mileage: 25000, fuel: "Hybrid", transmission: "Automatic", condition: "Excellent", image: "images/Corolla Cross.jpg", description: "Modern Toyota Corolla Cross. Compact hybrid SUV." },
    { id: 84, brand: "Toyota", model: "Camry Hybrid", year: 2020, price: 42000000, mileage: 32000, fuel: "Hybrid", transmission: "Automatic", condition: "Excellent", image: "images/Toyota Camry.jpg", description: "Efficient Toyota Camry Hybrid. Midsize sedan with hybrid power." },
    { id: 85, brand: "Toyota", model: "Hiace", year: 2020, price: 45000000, mileage: 55000, fuel: "Diesel", transmission: "Automatic", condition: "Very Good", image: "images/Toyota Hiace.jpg", description: "Versatile Toyota Hiace. Reliable people mover or cargo van." },
    { id: 86, brand: "Nissan", model: "Patrol", year: 2019, price: 120000000, mileage: 65000, fuel: "Petrol", transmission: "Automatic", condition: "Very Good", image: "images/Nissan Patrol.jpg", description: "Mighty Nissan Patrol. Full-size luxury off-road SUV." },
    { id: 87, brand: "Nissan", model: "Navara", year: 2021, price: 48000000, mileage: 28000, fuel: "Diesel", transmission: "Automatic", condition: "Excellent", image: "images/Nissan Navara.jpg", description: "Capable Nissan Navara. Tough pickup for work and play." },
    { id: 88, brand: "Nissan", model: "Qashqai", year: 2020, price: 32000000, mileage: 38000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Nissan Qashqai.jpg", description: "Popular Nissan Qashqai. Compact crossover pioneer." },
    { id: 89, brand: "Nissan", model: "Murano", year: 2019, price: 38000000, mileage: 52000, fuel: "Petrol", transmission: "Automatic", condition: "Very Good", image: "images/Nissan Murano.jpg", description: "Stylish Nissan Murano. Premium midsize crossover." },
    { id: 90, brand: "Nissan", model: "Note", year: 2018, price: 14000000, mileage: 58000, fuel: "Petrol", transmission: "Automatic", condition: "Very Good", image: "images/Nissan Note.jpg", description: "Practical Nissan Note. Compact MPV with clever packaging." },
    { id: 91, brand: "Mitsubishi", model: "Pajero", year: 2018, price: 52000000, mileage: 78000, fuel: "Diesel", transmission: "Automatic", condition: "Very Good", image: "images/Mitsubishi Pajero.jpg", description: "Tough Mitsubishi Pajero. Legendary off-road SUV." },
    { id: 92, brand: "Mitsubishi", model: "Outlander", year: 2020, price: 38000000, mileage: 42000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Mitsubishi Outlander.jpg", description: "Family-friendly Mitsubishi Outlander. Seven-seat crossover." },
    { id: 93, brand: "Mitsubishi", model: "Triton", year: 2021, price: 45000000, mileage: 25000, fuel: "Diesel", transmission: "Automatic", condition: "Excellent", image: "images/Mitsubishi Triton.jpg", description: "Rugged Mitsubishi Triton. Reliable pickup truck." },
    { id: 94, brand: "Mitsubishi", model: "Eclipse Cross", year: 2020, price: 32000000, mileage: 38000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Mitsubishi Eclipse.jpg", description: "Sporty Mitsubishi Eclipse Cross. Bold compact SUV." },
    { id: 95, brand: "Isuzu", model: "D-Max", year: 2021, price: 52000000, mileage: 28000, fuel: "Diesel", transmission: "Automatic", condition: "Excellent", image: "images/Isuzu D-Max.jpg", description: "Tough Isuzu D-Max. Workhorse pickup with modern comfort." },
    { id: 96, brand: "Isuzu", model: "MU-X", year: 2021, price: 58000000, mileage: 25000, fuel: "Diesel", transmission: "Automatic", condition: "Excellent", image: "images/Isuzu MUX.jpg", description: "Rugged Isuzu MU-X. Seven-seat SUV with truck durability." },
    { id: 97, brand: "Volvo", model: "XC90 T6", year: 2020, price: 95000000, mileage: 32000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Volvo XC90.jpg", description: "Premium Volvo XC90. Scandinavian luxury seven-seat SUV." },
    { id: 98, brand: "Volvo", model: "XC60 T5", year: 2020, price: 68000000, mileage: 35000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Volvo XC60.jpg", description: "Elegant Volvo XC60. Safe and stylish midsize SUV." },
    { id: 99, brand: "Volvo", model: "S90", year: 2020, price: 62000000, mileage: 38000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Volvo S90.jpg", description: "Refined Volvo S90. Executive sedan with minimalist luxury." },
    { id: 100, brand: "Jaguar", model: "F-Pace S", year: 2020, price: 88000000, mileage: 32000, fuel: "Petrol", transmission: "Automatic", condition: "Excellent", image: "images/Jaguar F-Pace.jpg", description: "Sporty Jaguar F-Pace. British luxury performance SUV." }
];

function formatPrice(price) {
    return "TZS " + price.toLocaleString("en-US");
}

function formatMileage(mileage) {
    return mileage.toLocaleString("en-US") + " km";
}

function createCarCard(vehicle) {
    return `
        <article class="car-card">
            <div class="car-image">
                <img src="${vehicle.image}" alt="${vehicle.brand} ${vehicle.model}" loading="lazy">
                <span class="car-badge">${vehicle.condition}</span>
            </div>
            <div class="car-content">
                <h3 class="car-title">${vehicle.brand} ${vehicle.model}</h3>
                <div class="car-price">${formatPrice(vehicle.price)}</div>
                <div class="car-specs">
                    <div class="car-spec"><span>📅</span><span>${vehicle.year}</span></div>
                    <div class="car-spec"><span>🛣️</span><span>${formatMileage(vehicle.mileage)}</span></div>
                    <div class="car-spec"><span>⛽</span><span>${vehicle.fuel}</span></div>
                    <div class="car-spec"><span>⚙️</span><span>${vehicle.transmission}</span></div>
                </div>
                <div class="car-actions">
                    <a href="car-details.html?id=${vehicle.id}" class="btn btn-primary">View Details</a>
                    <a href="https://wa.me/255765456898?text=Hi, I'm interested in the ${vehicle.brand} ${vehicle.model} ${vehicle.year}" class="btn btn-whatsapp" target="_blank">WhatsApp</a>
                </div>
            </div>
        </article>
    `;
}

// Load ALL cars into inventory page
function loadInventory() {
    var container = document.getElementById("inventoryGrid");
    if (!container) return;

    var html = "";
    for (var i = 0; i < vehicles.length; i++) {
        html += createCarCard(vehicles[i]);
    }
    container.innerHTML = html;

    var count = document.getElementById("resultsCount");
    if (count) count.textContent = "Showing " + vehicles.length + " vehicles";

    var noResults = document.getElementById("noResults");
    if (noResults) noResults.style.display = "none";
}

// Load featured cars on homepage
function loadFeaturedCars() {
    var container = document.getElementById("featuredCars");
    if (!container) return;

    var html = "";
    for (var i = 0; i < vehicles.length; i++) {
        html += createCarCard(vehicles[i]);
    }
    container.innerHTML = html;
}

// Mobile nav toggle
function setupMobileNav() {
    var toggle = document.getElementById("navToggle");
    var menu = document.getElementById("navMenu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function() {
        toggle.classList.toggle("active");
        menu.classList.toggle("active");
    });
}

// Header scroll effect
function setupHeaderScroll() {
    var header = document.querySelector(".header");
    if (!header) return;

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

// Contact form
function setupContactForm() {
    var form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        var name = document.getElementById("contactName").value;
        var interest = document.getElementById("contactInterest").value;
        var msg = "Hi, I'm " + name + ".";
        if (interest) msg += " I'm interested in: " + interest + ".";
        window.open("https://wa.me/255765456898?text=" + encodeURIComponent(msg), "_blank");
    });
}

// Vehicle details page
function loadVehicleDetails() {
    var urlParams = new URLSearchParams(window.location.search);
    var carId = urlParams.get("id");
    if (!carId) return;

    var vehicle = null;
    for (var i = 0; i < vehicles.length; i++) {
        if (vehicles[i].id == parseInt(carId)) {
            vehicle = vehicles[i];
            break;
        }
    }

    if (!vehicle) {
        window.location.href = "cars.html";
        return;
    }

    document.title = vehicle.brand + " " + vehicle.model + " | Bingwa Wa Magari";

    var mainImage = document.getElementById("mainImage");
    if (mainImage) {
        mainImage.src = vehicle.image;
        mainImage.alt = vehicle.brand + " " + vehicle.model;
    }

    var carTitle = document.getElementById("carTitle");
    if (carTitle) carTitle.textContent = vehicle.brand + " " + vehicle.model + " " + vehicle.year;

    var carPrice = document.getElementById("carPrice");
    if (carPrice) carPrice.textContent = formatPrice(vehicle.price);

    var carYear = document.getElementById("carYear");
    if (carYear) carYear.textContent = vehicle.year;

    var carMileage = document.getElementById("carMileage");
    if (carMileage) carMileage.textContent = formatMileage(vehicle.mileage);

    var carCondition = document.getElementById("carCondition");
    if (carCondition) carCondition.textContent = vehicle.condition;

    var carDescription = document.getElementById("carDescription");
    if (carDescription) carDescription.textContent = vehicle.description;

    var specsGrid = document.getElementById("specsGrid");
    if (specsGrid) {
        specsGrid.innerHTML = `
            <div class="spec-item"><span class="spec-label">Brand</span><span class="spec-value">${vehicle.brand}</span></div>
            <div class="spec-item"><span class="spec-label">Model</span><span class="spec-value">${vehicle.model}</span></div>
            <div class="spec-item"><span class="spec-label">Year</span><span class="spec-value">${vehicle.year}</span></div>
            <div class="spec-item"><span class="spec-label">Mileage</span><span class="spec-value">${formatMileage(vehicle.mileage)}</span></div>
            <div class="spec-item"><span class="spec-label">Fuel</span><span class="spec-value">${vehicle.fuel}</span></div>
            <div class="spec-item"><span class="spec-label">Transmission</span><span class="spec-value">${vehicle.transmission}</span></div>
            <div class="spec-item"><span class="spec-label">Condition</span><span class="spec-value">${vehicle.condition}</span></div>
            <div class="spec-item"><span class="spec-label">Price</span><span class="spec-value">${formatPrice(vehicle.price)}</span></div>
        `;
    }

    var waBtn = document.querySelector(".btn-whatsapp-large");
    if (waBtn) {
        waBtn.href = "https://wa.me/255765456898?text=" + encodeURIComponent("Hi, I'm interested in the " + vehicle.brand + " " + vehicle.model + " " + vehicle.year);
    }

    // Similar cars
    var similarContainer = document.getElementById("similarCars");
    if (similarContainer) {
        var similarHtml = "";
        var count = 0;
        for (var i = 0; i < vehicles.length && count < 3; i++) {
            if (vehicles[i].id != vehicle.id) {
                similarHtml += createCarCard(vehicles[i]);
                count++;
            }
        }
        similarContainer.innerHTML = similarHtml;
    }
}

// Run everything when page loads
document.addEventListener("DOMContentLoaded", function() {
    setupMobileNav();
    setupHeaderScroll();
    setupContactForm();

    var page = window.location.pathname.split("/").pop() || "index.html";

    if (page === "index.html" || page === "") {
        loadFeaturedCars();
    }

    if (page === "cars.html") {
        loadInventory();
    }

    if (page === "car-details.html") {
        loadVehicleDetails();
    }
});