const CurriculoModel = require('../models/curriculo-model');

exports.getData = () =>{
    return CurriculoModel;
}

exports.getName = () =>{
    return CurriculoModel.name;
}

exports.getTitle = () =>{
    return CurriculoModel.title;
}

exports.getProfession = () =>{
    return CurriculoModel.profession;
}

exports.getDescription = () =>{
    return CurriculoModel.description;
}

exports.getEducation = () =>{
    return CurriculoModel.education;
}

exports.getSocial = () => {
    return CurriculoModel.social;
}

exports.getSkills = () =>{
    return CurriculoModel.skills;
}