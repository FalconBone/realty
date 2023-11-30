const { Form } = require('../models/models')
const ApiError = require('../error/ApiError')
const path = require('path');
const { where } = require('sequelize');
const uuid = require('uuid')

class FormController {
    async addFormData(req, res) {
        let formData = req.body;
        // console.log(req.files);
        // console.log(formData);
        // const file = req.files.file

        // let fileName
        // const type = file.name
        //     .split('.')
        //     .filter(Boolean)
        //     .slice(1)
        //     .join('.')

        if (false) {
            res.send('Неверный тип файла')
        } else {
            //fileName = uuid.v4() + `.${type}`
            //file.mv(path.resolve(__dirname, '..', 'static', fileName))

            //formData.filePath = fileName
            await Form.create(formData)
            res.send(200)
        }
    }
    async getFormData(req, res) {
    let id = req.body.id;
    const form = await Form.findByPk(id)

    res.json(form?.dataValues);
}
    async getForms(req, res) {
    const forms = await Form.findAll()

    const formsId = []
    forms.forEach(element => {
        formsId.push(element.dataValues.id);
    })

    res.json(formsId)
}
    async deleteFormById(req, res) {
    let id = req.body.id;

    await Form.destroy({ where: { id: id } })
    res.send(200)
}
    async updateFormById(req, res) {
    let id = req.body.id;
    let data = req.body.data;

    await Form.update(data, { where: { id: id } })
    res.send(200)
}
}

module.exports = new FormController()