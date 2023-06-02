var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Main_Features = /** @class */ (function () {
    function Main_Features(brandName, feature, user, seller, retailers, function_, cost, quantity, product, quality) {
        this.brandName = brandName;
        this.feature = feature;
        this.user = user;
        this.seller = seller;
        this.retailers = retailers;
        this.function_ = function_;
        this.quantity = quantity;
        this.cost = cost;
        this.product = product;
        this.quality = quality;
    }
    Main_Features.prototype.Designing_Tools = function () {
        return ("This ".concat(this.brandName, " has variety of tools designated for a specific item  "));
    };
    Main_Features.prototype.Export_Property = function () {
        return ("".concat(this.user, " selects to export ").concat(this.product, " "));
    };
    Main_Features.prototype.Industry_Partners = function () {
        return ("These are the list of industries for this ".concat(this.brandName, " "));
    };
    Main_Features.prototype.Unique_Features = function () {
        return ("This ".concat(this.brandName, " has list of unique features and its own ").concat(this.function_, " "));
    };
    Main_Features.prototype.External_extensions = function () {
        return ("These are the list of external extensions eligible for ".concat(this.brandName));
    };
    Main_Features.prototype.Business_partners = function () {
        return ("".concat(this.user, " selects own partnership"));
    };
    Main_Features.prototype.Collaboration = function () {
        return ("".concat(this.user, " has a free will to collab with a professional to strengthen ").concat(this.quality, " of ").concat(this.product));
    };
    Main_Features.prototype.Ecommerce_space = function () {
        return ("".concat(this.user, " can display desired and ").concat(this.cost, " items : \n        choice to buy/sell with a specific number ").concat(this.quantity, " of quantities   ."));
    };
    Main_Features.prototype.Social_media = function () {
        return ("".concat(this.user, " selects way to market ").concat(this.product, " "));
    };
    Main_Features.prototype.legal_matters = function () {
        return ("".concat(this.user, " verified partnerships"));
    };
    return Main_Features;
}());
var Fashion_Design = /** @class */ (function (_super) {
    __extends(Fashion_Design, _super);
    function Fashion_Design(brandName, feature, user, seller, retailers, function_, cost, quantity, product, quality, clothing, bags, accessories, shoes) {
        var _this = _super.call(this, brandName, feature, user, seller, retailers, function_, cost, quantity, product, quality) || this;
        _this.clothing = clothing;
        _this.bags = bags;
        _this.accessories = accessories;
        _this.shoes = shoes;
        return _this;
    }
    Fashion_Design.prototype.getClothing = function () {
        return this.clothing;
    };
    Fashion_Design.prototype.setClothing = function (clothing) {
        this.clothing = clothing;
    };
    Fashion_Design.prototype.getBags = function () {
        return this.bags;
    };
    Fashion_Design.prototype.setBags = function (bags) {
        this.bags = bags;
    };
    Fashion_Design.prototype.getAccessories = function () {
        return this.accessories;
    };
    Fashion_Design.prototype.setAccessories = function (accessories) {
        this.accessories = accessories;
    };
    Fashion_Design.prototype.getShoes = function () {
        return this.shoes;
    };
    Fashion_Design.prototype.setShoes = function (shoes) {
        this.shoes = shoes;
    };
    Fashion_Design.prototype.Designing_Tools = function () {
        console.log("These ".concat(this.brandName, " has variety of tools designated for a specific item  "));
        var arrayOfObjects = [this.shoes, this.bags, this.accessories, this.clothing];
        for (var i = 0; i < arrayOfObjects.length; i++) {
            console.log(arrayOfObjects[i]);
            if (arrayOfObjects[i] == this.shoes) {
                console.log("Foot shape, size, Materials and construction, Sole, Upper design, Color and Texture, Branding and logo design");
            }
            else if (arrayOfObjects[i] == this.bags) {
                console.log("Functionality, Size and shape, Materials and construction, Compartments and pockets, Strap and handle design, Color and texture, Branding and logo design ");
            }
            else if (arrayOfObjects[i] == this.accessories) {
                console.log("Functionality, Size and shape, Materials and construction, Closure and fastening, Color and texture");
            }
            else if (arrayOfObjects[i] == this.clothing)
                console.log("Silhouette, Fabrics, Colors and prints, Embellishments, Details, Fit");
        }
    };
    Fashion_Design.prototype.Export_Property = function () {
        if (this.user === "agree") {
            console.log("".concat(this.user, " selects to export ").concat(this.product, " "));
        }
        else {
            console.log("".concat(this.user, " disagree to export ").concat(this.product));
        }
    };
    Fashion_Design.prototype.Industry_Partners = function () {
        console.log("These are the list of industries for this ".concat(this.brandName, " "));
        var fashionIndustries = ["List of partners", "List of partners", "List of partners"];
        for (var i = 0; i < fashionIndustries.length; i++) {
            console.log(fashionIndustries[i]);
        }
    };
    Fashion_Design.prototype.Unique_Features = function () {
        console.log("This ".concat(this.brandName, " has list of unique features and its own ").concat(this.function_, " "));
        var uniquefeatures = ["List of feature", "List of feature", "List of feature"];
        for (var i = 0; i < uniquefeatures.length; i++) {
            console.log(uniquefeatures[i]);
        }
    };
    Fashion_Design.prototype.External_extensions = function () {
        console.log("These are the list of external extensions eligible for ".concat(this.brandName));
        var fashiondesignExtensions = ["list of extensions eligible on the said class"];
        for (var i = 0; i < fashiondesignExtensions.length; i++) {
            console.log(fashiondesignExtensions[i]);
        }
    };
    Fashion_Design.prototype.Business_partners = function () {
        if (this.user === "business proposal") {
            console.log("".concat(this.user, " selects partnership in business"));
        }
        else if (this.user === "professional proposal") {
            console.log("".concat(this.user, " selects partnership with a professional"));
        }
        else if (this.user === "anotherUser proposal") {
            console.log("".concat(this.user, " selects partnership with a professional"));
        }
        else {
            console.log("".concat(this.user, " denied to have partnership!"));
        }
    };
    Fashion_Design.prototype.Collaboration = function () {
        console.log("".concat(this.user, " has a free will to collab with a professional to strengthen ").concat(this.quality, " of ").concat(this.product));
        if (this.user === "professional") {
            console.log("".concat(this.user, " is eligible to collab with a professional to strengthen ").concat(this.quality, " of ").concat(this.product));
        }
        else {
            console.log("Collaboration rejected!");
        }
    };
    Fashion_Design.prototype.Ecommerce_space = function () {
        if (this.user === "agree") {
            console.log("Display desired items and ".concat(this.cost, " items : \n            choice to buy/sell with a specific number ").concat(this.quantity, " of quantities"));
        }
        else {
            console.log("Display denied; no participants as ".concat(this.seller, " and ").concat(this.retailers, " of this brand!"));
        }
    };
    Fashion_Design.prototype.Social_media = function () {
        if (this.user === "agree") {
            console.log("".concat(this.user, " selects social media in marketing the designs"));
        }
        else {
            console.log("".concat(this.user, " in ").concat(this.brandName, ": Declined Project Design Marketing!"));
        }
    };
    Fashion_Design.prototype.legal_matters = function () {
        console.log("".concat(this.user, " verified partnerships"));
    };
    return Fashion_Design;
}(Main_Features));
//-----------------------------------------------------------------------------------------------------------------
var Structural_Design = /** @class */ (function (_super) {
    __extends(Structural_Design, _super);
    function Structural_Design(brandName, feature, user, seller, retailers, function_, cost, quantity, product, quality, building, bridges, stadium, house, furniture, vehicles) {
        var _this = _super.call(this, brandName, feature, user, seller, retailers, function_, cost, quantity, product, quality) || this;
        _this.building = building;
        _this.bridges = bridges;
        _this.stadium = stadium;
        _this.house = house;
        _this.furniture = furniture;
        _this.vehicles = vehicles;
        return _this;
    }
    Structural_Design.prototype.getBuilding = function () {
        return this.building;
    };
    Structural_Design.prototype.setBuilding = function (building) {
        this.building = building;
    };
    Structural_Design.prototype.getBridges = function () {
        return this.bridges;
    };
    Structural_Design.prototype.setBridges = function (bridges) {
        this.bridges = bridges;
    };
    Structural_Design.prototype.getStadium = function () {
        return this.stadium;
    };
    Structural_Design.prototype.setStadium = function (stadium) {
        this.stadium = stadium;
    };
    Structural_Design.prototype.getHouse = function () {
        return this.house;
    };
    Structural_Design.prototype.setHouse = function (house) {
        this.house = house;
    };
    Structural_Design.prototype.getFurniture = function () {
        return this.furniture;
    };
    Structural_Design.prototype.setFurniture = function (furniture) {
        this.furniture = furniture;
    };
    Structural_Design.prototype.getVehicles = function () {
        return this.vehicles;
    };
    Structural_Design.prototype.setVehicles = function (vehicles) {
        this.vehicles = vehicles;
    };
    Structural_Design.prototype.Designing_Tools = function () {
        console.log("These ".concat(this.brandName, " has variety of tools designated for a specific item  "));
        var arrayOfObjects = [this.building, this.bridges, this.stadium, this.house, this.furniture, this.vehicles];
        for (var i = 0; i < arrayOfObjects.length; i++) {
            console.log(arrayOfObjects[i]);
            if (arrayOfObjects[i] == this.building) {
                console.log("Site analysis, Building program, Building envelope, Structural system, Mechanical systems, Interior design");
            }
            else if (arrayOfObjects[i] == this.bridges) {
                console.log("Structural system, Bridge deck, Substructure, Superstructure, Connections, Bridge railing, Bridge lighting, Design Structures");
            }
            else if (arrayOfObjects[i] == this.stadium) {
                console.log("Site analysis, Building program, Spectator experience, Playing field, Structural system, Mechanical systems, Security and safety ");
            }
            else if (arrayOfObjects[i] == this.house) {
                console.log("Site analysis, Building program, Building envelope, Structural system, Mechanical systems, Interior design");
            }
            else if (arrayOfObjects[i] == this.furniture) {
                console.log("type, template, shape, form, curvature, Materials, Scale and proportion, Color and texture");
            }
            else if (arrayOfObjects[i] == this.vehicles) {
                console.log('type, exterior design, interior design, powertrain, drivetrain, Suspension and braking, Safety features');
            }
        }
        Export_Property();
        {
            if (this.user === 'agree') {
                console.log("".concat(this.user, " selects to export ").concat(this.product, " "));
            }
            else {
                console.log("".concat(this.user, " disagree to export ").concat(this.product));
            }
        }
        Industry_Partners();
        {
            console.log("These are the list of industries for this ".concat(this.brandName, " "));
            var fashionIndustries = ["List of partners", "List of partners", "List of partners"];
            for (var i = 0; i < fashionIndustries.length; i++) {
                console.log(fashionIndustries[i]);
            }
        }
        Unique_Features();
        {
            console.log("This ".concat(this.brandName, " has list of unique features and its own ").concat(this.function_, " "));
            var uniquefeatures = ["List of feature", "List of feature", "List of feature"];
            for (var i = 0; i < uniquefeatures.length; i++) {
                console.log(uniquefeatures[i]);
            }
        }
        External_extensions();
        {
            console.log("These are the list of external extensions eligible for ".concat(this.brandName));
            var fashiondesignExtensions = ["list of extensions eligible on the said class"];
            for (var i = 0; i < fashiondesignExtensions.length; i++) {
                console.log(fashiondesignExtensions[i]);
            }
        }
        Business_partners();
        {
            if (this.user === "business proposal") {
                console.log("".concat(this.user, " selects partnership in business"));
            }
            else if (this.user === "professional proposal") {
                console.log("".concat(this.user, " selects partnership with a professional"));
            }
            else if (this.user === "anotherUser proposal") {
                console.log("".concat(this.user, " selects partnership with a professional"));
            }
            else {
                console.log("".concat(this.user, " denied to have partnership!"));
            }
        }
        Collaboration();
        {
            console.log("".concat(this.user, " has a free will to collab with a professional to strengthen ").concat(this.quality, " of ").concat(this.product));
            if (this.user === "professional") {
                console.log("".concat(this.user, " is eligible to collab with a professional to strengthen ").concat(this.quality, " of ").concat(this.product));
            }
            else {
                console.log("Collaboration rejected!");
            }
        }
        Ecommerce_space();
        {
            if (this.user === "agree") {
                console.log("Display desired items and ".concat(this.cost, " items : \n            choice to buy/sell with a specific number ").concat(this.quantity, " of quantities"));
            }
            else {
                console.log("Display denied; no participants as ".concat(this.seller, " and ").concat(this.retailers, " of this brand!"));
            }
        }
        Social_media();
        {
            if (this.user === "agree") {
                console.log("".concat(this.user, " selects social media in marketing the designs"));
            }
            else {
                console.log("".concat(this.user, " in ").concat(this.brandName, ": Declined Project Design Marketing!"));
            }
        }
        legal_matters();
        {
            console.log("".concat(this.user, " verified partnerships"));
        }
    };
    return Structural_Design;
}(Main_Features));
//TEST CASES
var fashion = new Fashion_Design('Fashion Industry', 'Unique Features', 'User 1', 'Seller 1', 'Retailer 1', 'Fasion Designing', 200, 50, 'Products: Clothing, Bags, Accessories, Shoes', 'Unique Qualities', 'Shirt', 'Bag', 'Watch', 'Heels');
'agree';
'business proposal';
'professional';
console.log("\n----------------------------------------------------------");
fashion.Designing_Tools();
console.log("\n----------------------------------------------------------");
fashion.Export_Property();
console.log("\n----------------------------------------------------------");
fashion.Industry_Partners();
console.log("\n----------------------------------------------------------");
fashion.Unique_Features();
console.log("\n----------------------------------------------------------");
fashion.External_extensions();
console.log("\n----------------------------------------------------------");
fashion.Business_partners();
console.log("\n----------------------------------------------------------");
fashion.Collaboration();
console.log("\n----------------------------------------------------------");
fashion.Ecommerce_space();
console.log("\n----------------------------------------------------------");
fashion.Social_media();
console.log("\n----------------------------------------------------------");
fashion.legal_matters();
var structure = new Structural_Design('Designer', 'Structural Design', 'Lois', 'Rhea', 'Gucci', 'design structures', 12345, 1, 'seat', 'custom', 'Gavana bldg', 'Seravim', 'KATANA', 'siees', 'table', 'tricycle');
console.log("\n----------------------------------------------------------");
structure.Designing_Tools();
console.log("\n----------------------------------------------------------");
structure.Export_Property();
console.log("\n----------------------------------------------------------");
structure.Industry_Partners();
console.log("\n----------------------------------------------------------");
structure.Unique_Features();
console.log("\n----------------------------------------------------------");
structure.External_extensions();
console.log("\n----------------------------------------------------------");
structure.Business_partners();
console.log("\n----------------------------------------------------------");
structure.Collaboration();
console.log("\n----------------------------------------------------------");
structure.Ecommerce_space();
console.log("\n----------------------------------------------------------");
structure.Social_media();
console.log("\n----------------------------------------------------------");
structure.legal_matters();
