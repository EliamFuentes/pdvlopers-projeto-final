CREATE OR REPLACE FUNCTION get_financial_summary(start_date DATE, end_date DATE)
RETURNS TABLE (total_entradas NUMERIC, total_saidas NUMERIC, lucro_prejuizo NUMERIC)
AS $$
BEGIN
  RETURN QUERY
  SELECT
    COALESCE(SUM(CASE WHEN type = 'entrada' THEN amount ELSE 0 END), 0) AS total_entradas,
    COALESCE(SUM(CASE WHEN type = 'saida' THEN amount ELSE 0 END), 0) AS total_saidas,
    COALESCE(SUM(CASE WHEN type = 'entrada' THEN amount ELSE -amount END), 0) AS lucro_prejuizo
  FROM transactions
  WHERE transaction_date >= start_date AND transaction_date <= end_date;
END;
$$ LANGUAGE plpgsql;