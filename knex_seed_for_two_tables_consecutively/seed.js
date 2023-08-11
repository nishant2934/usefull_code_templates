/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const bcrypt = require('bcrypt')

function generateRandomDate(from, to) {
  return new Date(
    from.getTime() +
    Math.random() * (to.getTime() - from.getTime()),
  );
}


function convertTimestamp(timestamp) {
  const originalDate = new Date(timestamp);

  const year = originalDate.getFullYear();
  const month = String(originalDate.getMonth() + 1).padStart(2, '0');
  const day = String(originalDate.getDate()).padStart(2, '0');
  const hours = String(originalDate.getHours()).padStart(2, '0');
  const minutes = String(originalDate.getMinutes()).padStart(2, '0');
  const seconds = String(originalDate.getSeconds()).padStart(2, '0');

  const convertedTimestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return convertedTimestamp;
}

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw('SET foreign_key_checks = 0');
  await knex('users').truncate();
  await knex('roles').truncate();
  await knex.raw('SET foreign_key_checks = 1');
  await knex('users').insert([
    { id: 1, name: 'Admin', business_name: 'admin pvt ltd', email: 'admin@digital.com', business_contact: '987-654-3210', password: await bcrypt.hash('Admin@@123', 10), created_at: convertTimestamp(generateRandomDate(new Date(1980, 0, 1), new Date())) },
    { id: 2, name: 'CPA', business_name: 'cpa pvt ltd', email: 'cpa@digital.com', business_contact: '987-654-3210', password: await bcrypt.hash('Cpa@@123', 10), created_at: convertTimestamp(generateRandomDate(new Date(1980, 0, 1), new Date())) },
    { id: 3, name: 'Company', business_name: 'company pvt ltd', email: 'company@digital.com', business_contact: '987-654-3210', password: await bcrypt.hash('Company@@123', 10), created_at: convertTimestamp(generateRandomDate(new Date(1980, 0, 1), new Date())) },
    { id: 4, name: 'User', business_name: 'user services', email: 'user@emailservice.com', business_contact: '123-456-7890', password: await bcrypt.hash('UserPass123', 10), created_at: convertTimestamp(generateRandomDate(new Date(1995, 0, 1), new Date())) },
    { id: 5, name: 'Marketing', business_name: 'marketing solutions', email: 'marketing@digitalagency.com', business_contact: '555-123-4567', password: await bcrypt.hash('Mktg1234', 10), created_at: convertTimestamp(generateRandomDate(new Date(2000, 0, 1), new Date())) },
    { id: 6, name: 'TechSolutions', business_name: 'tech experts corp', email: 'info@techsolutions.com', business_contact: '987-654-1230', password: await bcrypt.hash('TechPass2023', 10), created_at: convertTimestamp(generateRandomDate(new Date(2010, 0, 1), new Date())) },
    { id: 7, name: 'CreativeMinds', business_name: 'creative minds studio', email: 'hello@creativeminds.design', business_contact: '789-123-4567', password: await bcrypt.hash('Creative456', 10), created_at: convertTimestamp(generateRandomDate(new Date(2005, 0, 1), new Date())) },
    { id: 8, name: 'HealthFirst', business_name: 'healthcare solutions', email: 'info@healthfirstmed.com', business_contact: '111-222-3333', password: await bcrypt.hash('HealthPass789', 10), created_at: convertTimestamp(generateRandomDate(new Date(1990, 0, 1), new Date())) },
    { id: 9, name: 'EcoTech', business_name: 'eco-friendly tech', email: 'contact@ecotechsolutions.com', business_contact: '444-555-6666', password: await bcrypt.hash('EcoTech2023', 10), created_at: convertTimestamp(generateRandomDate(new Date(2008, 0, 1), new Date())) },
    { id: 10, name: 'RetailWave', business_name: 'retail wave store', email: 'info@retailwave.com', business_contact: '777-888-9999', password: await bcrypt.hash('RetailPass123', 10), created_at: convertTimestamp(generateRandomDate(new Date(2015, 0, 1), new Date())) },
    { id: 11, name: 'FoodDelish', business_name: 'delicious bites delivery', email: 'orders@fooddelish.net', business_contact: '222-333-4444', password: await bcrypt.hash('Delish2023', 10), created_at: convertTimestamp(generateRandomDate(new Date(2002, 0, 1), new Date())) },
    { id: 12, name: 'TravelAdventures', business_name: 'travel adventures agency', email: 'info@traveladventures.com', business_contact: '666-777-8888', password: await bcrypt.hash('TravelPass567', 10), created_at: convertTimestamp(generateRandomDate(new Date(2012, 0, 1), new Date())) },
    { id: 13, name: 'FashionTrends', business_name: 'fashion trends hub', email: 'info@fashiontrends.biz', business_contact: '999-888-7777', password: await bcrypt.hash('Fashion1234', 10), created_at: convertTimestamp(generateRandomDate(new Date(2007, 0, 1), new Date())) },
    { id: 14, name: 'FitnessFusion', business_name: 'fitness fusion studio', email: 'info@fitnessfusiongym.com', business_contact: '555-666-7777', password: await bcrypt.hash('FitFusion567', 10), created_at: convertTimestamp(generateRandomDate(new Date(2018, 0, 1), new Date())) },
    { id: 15, name: 'HomeDecor', business_name: 'home decor essentials', email: 'hello@homedecorideas.com', business_contact: '111-555-9999', password: await bcrypt.hash('HomePass2023', 10), created_at: convertTimestamp(generateRandomDate(new Date(2009, 0, 1), new Date())) },
  ]);
  await knex('roles').insert([
    { id: 1, user_id: 1, role: 1, permission: JSON.stringify([]) },
    { id: 2, user_id: 2, role: 3, permission: JSON.stringify([]) },
    { id: 3, user_id: 3, role: 4, permission: JSON.stringify([]) },
    { id: 4, user_id: 4, role: 3, permission: JSON.stringify(['read', 'write']) },
    { id: 5, user_id: 5, role: 4, permission: JSON.stringify(['delete']) },
    { id: 6, user_id: 6, role: 3, permission: JSON.stringify(['read', 'write', 'delete']) },
    { id: 7, user_id: 7, role: 3, permission: JSON.stringify(['read']) },
    { id: 8, user_id: 8, role: 4, permission: JSON.stringify(['write']) },
    { id: 9, user_id: 9, role: 3, permission: JSON.stringify(['read', 'write']) },
    { id: 10, user_id: 10, role: 4, permission: JSON.stringify(['delete']) },
    { id: 11, user_id: 11, role: 3, permission: JSON.stringify(['read', 'write', 'delete']) },
    { id: 12, user_id: 12, role: 3, permission: JSON.stringify(['read']) },
    { id: 13, user_id: 13, role: 4, permission: JSON.stringify(['write']) },
    { id: 14, user_id: 14, role: 3, permission: JSON.stringify(['read', 'write']) },
    { id: 15, user_id: 15, role: 4, permission: JSON.stringify(['delete']) },
  ]);
};
