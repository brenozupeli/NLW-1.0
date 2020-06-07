import { Request, Response } from 'express';
import knex from './../database/connection';

class ItemsController {
    async index (req: Request, res: Response) {
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return {
                ...item,
                image: `http://192.168.1.105:3001/uploads/${item.image}`,
            }
        })
    
        res.json(serializedItems);
    }
}

export default ItemsController;