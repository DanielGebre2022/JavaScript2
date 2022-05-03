import { expect } from 'chai';


import * as data from "../data.js";





 

describe("Seahawks Module-deleteItem", () => {
    it("deletes requested player", function() {
      var result = data.deleteItem("seahawks", 16);
      
      expect(result).to.deep.equal([
        {number : 7, position : 'qb', year : 8, name : 'Gino Smith'},
        {number : 20, position : 'rb', year : 4, name : 'Rashad Penny'},
        {number : 32, position : 'rb', year : 6, name : 'Chris Carson'},
        {number : 14, position : 'wr', year : 4, name : 'D.K. Metcalfe'}
        
        ]);
    });
   
    it("deleteItem-fails w/ non-existent number", () => {
      var result = data.deleteItem("seahawks", 45);
      
      expect(result).to.deep.equal(undefined);
    });
   });

describe("Seahawks Module-addItem", () => {
    it("adds requested player", function() {
      var result = data.addItem("seahawks", {number : 10, position : 'DT', year : 10, name : 'Robert Jones'});
      
      expect(result).to.deep.equal([
        
        {number : 7, position : 'qb', year : 8, name : 'Gino Smith'},
        {number : 20, position : 'rb', year : 4, name : 'Rashad Penny'},
        {number : 32, position : 'rb', year : 6, name : 'Chris Carson'},
        {number : 14, position : 'wr', year : 4, name : 'D.K. Metcalfe'},
        {number : 10, position : 'DT', year : 10, name : 'Robert Jones'},
        ]);
    });
   
    it("addItem-fails item exists already", () => {
      var result = data.addItem("seahawks", {number : 32, position : 'rb', year : 6, name : 'Chris Carson'} );
      
      expect(result).to.deep.equal([
        
        {number : 7, position : 'qb', year : 8, name : 'Gino Smith'},
        {number : 20, position : 'rb', year : 4, name : 'Rashad Penny'},
        {number : 32, position : 'rb', year : 6, name : 'Chris Carson'},
        {number : 14, position : 'wr', year : 4, name : 'D.K. Metcalfe'},
        {number : 10, position : 'DT', year : 10, name : 'Robert Jones'},
        ]);
    });
   });


describe("Seahawks Module-getItem", () => {
    it("retrieves requested player", function() {
      var result = data.getItem(14);
      expect(result).to.deep.equal({number : 14, position : 'wr', year : 4, name : 'D.K. Metcalfe'});
    });
   
    it("getItem-fails w/ invalid player number", () => {
      var result = data.getItem(88);
      
      expect(result).to.be.undefined;
    });
   });

