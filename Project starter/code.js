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
figma.showUI("<b>Project starter</b>", { visible: false });
figma.ui.postMessage({ type: 'networkRequest' });
function projectStarter() {
    return __awaiter(this, void 0, void 0, function* () {
        //Find and load published component using Component Key
        const cover = yield figma.importComponentByKeyAsync("a8dfb4141b7a09a3a5aa5ace2da9bc5a0eda3f71");
        let page1 = figma.root.findOne(node => node.type == "PAGE" && node.name == "Page 1");
        if (page1 != null) {
            // Write pages
            for (let i = 0; i < 13; i++) {
                figma.createPage();
            }
        }
        else {
            figma.notify('Please verify Page 1 exist and run again the plugin');
        }
        // Project details
        let page1template = page1;
        page1template.name = "📖 Project details";
        // divider
        let page2 = figma.root.findOne(node => node.type == "PAGE" && node.name == "Page 2");
        let page2template = page2;
        page2template.name = "-------------------------------";
        // Review
        let page3 = figma.root.findOne(node => node.type == "PAGE" && node.name == "Page 3");
        let page3template = page3;
        page3template.name = "🔎 Review";
        // divider
        let page4 = figma.root.findOne(node => node.type == "PAGE" && node.name == "Page 4");
        let page4template = page4;
        page4template.name = "-------------------------------";
        // Prototype details
        let page5 = figma.root.findOne(node => node.type == "PAGE" && node.name == "Page 5");
        let page5template = page5;
        page5template.name = "🎮 Prototype";
        // divider
        let page6 = figma.root.findOne(node => node.type == "PAGE" && node.name == "Page 6");
        let page6template = page6;
        page6template.name = "-------------------------------";
        // Work in Progress
        let page7 = figma.root.findOne(node => node.type == "PAGE" && node.name == "Page 7");
        let page7template = page7;
        page7template.name = "🛠️ Work in progress";
        // divider
        let page8 = figma.root.findOne(node => node.type == "PAGE" && node.name == "Page 8");
        let page8template = page8;
        page8template.name = "-------------------------------";
        // Wireframe
        let page9 = figma.root.findOne(node => node.type == "PAGE" && node.name == "Page 9");
        let page9template = page9;
        page9template.name = "✏️ Wireframes";
        // divider
        let page10 = figma.root.findOne(node => node.type == "PAGE" && node.name == "Page 10");
        let page10template = page10;
        page10template.name = "-------------------------------";
        // Playground
        let page11 = figma.root.findOne(node => node.type == "PAGE" && node.name == "Page 11");
        let page11template = page11;
        page11template.name = "💡 Playground";
        // divider
        let page12 = figma.root.findOne(node => node.type == "PAGE" && node.name == "Page 12");
        let page12template = page12;
        page12template.name = "-------------------------------";
        // Components
        let page13 = figma.root.findOne(node => node.type == "PAGE" && node.name == "Page 13");
        let page13template = page13;
        page13template.name = "Components";
        // Cover
        let page14 = figma.root.findOne(node => node.type == "PAGE" && node.name == "Page 14");
        let page14template = page14;
        page14template.name = "Cover";
        // Render components 
        figma.currentPage = page14;
        cover.createInstance();
        figma.currentPage = page1;
        figma.closePlugin('All done!');
    });
}
;
projectStarter();
