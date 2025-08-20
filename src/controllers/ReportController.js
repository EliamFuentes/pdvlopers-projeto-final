/**
 * Relatório Financeiro 
 * API para alimentar os gráficos
 */

import supabase from "../services/Supabase.js";

export const getSummary = async (req, res) => {
    try{
        // Resgatando as datas de início e fim da URL
        const { star_date, end_date } = req.query;
        // Validando para garantir que o período foi informado
        if(!star_date || !end_date){
            return res.status(400).json({
                error: 'Os parâmetros data de início e data  de fim são obrigatórios.',
            });
            // Chamando função do supabase
            const { data, error } = await supabase.rpc('get_financial_summary',{
                p_start_date: start_date,
                p_end_date: end_date,
            });
        }
    }catch(error){
        // Ainda em desenvolvimento
    }
}