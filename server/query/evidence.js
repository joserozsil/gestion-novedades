'use strict'

import Sequelize from 'sequelize'
import Model from '../models'
import _ from 'underscore'
import moment  from 'moment';
const Op = Sequelize.Op

const operations = {
    index: (req, res, next) => {
        try {
            const finding = {
                f_eliminacion: null,
                departamento: {
                    [Op.ne]: 'RECEPCION'
                }
            }

            Model.Evidencia.findAndCountAll({
                attributes: ['id', 'departamento', 'nombre', 'descripcion', 'tipo_recepcion', 'observacion', 'tipo_experticia', 'f_creacion', 'usuario_id', 'estado'],
                include: [{
                    model: Model.Usuario
                }],
                where: finding,
                order: [[ 'f_creacion', 'DESC' ]],
                offset: Number(req.query.offset) || 0,
                limit: Number(req.query.limit) || 15
            })
            .then(result => {
                return res.status(200).json({
                    data: result.rows,
                    total: result.count,
                    offset: req.query.offset || 0,
                    limit: req.query.limit || 15
                })
            })
            .catch(error => {
                console.log(error)
                return res.status(400).json(error)
            })
		} catch( e ) {
			return next(e)
		}
    }
}

export default operations