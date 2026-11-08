import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateRevenue, formatPkr, getWhatsAppUrl } from './calculator';

test('formatPkr formats Lakhs correctly', () => {
  assert.equal(formatPkr(290000), 'Rs. 2.9 Lakhs');
  assert.equal(formatPkr(500000), 'Rs. 5.0 Lakhs');
});

test('formatPkr formats Crore correctly', () => {
  assert.equal(formatPkr(15000000), 'Rs. 1.50 Crore');
  assert.equal(formatPkr(34800000), 'Rs. 3.48 Crore');
});

test('calculateRevenue gives expected results for 50 beds and 15,000 PKR fee', () => {
  const result = calculateRevenue(50, 15000);
  // extraOpd = Math.round(50 * 3.2) = 160
  assert.equal(result.extraOpd, 160);
  // extraSurgeries = Math.round(160 * 0.12) = 19
  assert.equal(result.extraSurgeries, 19);
  // monthlyRevenue = 19 * 15000 = 285000
  assert.equal(result.monthlyRevenue, 285000);
  assert.equal(result.formattedMonthly, 'Rs. 2.9 Lakhs');
  // yearlyRevenue = 285000 * 12 = 3420000
  assert.equal(result.yearlyRevenue, 3420000);
  assert.equal(result.formattedYearly, 'Rs. 34.2 Lakhs');
});

test('calculateRevenue handles lower and upper limits properly', () => {
  const low = calculateRevenue(10, 3000);
  assert.equal(low.extraOpd, 32);
  assert.equal(low.extraSurgeries, 4);
  assert.equal(low.monthlyRevenue, 12000);

  const high = calculateRevenue(150, 60000);
  assert.equal(high.extraOpd, 480);
  assert.equal(high.extraSurgeries, 58);
  assert.equal(high.monthlyRevenue, 3480000);
});

test('getWhatsAppUrl generates correct link', () => {
  const url = getWhatsAppUrl('923189107951', 'Hello Test');
  assert.equal(url, 'https://wa.me/923189107951?text=Hello%20Test');
});
