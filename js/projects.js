"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProjects = exports.Project = void 0;
// Define external link
const extLink = "http://thomas.ariadne.at";
// Localization class
class Localization {
    static loadTexts(lang) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`./js/texts_${lang}.json`);
                if (!response.ok) {
                    throw new Error(`Failed to load texts for language ${lang}`);
                }
                this.loadedTexts = yield response.json();
            }
            catch (error) {
                console.error('Error loading texts:', error);
                this.loadedTexts = {};
            }
        });
    }
    static getCurrentLanguage() {
        const htmlLang = document.documentElement.lang;
        return htmlLang || 'en';
    }
    static getText(key) {
        return this.loadedTexts[key] || '';
    }
}
Localization.loadedTexts = {};
// Project class
class Project {
    constructor(name, technics, description_short, description_detail, image, link) {
        this.name = name;
        this.technics = technics;
        this.description_short = description_short;
        this.description_detail = description_detail;
        this.image = image;
        this.link = link;
        fetchProjects;
        this.image = Project.constructImageUrl(image);
        this.link = Project.constructLinkUrl(link);
    }
    static constructImageUrl(image) {
        return `./images/${image}`;
    }
    static constructLinkUrl(link) {
        return `${extLink}/${link}`;
    }
    static addProject(project) {
        Project.allProjects.push(project);
    }
    static createProjectCard(project) {
        const title = Localization.getText('cardTitle');
        return `
      <div class="col-lg-4">
        <div class="card">
          <a href="${project.link}" target="content" rel="noopener noreferrer" title="${title}">
            <div class="face front-face">
              <img src="${project.image}" alt="${project.name} image" class="profile">
              <div class="pt-3 text-uppercase name">${project.name}</div>
              <div class="technics">${project.technics}</div>
            </div>
            <div class="face back-face">
              <strong>${project.description_short}</strong><br>${project.description_detail}
            </div>
          </a>
        </div>
      </div>`;
    }
    static createProjectButton(project) {
        return `
      <a class="btn btn-outline-secondary text-secondary btn-floating m-1 shadow" href="${project.link}" role="button" target="_blank" rel="noopener noreferrer">
      ${project.name}</a>`;
    }
}
exports.Project = Project;
Project.allProjects = [];
// Fetch and display projects
function fetchProjects() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('./js/projects.json');
            if (!response.ok) {
                throw new Error(Localization.getText('fetchFailed'));
            }
            const projectsData = yield response.json();
            if (!Array.isArray(projectsData)) {
                throw new Error(Localization.getText('notArray'));
            }
            const lang = Localization.getCurrentLanguage();
            yield Localization.loadTexts(lang);
            const shortDescKey = `description_short_${lang}`;
            const detailDescKey = `description_detail_${lang}`;
            projectsData.forEach(projectData => {
                const project = new Project(projectData.name, projectData.technics, projectData[shortDescKey] || projectData.description_short_en, projectData[detailDescKey] || projectData.description_detail_en, projectData.image, projectData.link);
                Project.addProject(project);
            });
            displayProjects();
        }
        catch (error) {
            console.error('Error fetching projects data:', error);
            alert(Localization.getText('fetchError'));
        }
    });
}
exports.fetchProjects = fetchProjects;
// Display projects
function displayProjects() {
    const resultcards = document.getElementById("ProjectCards");
    const resultbuttons = document.getElementById("ProjectButtons");
    if (!resultcards || !resultbuttons) {
        console.error(Localization.getText('displayError'));
        return;
    }
    const cardsHtml = Project.allProjects.map(project => Project.createProjectCard(project)).join('');
    const buttonsHtml = Project.allProjects.map(project => Project.createProjectButton(project)).join('');
    resultcards.innerHTML = cardsHtml;
    resultbuttons.innerHTML = buttonsHtml;
}
// Fetch and display projects when the page loads
window.onload = function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetchProjects();
    });
};
