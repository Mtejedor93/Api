export default function handler(req, res) {
    // Configurar encabezados CORS
  res.setHeader('Access-Control-Allow-Origin', '*'); // o tu dominio específico
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Manejar preflight request (OPTIONS)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  res.status(200).json(
    {
      total:30,
      limit:10,
      offset:0,
      results:10,
      data:[
       {
      "id": 1,
      "name": "Alejandro Ramírez gonzález",
      "nit": "901567916",
      "address": "Cra 78 #12-34",
      "neighborhood": "Soledad, Atlántico",
      "phone": "3151234567",
      "email": "alejandro.ramirez@example.com",
      "services": [
        {
          "idService": 1,
          "technician": "Carolina Díaz",
          "electricAppliance": "Refrigerador",
          "brand": "Samsung",
          "model": "RT38K5932S8",
          "typeService": "Mantenimiento",
          "descriptionService": "Cambio de termostato.",
          "dateService": "2026-03-22",
          "statusService": "Completado",
          "bill": [
            {
              "idBill": 1,
              "dateBill": "2026-03-23",
              "typeBill": "Mantenimiento",
              "items": [
                {
                  "item": "Termostato",
                  "cost": 45
                }
              ],
              "totalBillCost": 45,
              "billPaymentStatus": "Paid"
            }
          ]
        },
        {
          "idService": 2,
          "technician": "Luis Herrera",
          "electricAppliance": "Lavadora",
          "brand": "LG",
          "model": "WT18DV6",
          "typeService": "Reparación",
          "descriptionService": "Cambio de bomba de agua.",
          "dateService": "2026-04-02",
          "statusService": "Pendiente",
          "bill": []
        }
      ]
    },
    {
      "id": 2,
      "name": "María González",
      "nit": "900234111",
      "address": "Cll 45 #18-22",
      "neighborhood": "Centro, Barranquilla",
      "phone": "3004567890",
      "email": "maria.gonzalez@example.com",
      "services": [
        {
          "idService": 3,
          "technician": "Andrea López",
          "electricAppliance": "Nevera",
          "brand": "Whirlpool",
          "model": "WRX735SDHZ",
          "typeService": "Instalación",
          "descriptionService": "Instalación y nivelación.",
          "dateService": "2026-01-10",
          "statusService": "Completado",
          "bill": [
            {
              "idBill": 2,
              "dateBill": "2026-01-10",
              "typeBill": "Instalación",
              "items": [
                {
                  "item": "Servicio de instalación",
                  "cost": 60
                }
              ],
              "totalBillCost": 60,
              "billPaymentStatus": "Paid"
            }
          ]
        },
        {
          "idService": 4,
          "technician": "Andrea López",
          "electricAppliance": "Nevera",
          "brand": "Whirlpool",
          "model": "WRX735SDHZ",
          "typeService": "Mantenimiento",
          "descriptionService": "Limpieza de serpentín.",
          "dateService": "2026-06-15",
          "statusService": "Pendiente",
          "bill": []
        }
      ]
    },
    {
      "id": 3,
      "name": "Carlos Méndez",
      "nit": "901112233",
      "address": "Cra 10 #55-90",
      "neighborhood": "El Prado, Barranquilla",
      "phone": "3129876543",
      "email": "carlos.mendez@example.com",
      "services": [
        {
          "idService": 5,
          "technician": "Miguel Torres",
          "electricAppliance": "Congelador",
          "brand": "Mabe",
          "model": "CHM11BPL",
          "typeService": "Mantenimiento",
          "descriptionService": "Limpieza general.",
          "dateService": "2026-02-12",
          "statusService": "Completado",
          "bill": [
            {
              "idBill": 3,
              "dateBill": "2026-02-12",
              "typeBill": "Mantenimiento",
              "items": [
                {
                  "item": "Servicio técnico",
                  "cost": 50
                }
              ],
              "totalBillCost": 50,
              "billPaymentStatus": "Paid"
            }
          ]
        },
        {
          "idService": 6,
          "technician": "Miguel Torres",
          "electricAppliance": "Congelador",
          "brand": "Mabe",
          "model": "CHM11BPL",
          "typeService": "Reparación",
          "descriptionService": "Cambio de relay.",
          "dateService": "2026-02-20",
          "statusService": "Pendiente",
          "bill": []
        }
      ]
    },
    {
      "id": 4,
      "name": "Juan Pérez",
      "nit": "900998877",
      "address": "Cra 30 #40-12",
      "neighborhood": "Los Andes, Barranquilla",
      "phone": "3016549870",
      "email": "juan.perez@example.com",
      "services": [
        {
          "idService": 7,
          "technician": "Luis Herrera",
          "electricAppliance": "Lavadora",
          "brand": "Samsung",
          "model": "WA17T6260BV",
          "typeService": "Mantenimiento",
          "descriptionService": "Ajuste de suspensión.",
          "dateService": "2026-03-01",
          "statusService": "Completado",
          "bill": [
            {
              "idBill": 4,
              "dateBill": "2026-03-01",
              "typeBill": "Mantenimiento",
              "items": [
                {
                  "item": "Mano de obra",
                  "cost": 40
                }
              ],
              "totalBillCost": 40,
              "billPaymentStatus": "Paid"
            }
          ]
        },
        {
          "idService": 8,
          "technician": "Luis Herrera",
          "electricAppliance": "Lavadora",
          "brand": "Samsung",
          "model": "WA17T6260BV",
          "typeService": "Reparación",
          "descriptionService": "Cambio de capacitor.",
          "dateService": "2026-05-18",
          "statusService": "Pendiente",
          "bill": []
        }
      ]
    },
    {
      "id": 5,
      "name": "Laura Castro",
      "nit": "901445566",
      "address": "Cll 72 #60-45",
      "neighborhood": "Riomar, Barranquilla",
      "phone": "3167891234",
      "email": "laura.castro@example.com",
      "services": [
        {
          "idService": 9,
          "technician": "Carolina Díaz",
          "electricAppliance": "Lavadora",
          "brand": "Samsung",
          "model": "WA17T6260BV",
          "typeService": "Mantenimiento",
          "descriptionService": "Revisión general.",
          "dateService": "2026-02-28",
          "statusService": "Completado",
          "bill": [
            {
              "idBill": 5,
              "dateBill": "2026-02-28",
              "typeBill": "Mantenimiento",
              "items": [
                {
                  "item": "Servicio técnico",
                  "cost": 45
                }
              ],
              "totalBillCost": 45,
              "billPaymentStatus": "Paid"
            }
          ]
        }
      ]
    },
    {
      "id": 6,
      "name": "Pedro Salinas",
      "nit": "900334455",
      "address": "Cra 21 #33-10",
      "neighborhood": "Boston, Barranquilla",
      "phone": "3201112233",
      "email": "pedro.salinas@example.com",
      "services": [
        {
          "idService": 10,
          "technician": "Luis Herrera",
          "electricAppliance": "Refrigerador",
          "brand": "Haceb",
          "model": "Himalaya 404",
          "typeService": "Reparación",
          "descriptionService": "Recarga de gas.",
          "dateService": "2026-03-01",
          "statusService": "Completado",
          "bill": [
            {
              "idBill": 6,
              "dateBill": "2026-03-01",
              "typeBill": "Reparación",
              "items": [
                {
                  "item": "Gas refrigerante",
                  "cost": 85
                }
              ],
              "totalBillCost": 85,
              "billPaymentStatus": "Paid"
            }
          ]
        }
      ]
    },
    {
      "id": 7,
      "name": "Ana Ríos",
      "nit": "901778899",
      "address": "Cll 90 #45-30",
      "neighborhood": "Alto Prado, Barranquilla",
      "phone": "3112223344",
      "email": "ana.rios@example.com",
      "services": [
        {
          "idService": 11,
          "technician": "Andrea López",
          "electricAppliance": "Nevera",
          "brand": "LG",
          "model": "GM84SXDB",
          "typeService": "Mantenimiento",
          "descriptionService": "Revisión general.",
          "dateService": "2026-01-18",
          "statusService": "Completado",
          "bill": [
            {
              "idBill": 7,
              "dateBill": "2026-01-18",
              "typeBill": "Mantenimiento",
              "items": [
                {
                  "item": "Servicio técnico",
                  "cost": 50
                }
              ],
              "totalBillCost": 50,
              "billPaymentStatus": "Paid"
            }
          ]
        }
      ]
    },
    {
      "id": 8,
      "name": "Jorge Molina",
      "nit": "900667788",
      "address": "Cra 8 #15-44",
      "neighborhood": "Rebolo, Barranquilla",
      "phone": "3185556677",
      "email": "jorge.molina@example.com",
      "services": [
        {
          "idService": 12,
          "technician": "Miguel Torres",
          "electricAppliance": "Lavadora",
          "brand": "Whirlpool",
          "model": "8MWTW1934MJM",
          "typeService": "Reparación",
          "descriptionService": "Cambio de correa.",
          "dateService": "2026-02-05",
          "statusService": "Completado",
          "bill": [
            {
              "idBill": 8,
              "dateBill": "2026-02-05",
              "typeBill": "Reparación",
              "items": [
                {
                  "item": "Correa",
                  "cost": 35
                }
              ],
              "totalBillCost": 35,
              "billPaymentStatus": "Paid"
            }
          ]
        }
      ]
    },
    {
      "id": 9,
      "name": "Sofía Luna",
      "nit": "901999888",
      "address": "Cll 50 #20-60",
      "neighborhood": "Olaya, Barranquilla",
      "phone": "3146667788",
      "email": "sofia.luna@example.com",
      "services": [
        {
          "idService": 13,
          "technician": "Carolina Díaz",
          "electricAppliance": "Congelador",
          "brand": "Indurama",
          "model": "CI-300",
          "typeService": "Instalación",
          "descriptionService": "Instalación eléctrica.",
          "dateService": "2026-03-12",
          "statusService": "Pendiente",
          "bill": []
        }
      ]
    },
    {
      "id": 10,
      "name": "Ricardo Pacheco",
      "nit": "900112244",
      "address": "Cra 43 #70-15",
      "neighborhood": "Riomar, Barranquilla",
      "phone": "3178889999",
      "email": "ricardo.pacheco@example.com",
      "services": [
        {
          "idService": 14,
          "technician": "Luis Herrera",
          "electricAppliance": "Nevera",
          "brand": "Samsung",
          "model": "RB34T600ESA",
          "typeService": "Mantenimiento",
          "descriptionService": "Limpieza interna.",
          "dateService": "2026-02-20",
          "statusService": "Completado",
          "bill": [
            {
              "idBill": 9,
              "dateBill": "2026-02-20",
              "typeBill": "Mantenimiento",
              "items": [
                {
                  "item": "Servicio técnico",
                  "cost": 55
                }
              ],
              "totalBillCost": 55,
              "billPaymentStatus": "Paid"
            }
          ]
        }
      ]
    },
    {
      "id": 11,
      "name": "Daniel Ortega",
      "nit": "900556677",
      "address": "Cra 12 #34-56",
      "neighborhood": "La Victoria, Barranquilla",
      "phone": "3191112233",
      "email": "daniel.ortega@example.com",
      "services": [
        {
          "idService": 15,
          "technician": "Miguel Torres",
          "electricAppliance": "Lavadora",
          "brand": "LG",
          "model": "WT19MV6",
          "typeService": "Reparación",
          "descriptionService": "Cambio de válvula de entrada.",
          "dateService": "2026-04-10",
          "statusService": "Completado",
          "bill": [
            {
              "idBill": 10,
              "dateBill": "2026-04-10",
              "typeBill": "Reparación",
              "items": [
                {
                  "item": "Válvula de entrada",
                  "cost": 48
                }
              ],
              "totalBillCost": 48,
              "billPaymentStatus": "Paid"
            }
          ]
        }
      ]
    },
    {
      "id": 12,
      "name": "Paola Jiménez",
      "nit": "901223344",
      "address": "Cll 80 #45-12",
      "neighborhood": "Villa Santos, Barranquilla",
      "phone": "3134445566",
      "email": "paola.jimenez@example.com",
      "services": [
        {
          "idService": 16,
          "technician": "Carolina Díaz",
          "electricAppliance": "Nevera",
          "brand": "Haceb",
          "model": "Titanium 410",
          "typeService": "Mantenimiento",
          "descriptionService": "Ajuste de puertas.",
          "dateService": "2026-03-08",
          "statusService": "Completado",
          "bill": [
            {
              "idBill": 11,
              "dateBill": "2026-03-08",
              "typeBill": "Mantenimiento",
              "items": [
                {
                  "item": "Servicio técnico",
                  "cost": 42
                }
              ],
              "totalBillCost": 42,
              "billPaymentStatus": "Paid"
            }
          ]
        }
      ]
    },
    {
      "id": 13,
      "name": "Felipe Navarro",
      "nit": "900778899",
      "address": "Cra 6 #22-10",
      "neighborhood": "San Roque, Barranquilla",
      "phone": "3105556677",
      "email": "felipe.navarro@example.com",
      "services": [
        {
          "idService": 17,
          "technician": "Luis Herrera",
          "electricAppliance": "Congelador",
          "brand": "Indurama",
          "model": "CI-200",
          "typeService": "Reparación",
          "descriptionService": "Cambio de ventilador.",
          "dateService": "2026-05-02",
          "statusService": "Pendiente",
          "bill": []
        }
      ]
    },
    {
      "id": 14,
      "name": "Camila Duarte",
      "nit": "901334455",
      "address": "Cll 65 #40-20",
      "neighborhood": "Las Delicias, Barranquilla",
      "phone": "3162223344",
      "email": "camila.duarte@example.com",
      "services": [
        {
          "idService": 18,
          "technician": "Andrea López",
          "electricAppliance": "Lavadora",
          "brand": "Samsung",
          "model": "WA18T6260BV",
          "typeService": "Mantenimiento",
          "descriptionService": "Limpieza profunda.",
          "dateService": "2026-02-22",
          "statusService": "Completado",
          "bill": [
            {
              "idBill": 12,
              "dateBill": "2026-02-22",
              "typeBill": "Mantenimiento",
              "items": [
                {
                  "item": "Servicio técnico",
                  "cost": 50
                }
              ],
              "totalBillCost": 50,
              "billPaymentStatus": "Paid"
            }
          ]
        }
      ]
    },
    {
      "id": 15,
      "name": "Andrés Vega",
      "nit": "900889900",
      "address": "Cra 50 #90-12",
      "neighborhood": "Altos del Limón, Barranquilla",
      "phone": "3189990001",
      "email": "andres.vega@example.com",
      "services": [
        {
          "idService": 19,
          "technician": "Miguel Torres",
          "electricAppliance": "Nevera",
          "brand": "LG",
          "model": "GN-B392PL",
          "typeService": "Reparación",
          "descriptionService": "Cambio de sensor.",
          "dateService": "2026-04-18",
          "statusService": "Pendiente",
          "bill": []
        }
      ]
    },
    {
      "id": 16,
      "name": "Natalia Suárez",
      "nit": "901556677",
      "address": "Cll 30 #18-55",
      "neighborhood": "El Recreo, Barranquilla",
      "phone": "3120001112",
      "email": "natalia.suarez@example.com",
      "services": [
        {
          "idService": 20,
          "technician": "Carolina Díaz",
          "electricAppliance": "Lavadora",
          "brand": "Whirlpool",
          "model": "7MWTW1904",
          "typeService": "Mantenimiento",
          "descriptionService": "Revisión general.",
          "dateService": "2026-03-14",
          "statusService": "Completado",
          "bill": [
            {
              "idBill": 13,
              "dateBill": "2026-03-14",
              "typeBill": "Mantenimiento",
              "items": [
                {
                  "item": "Servicio técnico",
                  "cost": 45
                }
              ],
              "totalBillCost": 45,
              "billPaymentStatus": "Paid"
            }
          ]
        }
      ]
    },
    {
      "id": 17,
      "name": "Héctor Molina",
      "nit": "900101010",
      "address": "Cra 25 #44-33",
      "neighborhood": "San Isidro, Barranquilla",
      "phone": "3142223334",
      "email": "hector.molina@example.com",
      "services": [
        {
          "idService": 21,
          "technician": "Luis Herrera",
          "electricAppliance": "Refrigerador",
          "brand": "Samsung",
          "model": "RT29K500JS8",
          "typeService": "Reparación",
          "descriptionService": "Cambio de timer.",
          "dateService": "2026-04-05",
          "statusService": "Completado",
          "bill": [
            {
              "idBill": 14,
              "dateBill": "2026-04-05",
              "typeBill": "Reparación",
              "items": [
                {
                  "item": "Timer",
                  "cost": 52
                }
              ],
              "totalBillCost": 52,
              "billPaymentStatus": "Paid"
            }
          ]
        }
      ]
    },
    {
      "id": 18,
      "name": "Diana Pineda",
      "nit": "901909090",
      "address": "Cll 10 #5-20",
      "neighborhood": "La Luz, Barranquilla",
      "phone": "3204445566",
      "email": "diana.pineda@example.com",
      "services": [
        {
          "idService": 22,
          "technician": "Andrea López",
          "electricAppliance": "Congelador",
          "brand": "Mabe",
          "model": "CHM7BPL",
          "typeService": "Mantenimiento",
          "descriptionService": "Limpieza de serpentín.",
          "dateService": "2026-02-09",
          "statusService": "Completado",
          "bill": [
            {
              "idBill": 15,
              "dateBill": "2026-02-09",
              "typeBill": "Mantenimiento",
              "items": [
                {
                  "item": "Servicio técnico",
                  "cost": 48
                }
              ],
              "totalBillCost": 48,
              "billPaymentStatus": "Paid"
            }
          ]
        }
      ]
    },
    {
      "id": 19,
      "name": "Óscar Mejía",
      "nit": "900303030",
      "address": "Cra 18 #60-14",
      "neighborhood": "Nueva Granada, Barranquilla",
      "phone": "3115556667",
      "email": "oscar.mejia@example.com",
      "services": [
        {
          "idService": 23,
          "technician": "Miguel Torres",
          "electricAppliance": "Lavadora",
          "brand": "LG",
          "model": "WT17BS",
          "typeService": "Reparación",
          "descriptionService": "Cambio de motor.",
          "dateService": "2026-05-06",
          "statusService": "Pendiente",
          "bill": []
        }
      ]
    },
    {
      "id": 20,
      "name": "Valentina Rojas",
      "nit": "901121212",
      "address": "Cll 100 #49-30",
      "neighborhood": "Buenavista, Barranquilla",
      "phone": "3172224445",
      "email": "valentina.rojas@example.com",
      "services": [
        {
          "idService": 24,
          "technician": "Carolina Díaz",
          "electricAppliance": "Nevera",
          "brand": "Whirlpool",
          "model": "WRF535SWHZ",
          "typeService": "Instalación",
          "descriptionService": "Instalación y pruebas.",
          "dateService": "2026-03-30",
          "statusService": "Completado",
          "bill": [
            {
              "idBill": 16,
              "dateBill": "2026-03-30",
              "typeBill": "Instalación",
              "items": [
                {
                  "item": "Servicio de instalación",
                  "cost": 65
                }
              ],
              "totalBillCost": 65,
              "billPaymentStatus": "Paid"
            }
          ]
        }
      ]
    },
    {
      "id": 21,
      "name": "Mauricio León",
      "nit": "900454545",
      "address": "Cra 9 #14-80",
      "neighborhood": "La Magdalena, Barranquilla",
      "phone": "3136667778",
      "email": "mauricio.leon@example.com",
      "services": [
        {
          "idService": 25,
          "technician": "Luis Herrera",
          "electricAppliance": "Congelador",
          "brand": "Indurama",
          "model": "CI-400",
          "typeService": "Reparación",
          "descriptionService": "Cambio de compresor.",
          "dateService": "2026-05-12",
          "statusService": "Pendiente",
          "bill": []
        }
      ]
    },
    {
      "id": 22,
      "name": "Juliana Torres",
      "nit": "901343434",
      "address": "Cll 58 #36-10",
      "neighborhood": "Ciudad Jardín, Barranquilla",
      "phone": "3108889990",
      "email": "juliana.torres@example.com",
      "services": [
        {
          "idService": 26,
          "technician": "Andrea López",
          "electricAppliance": "Lavadora",
          "brand": "Samsung",
          "model": "WA16T5260",
          "typeService": "Mantenimiento",
          "descriptionService": "Calibración y prueba.",
          "dateService": "2026-02-26",
          "statusService": "Completado",
          "bill": [
            {
              "idBill": 17,
              "dateBill": "2026-02-26",
              "typeBill": "Mantenimiento",
              "items": [
                {
                  "item": "Servicio técnico",
                  "cost": 47
                }
              ],
              "totalBillCost": 47,
              "billPaymentStatus": "Paid"
            }
          ]
        }
      ]
    },
    {
      "id": 23,
      "name": "Sebastián Fuentes",
      "nit": "900565656",
      "address": "Cra 27 #52-11",
      "neighborhood": "Las Nieves, Barranquilla",
      "phone": "3181112223",
      "email": "sebastian.fuentes@example.com",
      "services": [
        {
          "idService": 27,
          "technician": "Miguel Torres",
          "electricAppliance": "Nevera",
          "brand": "LG",
          "model": "GN-C372",
          "typeService": "Reparación",
          "descriptionService": "Cambio de tarjeta electrónica.",
          "dateService": "2026-04-22",
          "statusService": "Pendiente",
          "bill": []
        }
      ]
    },
    {
      "id": 24,
      "name": "Paula Cárdenas",
      "nit": "901787878",
      "address": "Cll 42 #28-19",
      "neighborhood": "Chiquinquirá, Barranquilla",
      "phone": "3147778889",
      "email": "paula.cardenas@example.com",
      "services": [
        {
          "idService": 28,
          "technician": "Carolina Díaz",
          "electricAppliance": "Lavadora",
          "brand": "Whirlpool",
          "model": "6MWTW1934",
          "typeService": "Mantenimiento",
          "descriptionService": "Limpieza interna.",
          "dateService": "2026-03-05",
          "statusService": "Completado",
          "bill": [
            {
              "idBill": 18,
              "dateBill": "2026-03-05",
              "typeBill": "Mantenimiento",
              "items": [
                {
                  "item": "Servicio técnico",
                  "cost": 44
                }
              ],
              "totalBillCost": 44,
              "billPaymentStatus": "Paid"
            }
          ]
        }
      ]
    },
    {
      "id": 25,
      "name": "Julián Morales",
      "nit": "900989898",
      "address": "Cra 35 #75-44",
      "neighborhood": "Paraíso, Barranquilla",
      "phone": "3193334445",
      "email": "julian.morales@example.com",
      "services": [
        {
          "idService": 29,
          "technician": "Luis Herrera",
          "electricAppliance": "Refrigerador",
          "brand": "Haceb",
          "model": "Titanium 380",
          "typeService": "Mantenimiento",
          "descriptionService": "Ajuste de termostato.",
          "dateService": "2026-02-14",
          "statusService": "Completado",
          "bill": [
            {
              "idBill": 19,
              "dateBill": "2026-02-14",
              "typeBill": "Mantenimiento",
              "items": [
                {
                  "item": "Servicio técnico",
                  "cost": 46
                }
              ],
              "totalBillCost": 46,
              "billPaymentStatus": "Paid"
            }
          ]
        }
      ]
    },
    {
      "id": 26,
      "name": "Lorena Castillo",
      "nit": "901676767",
      "address": "Cll 85 #52-10",
      "neighborhood": "Miramar, Barranquilla",
      "phone": "3128889991",
      "email": "lorena.castillo@example.com",
      "services": [
        {
          "idService": 30,
          "technician": "Andrea López",
          "electricAppliance": "Congelador",
          "brand": "Mabe",
          "model": "CHM5BPL",
          "typeService": "Instalación",
          "descriptionService": "Instalación eléctrica.",
          "dateService": "2026-03-18",
          "statusService": "Completado",
          "bill": [
            {
              "idBill": 20,
              "dateBill": "2026-03-18",
              "typeBill": "Instalación",
              "items": [
                {
                  "item": "Servicio de instalación",
                  "cost": 58
                }
              ],
              "totalBillCost": 58,
              "billPaymentStatus": "Paid"
            }
          ]
        }
      ]
    },
    {
      "id": 27,
      "name": "Miguel Ángel Soto",
      "nit": "900232323",
      "address": "Cra 14 #40-66",
      "neighborhood": "San Felipe, Barranquilla",
      "phone": "3159990002",
      "email": "miguel.soto@example.com",
      "services": [
        {
          "idService": 31,
          "technician": "Miguel Torres",
          "electricAppliance": "Nevera",
          "brand": "Samsung",
          "model": "RT32K5932",
          "typeService": "Reparación",
          "descriptionService": "Cambio de resistencia.",
          "dateService": "2026-05-20",
          "statusService": "Pendiente",
          "bill": []
        }
      ]
    },
    {
      "id": 28,
      "name": "Andrea Beltrán",
      "nit": "901454545",
      "address": "Cll 66 #39-12",
      "neighborhood": "Los Nogales, Barranquilla",
      "phone": "3165556667",
      "email": "andrea.beltran@example.com",
      "services": [
        {
          "idService": 32,
          "technician": "Carolina Díaz",
          "electricAppliance": "Lavadora",
          "brand": "LG",
          "model": "WT13BP",
          "typeService": "Mantenimiento",
          "descriptionService": "Ajuste de nivelación.",
          "dateService": "2026-02-18",
          "statusService": "Completado",
          "bill": [
            {
              "idBill": 21,
              "dateBill": "2026-02-18",
              "typeBill": "Mantenimiento",
              "items": [
                {
                  "item": "Servicio técnico",
                  "cost": 43
                }
              ],
              "totalBillCost": 43,
              "billPaymentStatus": "Paid"
            }
          ]
        }
      ]
    },
    {
      "id": 29,
      "name": "Esteban Cruz",
      "nit": "900787878",
      "address": "Cra 48 #88-20",
      "neighborhood": "El Tabor, Barranquilla",
      "phone": "3114445556",
      "email": "esteban.cruz@example.com",
      "services": [
        {
          "idService": 33,
          "technician": "Luis Herrera",
          "electricAppliance": "Congelador",
          "brand": "Indurama",
          "model": "CI-250",
          "typeService": "Reparación",
          "descriptionService": "Cambio de capacitor.",
          "dateService": "2026-05-09",
          "statusService": "Pendiente",
          "bill": []
        }
      ]
    },
    {
      "id": 30,
      "name": "Mónica Álvarez",
      "nit": "901989898",
      "address": "Cll 92 #46-18",
      "neighborhood": "Altos del Prado, Barranquilla",
      "phone": "3176667778",
      "email": "monica.alvarez@example.com",
      "services": [
        {
          "idService": 34,
          "technician": "Andrea López",
          "electricAppliance": "Nevera",
          "brand": "Whirlpool",
          "model": "WRF560",
          "typeService": "Mantenimiento",
          "descriptionService": "Revisión general.",
          "dateService": "2026-03-25",
          "statusService": "Completado",
          "bill": [
            {
              "idBill": 22,
              "dateBill": "2026-03-25",
              "typeBill": "Mantenimiento",
              "items": [
                {
                  "item": "Servicio técnico",
                  "cost": 54
                }
              ],
              "totalBillCost": 54,
              "billPaymentStatus": "Paid"
            }
          ]
        }
      ]
    }
  ]
    }
  );
}
