var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Define external link
// const extLink: string = "https://localhost/codereview";
var extLink = "http://thomas.ariadne.at";
/**
 * This class represents a single project and its properties.
 * It implements the IProject interface.
 */
var Project = /** @class */ (function () {
    /**
     * Constructs a new Project instance with the given parameters.
     *
     * @param {string} name - The name of the project.
     * @param {string} technics - The technologies used in the project.
     * @param {string} description_short - A short description of the project.
     * @param {string} description_detail - A detailed description of the project.
     * @param {string} image - The URL or file path of the project image.
     * @param {string} link - The URL or file path of the project link.
     */
    function Project(name, technics, description_short, description_detail, image, link) {
        this.name = name;
        this.technics = technics;
        this.description_short = description_short;
        this.description_detail = description_detail;
        this.image = image;
        this.link = link;
        this.image = Project.constructImageUrl(image);
        this.link = Project.constructLinkUrl(link);
    }
    /**
     * Constructs the image URL for a project.
     * @param {string} image - The base path or filename of the project's image.
     * @returns {string} The full URL of the image.
     */
    Project.constructImageUrl = function (image) {
        return "./images/".concat(image);
    };
    /**
     * Constructs the link URL for a project.
     * @param {string} link - The base path or filename of the project's link.
     * @returns {string} The full URL of the link.
     */
    Project.constructLinkUrl = function (link) {
        return "".concat(extLink, "/").concat(link);
    };
    /**
     * Adds a new project to the array of all projects.
     * @param {Project} project - The project instance to be added.
     */
    Project.addProject = function (project) {
        Project.allProjects.push(project);
    };
    /**
     * Creates HTML markup for a project card.
     * @param {Project} project - The project instance.
     * @returns {string} HTML markup for the project card.
     */
    Project.createProjectCard = function (project) {
        return "\n      <div class=\"col-lg-4\">\n        <div class=\"card\">\n          <a href=\"".concat(project.link, "\" target=\"content\" rel=\"noopener noreferrer\" title=\"Click to open the page in the IFrame below\">\n            <div class=\"face front-face\">\n              <img src=\"").concat(project.image, "\" alt=\"").concat(project.name, " image\" class=\"profile\">\n              <div class=\"pt-3 text-uppercase name\">").concat(project.name, "</div>\n              <div class=\"technics\">").concat(project.technics, "</div>\n            </div>\n            <div class=\"face back-face\">\n              <strong>").concat(project.description_short, "</strong><br>").concat(project.description_detail, "\n            </div>\n          </a>\n        </div>\n      </div>");
    };
    /**
     * Creates HTML markup for a project button.
     * @param {Project} project - The project instance.
     * @returns {string} HTML markup for the project button.
     */
    Project.createProjectButton = function (project) {
        return "\n      <a class=\"btn btn-outline-dark text-secondary btn-floating m-1 btnShadow\" href=\"".concat(project.link, "\" role=\"button\" target=\"_blank\" rel=\"noopener noreferrer\">\n      ").concat(project.name, "</a>");
    };
    /** An array to store all projects. */
    Project.allProjects = [];
    return Project;
}());
export { Project };
/**
 * Fetches project data from a JSON file and displays it on the webpage.
 * If an error occurs during fetching, an alert is displayed.
 */
export function fetchProjects() {
    return __awaiter(this, void 0, void 0, function () {
        var response, projectsData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('./js/projects.json')];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch projects data');
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    projectsData = _a.sent();
                    // Type check for JSON data
                    if (!Array.isArray(projectsData)) {
                        throw new Error('Projects data is not an array');
                    }
                    projectsData.forEach(function (projectData) {
                        if (isValidProject(projectData)) {
                            var project = new Project(projectData.name, projectData.technics, projectData.description_short, projectData.description_detail, projectData.image, projectData.link);
                            Project.addProject(project);
                        }
                        else {
                            console.warn('Invalid project data:', projectData);
                        }
                    });
                    displayProjects();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error fetching projects data:', error_1);
                    alert('An error occurred while fetching the projects data. Please try again later.');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
/**
 * Checks if the provided data object is a valid project.
 * @param {any} data - The data object to be validated.
 * @returns {boolean} True if the data object is a valid project, otherwise false.
 */
function isValidProject(data) {
    return typeof data.name === 'string' &&
        typeof data.technics === 'string' &&
        typeof data.description_short === 'string' &&
        typeof data.description_detail === 'string' &&
        typeof data.image === 'string' &&
        typeof data.link === 'string';
}
/**
 * Displays the fetched projects on the webpage.
 * If the necessary elements are not found, an error is logged.
 */
export function displayProjects() {
    var resultcards = document.getElementById("ProjectCards");
    var resultbuttons = document.getElementById("ProjectButtons");
    if (!resultcards || !resultbuttons) {
        console.error("The elements to display projects are not found.");
        return;
    }
    var cardsHtml = Project.allProjects.map(function (project) { return Project.createProjectCard(project); }).join('');
    var buttonsHtml = Project.allProjects.map(function (project) { return Project.createProjectButton(project); }).join('');
    resultcards.innerHTML = cardsHtml;
    resultbuttons.innerHTML = buttonsHtml;
}
/** Fetch and display projects when the page loads */
window.onload = function () {
    fetchProjects();
};
