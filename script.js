"use strict";
import colors from "./colors.json" assert {type:"json"};
import {createPalette} from "./src/createEl.js";
import {checkSmallButton} from "./src/checkedActive.js"
import {createSamllPallete} from "./src/createSmallPalette.js";
const popularColorPalette = colors.filter((color) => color?.popular === true);
export const paletteCollection=document.querySelector(".section--new");
export const trendingPalette=document.querySelector(".section--popular")
const containerPalettes = [...document.querySelectorAll(".container--color__palette")];
const btnLinkPages = document.querySelectorAll("li.btn--link__page");
export const selectedPalette = document.querySelector(".collection--user__love");
export const containerSelectedColor=document.querySelector(".container--selected__palette");
const containerTrendingColor=document.querySelector(".container--palette__liked")
const userSelected=[...document.querySelectorAll(".user--selected")];




createPalette(colors,paletteCollection,"palette")
createPalette(popularColorPalette,trendingPalette,"palette")

document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        const sameButton = document.querySelectorAll(`.btn-like-${btn.dataset.id}`);
        sameButton.forEach((btnEl) => {
            if (btnEl.classList.contains("active")) {
                btnEl.textContent = +btnEl.textContent - 1;
                btnEl.classList.remove("active");
                document.querySelector(`.remove-button-${btn.dataset.id}`)?.remove();
            } else {
                btnEl.textContent = +btnEl.textContent + 1;
                btnEl.classList.add("active");
                createRemoveButton(btn.dataset.id);
            }
        });

        // Save the button state to localStorage
        saveButtonState();
    });
});

function createRemoveButton(id) {
    const removeButtonContainer = document.querySelector(".remove-button-container");
    const existingRemoveButton = document.querySelector(`.remove-button-${id}`);

    if (!existingRemoveButton) {
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add(`remove-button-${id}`, "remove");
        removeButton.setAttribute("data-id", id);

        removeButton.addEventListener("click", function () {
            // Remove all buttons with the same data-id
            const buttonsToRemove = document.querySelectorAll(`.btn-like-${id}`);
            
            buttonsToRemove.forEach((btn) => {
                btn.classList.remove("active");
            });

            // Remove this remove button
            this.remove();

            // Save the button state to localStorage
            saveButtonState();
        });

        removeButtonContainer.appendChild(removeButton);
    }
}

function saveButtonState() {
    const activeButtons = Array.from(document.querySelectorAll(".btn.active"))
        .map((btn) => btn.dataset.id);
     const btnActives=document.querySelectorAll(".btn.active");
     localStorage.setItem("actives",JSON.stringify(btnActives))
    localStorage.setItem("activeButtons", JSON.stringify(activeButtons));
}

function restoreButtonState() {
    const activeButtons = JSON.parse(localStorage.getItem("activeButtons")) || [];
    // todo check item and add ++ to the them 
    const actives=JSON.parse(localStorage.getItem("actives")) || undefined;
    activeButtons.forEach((id) => {
        const buttonsToActivate = document.querySelectorAll(`.btn-like-${id}`);
        buttonsToActivate.forEach((btn) =>btn.classList.add("active"));

        createRemoveButton(id);
    });
}

window.addEventListener("load", function () {
    // Restore the button state from localStorage
    restoreButtonState();
    const actives=document.querySelectorAll(".active");
    actives.forEach(active=>{
    +active.textContent++
    })
});