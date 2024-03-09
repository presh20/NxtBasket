 /// <reference types="Cypress"  />

import { NextB } from "./pageobject/nxtbasket"

describe('NextBasket Assessment', () => {
  
  it('Navigate Url', () => {
    cy.visit('https://www.amazon.com/')
    //cy.get ('#twotabsearchtextbox').clic
    cy.get (NextB.searchfield).type (NextB.searchitem)
    cy.wait (7000)
    cy.get (NextB.searchbutton).click({force :true})
    cy.get ('[data-asin="B003Y5RYNY"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > :nth-child(1) > :nth-child(1) > .puis-list-col-left > .puisg-col-inner > .s-product-image-container > :nth-child(1) > .rush-component > .a-link-normal > .a-section > .s-image').click({force:true})
   // cy.get  (NextB.clickproduct).click ({force:true})
   cy.wait (5000)
   //cy.get (NextB.buyingOptions).click({force:true})
   cy.get ('#buybox-see-all-buying-choices > .a-button-inner > .a-button-text').click({force:true})
   cy.wait (5000)
   cy.get ('#a-autoid-2-offer-1-announce').click ({force:true})
   cy.get ('.a-declarative > span > .a-icon').click({force:true})
   cy.get ('.nav-cart-icon').click({force:true})
   cy.get('.a-truncate-cut').should ('have.text','TP-Link N450 WiFi Router - Wireless Internet Router for Ho…') 
   cy.get ('.a-section > .a-size-medium').should ('have.text', '$64.95')
   

  })
})