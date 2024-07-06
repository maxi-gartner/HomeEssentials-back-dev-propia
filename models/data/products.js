export let products = [
  {
    name: "Gaming Mouse",
    description: "Wired gaming mouse with adjustable DPI and programmable buttons.",
    price: 49.99,
    category_id: "Electronics",
    manufacturer_id: "ABC Electronics",
    stock_Available: 18,
    photo: "https://www.zymak.com.bd/wp-content/uploads/2021/01/V6-Gaming-Mouse-With-RGB-Backlit-And-Metal-Body.png",
    percentage_offer: 0
  },
  {
    name: "Wireless Bluetooth Speaker",
    description: "A portable Bluetooth speaker for enjoying music on the go",
    price: 99.99,
    category_id: "Electronics",
    manufacturer_id: "ABC Electronics",
    stock_Available: 15,
    photo: "https://i0.wp.com/ytimg.googleusercontent.com/vi/tpGwx16MgDs/maxresdefault.jpg?w=180&h=180&c=1",
    percentage_offer: 0
  },
  {
    name: "Smartphone",
    description: "A high-performance smartphone with advanced features and a sleek design",
    price: 699.99,
    category_id: "Electronics",
    manufacturer_id: "ABC Electronics",
    stock_Available: 20,
    photo: "https://www.zdnet.com/a/img/resize/06119597d8fde27e3074dc3bb4a9ce0f1851280a/2023/04/24/4e586f53-afa2-452d-baf4-cc7c78c2c5fb/samsung-galaxy-a54-5g.jpg?auto=webp&fit=crop&height=900&width=1200",
    percentage_offer: 0
  },
  {
    name: "Smartwatch",
    description: "A stylish smartwatch with fitness tracking and notification features",
    price: 199.99,
    category_id: "Electronics",
    manufacturer_id: "ABC Electronics",
    stock_Available: 12,
    photo: "https://m.media-amazon.com/images/I/61nZMpkPjcL.jpg",
    percentage_offer: 0
  },
  {
    name: "Wireless Security Camera System",
    description: "Complete wireless security camera system with multiple cameras and remote viewing capabilities.",
    price: 399.99,
    category_id: "Home Security",
    manufacturer_id: "XYZ Security",
    stock_Available: 3,
    photo: "https://m.media-amazon.com/images/I/71YacI4x9oS.jpg",
    percentage_offer: 0
  },
  {
    name: "Smart Doorbell",
    description: "Video doorbell with motion detection, two-way audio, and smartphone notifications.",
    price: 149.99,
    category_id: "Home Security",
    manufacturer_id: "XYZ Security",
    stock_Available: 6,
    photo: "https://cdn.thewirecutter.com/wp-content/media/2021/06/smartdoorbell-2048px-0756.jpg",
    percentage_offer: 0
  },
  {
    name: "Keyless Entry System",
    description: "Electronic keyless entry system for secure and convenient access to your home.",
    price: 129.99,
    category_id: "Home Security",
    manufacturer_id: "ABC Electronics",
    stock_Available: 9,
    photo: "https://ae01.alicdn.com/kf/HTB1tuOCbcTxK1Rjy0Fgq6yovpXaz/Universal-Car-Central-Locking-Kit-Auto-Keyless-Entry-System-Two-Remote-Controller-Vehicle-Door-Lock-Car.jpg_Q90.jpg_.webp",
    percentage_offer: 0
  },
  {
    name: "Window Sensors",
    description: "Wireless window sensors that trigger alerts when windows are opened or tampered with.",
    price: 39.99,
    category_id: "Home Security",
    manufacturer_id: "XYZ Security",
    stock_Available: 15,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2N-tHoQcNAr-YnlqTI9SVlvh4bVPA-9HBctiuDpzSfZtas6Q-6OHct9MEkF_2cOVQsY&usqp=CAU",
    percentage_offer: 0
  },
  {
    name: "Smart Lock",
    description: "Smart lock with keyless entry, smartphone control, and activity monitoring.",
    price: 199.99,
    category_id: "Home Security",
    manufacturer_id: "ABC Electronics",
    stock_Available: 7,
    photo: "https://cdn.shopify.com/s/files/1/0422/3985/2711/products/002.jpg?v=1680093799&width=1946",
    percentage_offer: 0
  },
  {
    name: "Smart Thermostat",
    description: "Wi-Fi enabled smart thermostat for remote temperature control and energy savings.",
    price: 149.99,
    category_id: "Home Automation",
    manufacturer_id: "Techno Rize",
    stock_Available: 5,
    photo: "https://www.moneysavingexpert.com/content/dam/hero-utilities-thermostat.jpg",
    percentage_offer: 0
  },
  {
    name: "Smart Lighting System",
    description: "Wireless smart lighting system with dimming and color-changing capabilities.",
    price: 199.99,
    category_id: "Home Automation",
    manufacturer_id: "Techno Rize",
    stock_Available: 8,
    photo: "https://cdn.shopify.com/s/files/1/2129/3845/articles/smart-lighting-generic-photo.jpg?v=1670797761",
    percentage_offer: 0
  },
  {
    name: "Smart Speaker",
    description: "Voice-controlled smart speaker with built-in virtual assistant and music streaming capabilities.",
    price: 99.99,
    category_id: "Home Automation",
    manufacturer_id: "GHI Edge",
    stock_Available: 12,
    photo: "https://cf.shopee.sg/file/sg-11134201-22100-hd4p4wl639iv7c",
    percentage_offer: 0
  },
  {
    name: "Smart Door Lock",
    description: "Smart door lock with keyless entry, smartphone control, and security features.",
    price: 179.99,
    category_id: "Home Automation",
    manufacturer_id: "Techno Rize",
    stock_Available: 6,
    photo: "https://cairocart.com/pub/media/catalog/product/cache/f65e4f3f0d55f7c692e033a9434b3a7f/f/a/face.jpg",
    percentage_offer: 0
  },
  //cocinas
  {
    name: "Induction Cooktop",
    description: "High-performance induction cooktop with multiple cooking zones and precise temperature control.",
    price: 119.996.0,
    category_id: "Kitchen Appliances",
    manufacturer_id: "TechHome",
    stock_Available: 10,
    photo: "https://www.ikea.com/ca/en/images/products/tvaersaeker-range-with-induction-cooktop-stainless-steel__1050232_pe844797_s5.jpg?f=s",
    percentage_offer: 0
  },
  {
    name: "Convection Oven",
    description: "Versatile convection oven with multiple cooking modes and adjustable temperature settings.",
    price: 99.996.0,
    category_id: "Kitchen Appliances",
    manufacturer_id: "PowerTech Appliances",
    stock_Available: 5,
    photo: "https://cdn.shopify.com/s/files/1/0363/4099/0087/products/3_2048x2048.jpg?v=1618200168",
    percentage_offer: 0
  },
  {
    name: "Kitchen Knife Set",
    description: "High-quality knife set with a variety of blades for all your culinary needs.",
    price: 35.996.0,
    category_id: "Kitchen Tools",
    manufacturer_id: "KitchenGurus",
    stock_Available: 15,
    photo: "https://m.media-amazon.com/images/I/718iZVcnVEL.jpg",
    percentage_offer: 0
  },
  {
    name: "Blender",
    description: "Powerful blender for making smoothies, soups, and sauces with ease.",
    price: 31.996.0,
    category_id: "Kitchen Appliances",
    manufacturer_id: "TechHome",
    stock_Available: 8,
    photo: "https://helios-i.mashable.com/imagery/articles/01HZLAzVkYGRMhpTXRUrceo/hero-image.fill.size_1200x900.v1668536742.jpg",
    percentage_offer: 0
  }
  ,
  {
    name: "Coffee Maker",
    description: "Automatic coffee maker with programmable brewing options and built-in grinder.",
    price: 51.996.0,
    category_id: "Kitchen Appliances",
    manufacturer_id: "PowerTech Appliances",
    stock_Available: 12,
    photo: "https://images-cdn.ubuy.com.sa/634ed841b5dfc729566bc10b-mixpresso-12-cup-drip-coffee-maker.jpg",
    percentage_offer: 0
  },
  // heladeras
  {
    name: "French Door Refrigerator",
    description: "Spacious French door refrigerator with multiple compartments and adjustable shelves.",
    price: 999.99,
    category_id: "Refrigerators",
    manufacturer_id: "TechHome",
    stock_Available: 10,
    photo: "https://s.turbifycdn.com/aah/usappliance/erfg2393as-electrolux-36-counter-depth-french-door-refrigerator-stainless-steel-38.jpg",
    percentage_offer: 0
  },
  {
    name: "Side-by-Side Refrigerator",
    description: "Convenient side-by-side refrigerator with separate compartments for fresh and frozen foods.",
    price: 899.99,
    category_id: "Refrigerators",
    manufacturer_id: "PowerTech Appliances",
    stock_Available: 5,
    photo: "https://5.imimg.com/data5/SH/JU/MY-2341017/samsung-side-by-side-refrigerator-500x500.jpg",
    percentage_offer: 0
  },
  {
    name: "Mini Fridge",
    description: "Compact mini fridge with adjustable temperature control and small freezer compartment.",
    price: 149.99,
    category_id: "Refrigerators",
    manufacturer_id: "Tech Wizards",
    stock_Available: 15,
    photo: "https://m.media-amazon.com/images/I/81GOA8TH+XL.jpg",
    percentage_offer: 0
  },
  {
    name: "Top Freezer Refrigerator",
    description: "Traditional top freezer refrigerator with spacious storage and energy-efficient design.",
    price: 699.99,
    category_id: "Refrigerators",
    manufacturer_id: "TechHome",
    stock_Available: 8,
    photo: "https://www.biancos.com/files/image/attachment/6379/1MRT118FFFE1.jpg",
    percentage_offer: 0
  },
  {
    name: "Bottom Freezer Refrigerator",
    description: "Refrigerator with a bottom freezer drawer for easy access to frozen foods and adjustable shelves.",
    price: 799.99,
    category_id: "Refrigerators",
    manufacturer_id: "PowerTech Appliances",
    stock_Available: 12,
    photo: "https://tvguru.co.ke/wp-content/uploads/2021/11/Samsung-323-Litres-RB-33T307058-Bespoke-Bottom-Mount-Freezer-Refrigerator-open.webp",
    percentage_offer: 0
  }
  ,
  // microhondas
  {
    name: "Countertop Microwave",
    description: "Compact countertop microwave with multiple power levels and preset cooking options.",
    price: 79.99,
    category_id: "Microwaves",
    manufacturer_id: "TechHome",
    stock_Available: 10,
    photo: "https://s42814.pcdn.co/wp-content/uploads/2022/01/best_small_microwave_panel-scaled.jpg.optimal.jpg",
    percentage_offer: 0
  },
  {
    name: "Over-the-Range Microwave",
    description: "Space-saving over-the-range microwave with built-in exhaust fan and sensor cooking.",
    price: 299.99,
    category_id: "Microwaves",
    manufacturer_id: "PowerTech Appliances",
    stock_Available: 5,
    photo: "https://www.ikea.com/us/en/images/products/medelniva-over-the-range-microwave-stainless-steel__0895627_pe782379_s5.jpg?f=s",
    percentage_offer: 0
  },
  {
    name: "Microwave with Grill Function",
    description: "Microwave with integrated grill for versatile cooking and browning capabilities.",
    price: 149.99,
    category_id: "Microwaves",
    manufacturer_id: "Tech Wizards",
    stock_Available: 15,
    photo: "https://cdn.shopify.com/s/files/1/2155/6875/collections/Untitled-6_ff93d201-642a-4358-a233-29a172fa8b24_1200x1200.jpg?v=1657094072",
    percentage_offer: 0
  },
  {
    name: "Built-In Microwave Drawer",
    description: "Sleek built-in microwave drawer with touch controls and automatic opening/closing.",
    price: 699.99,
    category_id: "Microwaves",
    manufacturer_id: "TechHome",
    stock_Available: 8,
    photo: "https://cdn.shopify.com/s/files/1/0581/9547/6573/products/sharpmwdrawerkb6524psybg2.webp?v=1669827848",
    percentage_offer: 0
  },
  {
    name: "Compact Microwave Oven",
    description: "Compact microwave oven with digital controls and quick-cook functions.",
    price: 89.99,
    category_id: "Microwaves",
    manufacturer_id: "PowerTech Appliances",
    stock_Available: 12,
    photo: "https://i5.walmartimages.com/asr/d21694bb-9d54-4ef7-b7b4-c0266ef8de98.feda21d2b5ee8763cc58b5c4b06d736b.jpeg",
    percentage_offer: 0
  }
  ,
  // electrodomesticos pequeños
  {
    name: "Toaster",
    description: "2-slice toaster with variable browning settings and removable crumb tray.",
    price: 29.99,
    category_id: "Small Kitchen Appliances",
    manufacturer_id: "TechHome",
    stock_Available: 10,
    photo: "https://cb.scene7.com/is/image/Crate/CuisinartClassicTostrSSF20/$web_pdp_main_carousel_zoom_low$/201029182257/cuisinart-classic-2-slice-toaster.jpg",
    percentage_offer: 0
  },
  {
    name: "Electric Kettle",
    description: "Electric kettle with rapid boiling function and automatic shut-off.",
    price: 39.99,
    category_id: "Small Kitchen Appliances",
    manufacturer_id: "PowerTech Appliances",
    stock_Available: 5,
    photo: "https://cdn.shopify.com/s/files/1/0277/5610/1732/products/KW-1365_1000x.jpg?v=1671076136",
    percentage_offer: 0
  },
  {
    name: "Hand Blender",
    description: "Hand blender with multiple speed settings and detachable blending arm.",
    price: 49.99,
    category_id: "Small Kitchen Appliances",
    manufacturer_id: "Tech Wizards",
    stock_Available: 15,
    photo: "https://m.media-amazon.com/images/I/815s4puX+SL.jpg",
    percentage_offer: 0
  },
  {
    name: "Food Processor",
    description: "Compact food processor with slicing, chopping, and shredding capabilities.",
    price: 89.99,
    category_id: "Small Kitchen Appliances",
    manufacturer_id: "TechHome",
    stock_Available: 8,
    photo: "https://food.fnr.sndimg.com/content/dam/images/food/products/2019/4/24/rx_cuisinart-elemental-13-cup-food-processor.jpeg.rend.hgtvcom.616.616.suffix/1556133605985.jpeg",
    percentage_offer: 0
  },
  {
    name: "Electric Mixer",
    description: "Electric mixer with multiple speed settings and interchangeable attachments.",
    price: 79.99,
    category_id: "Small Kitchen Appliances",
    manufacturer_id: "PowerTech Appliances",
    stock_Available: 12,
    photo: "https://m.media-amazon.com/images/I/71cbCSNVeDL.jpg",
    percentage_offer: 0
  }
  ,
  // aires acondicionados
  {
    name: "Split Air Conditioner",
    description: "Energy-efficient split air conditioner with cooling and heating capabilities.",
    price: 499.99,
    category_id: "Air Conditioners",
    manufacturer_id: "TechHome",
    stock_Available: 10,
    photo: "https://lirp.cdn-website.com/eb02f697/dms3rep/multi/opt/Package+Unit+and+Split+System+Air+Conditioner-1920w.jpg",
    percentage_offer: 0
  },
  {
    name: "Window Air Conditioner",
    description: "Compact window air conditioner with remote control and adjustable cooling settings.",
    price: 349.99,
    category_id: "Air Conditioners",
    manufacturer_id: "PowerTech Appliances",
    stock_Available: 5,
    photo: "https://www.etonline.com/sites/default/files/images/2022-06/air.jpeg",
    percentage_offer: 0
  },
  {
    name: "Portable Air Conditioner",
    description: "Portable air conditioner with built-in dehumidifier and programmable timer.",
    price: 399.99,
    category_id: "Air Conditioners",
    manufacturer_id: "Tech Wizards",
    stock_Available: 15,
    photo: "https://pyxis.nymag.com/v1/imgs/9b1/310/061d2ff4f179fe626e15ca0f45327d51e7-portable-ac-unit.2x.rsocial.w600.jpg",
    percentage_offer: 0
  },
  {
    name: "Ductless Mini Split",
    description: "Ductless mini split air conditioner with multiple air handling units for zone cooling.",
    price: 999.99,
    category_id: "Air Conditioners",
    manufacturer_id: "TechHome",
    stock_Available: 8,
    photo: "https://hvacdirect.com/media/catalog/category/ACIQ_REBRAND_NEW-STICKER_SINGLE_1.jpg",
    percentage_offer: 0
  },
  {
    name: "Smart Wi-Fi Air Conditioner",
    description: "Wi-Fi-enabled air conditioner with smart features and voice control compatibility.",
    price: 599.99,
    category_id: "Air Conditioners",
    manufacturer_id: "PowerTech Appliances",
    stock_Available: 12,
    photo: "https://moeshouse.com/cdn/shop/products/16a-wifi-smart-air-conditioner-companion-ir-wireless-remote-controller-wall-plug-de-eu-version-175066.jpg?v=1615966113&width=1445",
    percentage_offer: 0
  }
  ,
  // televisores
  {
    name: "Smart LED TV",
    description: "High-definition smart LED TV with built-in Wi-Fi and streaming capabilities.",
    price: 699.99,
    category_id: "Televisions",
    manufacturer_id: "ABC Electronics",
    stock_Available: 10,
    photo: "https://images.philips.com/is/image/philipsconsumer/08fdbd7d447644d1b3d4afb901202f0f?$jpglarge$&wid=960",
    percentage_offer: 0
  },
  {
    name: "4K Ultra HD TV",
    description: "Ultra HD 4K TV with HDR technology for stunning picture quality and vibrant colors.",
    price: 999.99,
    category_id: "Televisions",
    manufacturer_id: "DigitalEvo",
    stock_Available: 5,
    photo: "https://tutiendabancor.com.ar/media/catalog/product/cache/9c08c714c8eb7e564db9a133e4630037/t/e/tel7585ssg.jpg",
    percentage_offer: 0
  },
  {
    name: "Curved OLED TV",
    description: "Immersive curved OLED TV with deep black levels and wide viewing angles.",
    price: 1.499.99,
    category_id: "Televisions",
    manufacturer_id: "GHI Edge",
    stock_Available: 15,
    photo: "https://www.fravega.com/arquivos/nueva-lg-oled_04.jpg?v=635580472910630000",
    percentage_offer: 0
  },
  {
    name: "QLED TV",
    description: "QLED TV with Quantum Dot technology for enhanced color accuracy and brightness.",
    price: 1.299.99,
    category_id: "Televisions",
    manufacturer_id: "ABC Electronics",
    stock_Available: 8,
    photo: "https://image-us.samsung.com/SamsungUS/home/television-home-theater/tvs/03242023/QN85B.jpg",
    percentage_offer: 0
  },
  {
    name: "Outdoor TV",
    description: "Weatherproof outdoor TV with high brightness for clear viewing even in sunlight.",
    price: 1.999.99,
    category_id: "Televisions",
    manufacturer_id: "DigitalEvo",
    stock_Available: 12,
    photo: "https://manuals.plus/wp-content/uploads/2022/04/SEURA-UB4-85-Full-Sun-Series-85-Inch-4K-Ultra-HD-LED-Outdoor-TV-featured.jpg",
    percentage_offer: 0
  }
  ,
  // parlantes
  {
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with built-in rechargeable battery and wireless connectivity.",
    price: 79.99,
    category_id: "Speakers",
    manufacturer_id: "ABC Electronics",
    stock_Available: 10,
    photo: "https://m.media-amazon.com/images/I/71NznE3KmKL.jpg",
    percentage_offer: 0
  },
  {
    name: "Bookshelf Speakers",
    description: "Compact bookshelf speakers with powerful sound output and versatile placement options.",
    price: 199.99,
    category_id: "Speakers",
    manufacturer_id: "DigitalEvo",
    stock_Available: 5,
    photo: "https://www.popsci.com/uploads/2021/07/18/Edifer_productcard.jpg?auto=webp",
    percentage_offer: 0
  },
  {
    name: "Soundbar",
    description: "Slim soundbar with virtual surround sound and integrated subwoofer for enhanced audio.",
    price: 249.99,
    category_id: "Speakers",
    manufacturer_id: "GHI Edge",
    stock_Available: 15,
    photo: "https://outtec.com.ar/wp-content/uploads/2022/06/8e9f6a4b57107fb65365aaa1d4fd.jpg",
    percentage_offer: 0
  },
  {
    name: "Floorstanding Speakers",
    description: "Floorstanding speakers with high-fidelity audio reproduction and elegant design.",
    price: 499.99,
    category_id: "Speakers",
    manufacturer_id: "ABC Electronics",
    stock_Available: 8,
    photo: "https://cdn.shopify.com/s/files/1/2792/5768/products/NewProject-2022-02-14T101608.400.jpg?v=1644834680",
    percentage_offer: 0
  },
  {
    name: "Wireless Surround Speakers",
    description: "Wireless surround speakers for immersive home theater experience without messy cables.",
    price: 299.99,
    category_id: "Speakers",
    manufacturer_id: "DigitalEvo",
    stock_Available: 12,
    photo: "https://stuffoholics.com/wp-content/uploads/2018/04/wireless-surround-sound.jpg",
    percentage_offer: 0
  }
  ,
  // cosas de computacion
  {
    name: "Laptop",
    description: "Powerful laptop with high-performance specifications and versatile functionality.",
    price: 999.99,
    category_id: "Computers",
    manufacturer_id: "ABC Electronics",
    stock_Available: 10,
    photo: "https://www.hd-tecnologia.com/imagenes/articulos/2022/05/TOP-5-mejores-laptops-para-estudiantes-en-2022-1.jpg",
    percentage_offer: 0
  },
  {
    name: "Wireless Keyboard and Mouse Combo",
    description: "Wireless keyboard and mouse set with ergonomic design and reliable connectivity.",
    price: 49.99,
    category_id: "Computers",
    manufacturer_id: "DigitalEvo",
    stock_Available: 5,
    photo: "https://m.media-amazon.com/images/I/71FxRn-grSL.jpg",
    percentage_offer: 0
  },
  {
    name: "External Hard Drive",
    description: "Portable external hard drive with large storage capacity and fast data transfer.",
    price: 89.99,
    category_id: "Computers",
    manufacturer_id: "GHI Edge",
    stock_Available: 15,
    photo: "https://m.economictimes.com/thumb/msid-92980317,width-1500,height-993,resizemode-4,imgsize-41322/external-hard-drive.jpg",
    percentage_offer: 0
  },
  {
    name: "Gaming Keyboard",
    description: "Mechanical gaming keyboard with customizable RGB lighting and programmable keys.",
    price: 79.99,
    category_id: "Computers",
    manufacturer_id: "ABC Electronics",
    stock_Available: 8,
    photo: "https://cdn.eteknix.com/wp-content/uploads/2022/11/Gaming-set.jpg",
    percentage_offer: 0
  },
  {
    name: "Wireless Bluetooth Headset",
    description: "Wireless Bluetooth headset with noise-canceling technology and long battery life.",
    price: 129.99,
    category_id: "Computers",
    manufacturer_id: "DigitalEvo",
    stock_Available: 12,
    photo: "https://importessv.com/wp-content/uploads/2021/01/Imagenes-de-art.-3-1.png",
    percentage_offer: 0
  }
  ,
  // muebles
  {
    name: "Sofa",
    description: "Comfortable sofa with stylish design and plush cushions.",
    price: 899.99,
    category_id: "Furniture",
    manufacturer_id: "UrbanLiving",
    stock_Available: 10,
    photo: "https://images.hola.com/imagenes/decoracion/20210618191638/elegir-color-sofa-decoracion-salones-il/0-965-545/como-elegir-el-color-del-sofa-10a-a.jpg",
    percentage_offer: 0
  },
  {
    name: "Dining Table Set",
    description: "Elegant dining table set with chairs for family meals and gatherings.",
    price: 599.99,
    category_id: "Furniture",
    manufacturer_id: "DesignMakers",
    stock_Available: 5,
    photo: "https://s3.amazonaws.com/sierraimages/Images/Product/Large/10301.jpg",
    percentage_offer: 0
  },
  {
    name: "Bed Frame",
    description: "Sturdy bed frame with headboard and footboard for a comfortable sleep experience.",
    price: 499.99,
    category_id: "Furniture",
    manufacturer_id: "StyleCraft",
    stock_Available: 15,
    photo: "https://www.ikea.com/us/en/images/products/hemnes-bed-frame-black-brown-luroey__1101517_pe866696_s5.jpg",
    percentage_offer: 0
  },
  {
    name: "TV Stand",
    description: "Modern TV stand with ample storage space for media devices and accessories.",
    price: 299.99,
    category_id: "Furniture",
    manufacturer_id: "UrbanLiving",
    stock_Available: 8,
    photo: "https://images.thdstatic.com/productImages/9441fd93-ab7a-4269-a369-fdd26ece8739/svn/black-j-e-home-tv-stands-gd-w67933435-64_600.jpg",
    percentage_offer: 0
  },
  {
    name: "Office Desk",
    description: "Spacious office desk with drawers and shelves for an organized workspace.",
    price: 399.99,
    category_id: "Furniture",
    manufacturer_id: "DesignMakers",
    stock_Available: 12,
    photo: "https://cdn.shopify.com/s/files/1/1557/9661/products/MF-22MKD163LeftRet-1000_1024x1024.jpg?v=1674529783",
    percentage_offer: 0
  }
  ,
  {
    name: "Bookshelf",
    description: "Stylish bookshelf with multiple shelves for organizing and displaying books and decor.",
    price: 249.99,
    category_id: "Furniture",
    manufacturer_id: "StyleCraft",
    stock_Available: 10,
    photo: "https://www.whalenfurniture.com/wp-content/uploads/2021/01/00764053525032_SWAV1-scaled-1.jpg",
    percentage_offer: 0
  },
  {
    name: "Chest of Drawers",
    description: "Functional chest of drawers with spacious storage compartments for clothing and accessories.",
    price: 349.99,
    category_id: "Furniture",
    manufacturer_id: "UrbanLiving",
    stock_Available: 5,
    photo: "https://cdn.shopify.com/s/files/1/2268/9819/products/Stevie_3_4_Chest_White_Main_S1_1500x.jpg?v=1613571750",
    percentage_offer: 0
  },
  {
    name: "Coffee Table",
    description: "Modern coffee table with a sleek design and a convenient lower shelf for storage.",
    price: 179.99,
    category_id: "Furniture",
    manufacturer_id: "DesignMakers",
    stock_Available: 15,
    photo: "https://images.woodenstreet.de/image/data/coffee-tables-mdf/escobar-coffee-table/exotic-teak/updated%20new/1.jpg",
    percentage_offer: 0
  },
  {
    name: "Accent Chair",
    description: "Comfortable accent chair with an eye-catching design, perfect for adding style to any room.",
    price: 299.99,
    category_id: "Furniture",
    manufacturer_id: "StyleCraft",
    stock_Available: 8,
    photo: "https://ak1.ostkcdn.com/images/products/is/images/direct/b476e2cc5a64b42b4bc9a5f8727659b583a125b9/Levine-Accent-Chair.jpg",
    percentage_offer: 0
  },
  {
    name: "Wardrobe Closet",
    description: "Spacious wardrobe closet with hanging rods and shelves for organizing clothing and accessories.",
    price: 599.99,
    category_id: "Furniture",
    manufacturer_id: "UrbanLiving",
    stock_Available: 12,
    photo: "https://m.media-amazon.com/images/I/71zAaIM-zcL.jpg",
    percentage_offer: 0
  }  
]