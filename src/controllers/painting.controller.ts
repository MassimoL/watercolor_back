import { Request, Response } from "express";
import { validationResult } from 'express-validator';
import Painting from "../models/painting";
import { paintingsValidator } from '../validations/painting.validations'; 



export const getPaintings = async (req: Request, res: Response) => {
    const listPaintings = await Painting.findAll();

    res.json(listPaintings);
}

export const getPainting = async (req: Request, res: Response) => {
    const { id } = req.params;
    const painting = await Painting.findByPk(id);

    if (painting) {
        res.json(painting);
    } else {
        res.status(404).json({
            msg: `ERROR 404. No existe un painting con el id ${id}`
        });
    };
}

export const deletePainting = async (req: Request, res: Response) => {
    const { id } = req.params;
    const painting = await Painting.findByPk(id);

    if (!painting) {
        return res.status(404).json({
            msg: `ERROR 404. No existe un painting con el id ${id}`
        });
    } else {
        await painting.destroy();
        res.json({
            msg: `Painting con id ${id} ha sido eliminado con éxito`
        });
    }
}

export const postPainting = [
    ...paintingsValidator,

    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { body } = req;

        try {
            await Painting.create(body);

            res.json({
                msg: 'Painting añadido con éxito!',
            });

        } catch (error) {
            console.log(error);
            res.json({
                msg: 'Error al añadir el painting'
            });
        }
    }
];

export const updatePainting = [
    ...paintingsValidator,

    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;
        const { body } = req;
        const painting = await Painting.findByPk(id);

        try {
            if (!painting) {
                res.status(404).json({
                    msg: `ERROR 404. No existe un painting con el id ${id}`
                });
            } else {
                await painting.update(body);
                res.json({
                    msg: `El painting con id ${id} ha sido actualizado con éxito!`
                });
            }

        } catch (error) {
            console.log(error);
            res.json({
                msg: 'Error al actualizar el painting'
            });
        }
    }
];


