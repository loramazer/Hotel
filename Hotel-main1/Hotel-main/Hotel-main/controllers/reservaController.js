
const pool = require('../config/db'); // Conexão com o banco de dados

exports.consultarDisponibilidade = async (req, res) => {
  const { dataCheckin, dataCheckout, tipoQuarto } = req.body;

  // Verifique se os parâmetros foram passados corretamente
  if (!dataCheckin || !dataCheckout || !tipoQuarto) {
    return res.status(400).json({ message: 'Parâmetros de consulta ausentes!' });
  }

  console.log('Tipo de Quarto:', tipoQuarto);
  console.log('Data de Check-in:', dataCheckin);
  console.log('Data de Check-out:', dataCheckout);

  // Logando os dados recebidos
  console.log(`Checkin: ${dataCheckin}, Checkout: ${dataCheckout}, Tipo Quarto: ${tipoQuarto}`);

  try {
    // Consultar disponibilidade de quartos
    const [quartosDisponiveis] = await pool.query(`
      SELECT q.quarto_id, q.numero_quarto
      FROM quartos q
      WHERE q.tipo_quarto_id = ?
    `, [tipoQuarto]);

    // Logando os quartos retornados antes de aplicar o filtro de reserva
    console.log('Quartos antes do filtro de reserva:', quartosDisponiveis);

    // Filtrar os quartos ocupados nas datas de checkin e checkout
    const [quartosIndisponiveis] = await pool.query(`
      SELECT r.quarto_id
      FROM reservas r
      WHERE (? < r.data_checkout AND ? > r.data_checkin)
    `, [dataCheckin, dataCheckout]);

    console.log('Quartos reservados nas datas fornecidas:', quartosIndisponiveis);

    // Filtrando os quartos disponíveis removendo os indisponíveis
    const quartosDisponiveisIds = quartosDisponiveis.filter(q => 
      !quartosIndisponiveis.some(r => r.quarto_id === q.quarto_id)
    );

    // Verifique se há quartos disponíveis
    if (quartosDisponiveisIds.length > 0) {
      res.json({ message: 'Quartos disponíveis!', quartos: quartosDisponiveisIds });
    } else {
      res.status(400).json({ message: 'Não há quartos disponíveis.' });
    }
  } catch (error) {
    console.error('Erro ao consultar disponibilidade:', error);
    res.status(500).json({ error: 'Erro ao consultar disponibilidade.' });
  }
};



// Realizar reserva
exports.fazerReserva = async (req, res) => {
  const reservaData = req.body;

  try {
    const reservaId = await Reserva.realizarReserva(reservaData);
    res.json({ message: 'Reserva realizada com sucesso!', reservaId });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao realizar a reserva.', error });
  }
};

// Aplicar pacote promocional
exports.aplicarPacote = async (req, res) => {
  const { pacote, checkin, checkout } = req.body;

  try {
    const desconto = await Reserva.aplicarPacotePromocional(pacote, checkin, checkout);
    res.json({ desconto });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao aplicar o pacote promocional.', error });
  }
};

exports.getTiposQuarto = async (req, res) => {
  try {
    // Executa a consulta SQL para buscar os tipos de quarto
    const [rows] = await pool.query('SELECT id, descricao FROM tipos_quarto');
    
    // Verifique os dados retornados (opcional)
    console.log(rows); 
    
    // Envia os dados em formato JSON para o front-end
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar tipos de quarto:', error);
    res.status(500).json({ error: 'Erro ao buscar tipos de quarto' });
  }
};
