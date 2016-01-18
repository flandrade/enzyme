import React from 'react';
import { expect } from 'chai';
import { mount } from '../';
import { describeWithDOM } from '../describeWithDOM';

describe('describeWithDOM', () => {
	describe('.skip()', () => {
		describeWithDOM.skip('will skip tests called with skip', () => {
			it('will not run this test', () => {
				// purposefully failing test that won't be called
				expect(true).to.equal(false);
			});
		});

		describeWithDOM('will still call describeWithDOM without .skip', () => {
			it('will run this test', () => {
				expect(true).to.equal(true);
			});
		});
	});
});
