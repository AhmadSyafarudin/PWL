import express from "express";
 
import { 
    getTodo,
    createTodo,
    getTodoById,
    updateTodo,
    deleteTodo
} from "../controllers/Todo.js";
 
const router = express.Router();
 
router.get('/', getTodo);
router.get('/:id', getTodoById);
router.post('/', createTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);
 
export default router;