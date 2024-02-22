const { translate } = require("@vitalets/google-translate-api");

exports.translateText = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const translation = await translate(text, { to: 'fr' });
    res.json({ translation: translation.text });
  } catch (error) {
    console.error('Translation error:', error);
    res.status(500).json({ error: 'Translation failed' });
  }
};
