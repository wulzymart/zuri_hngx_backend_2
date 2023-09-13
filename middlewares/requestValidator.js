const sqlRegex = /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|EXEC|UNION|CREATE|TRUNCATE|AND|OR)\b)|(--\s*\n)|(\$where\s*\()|(\$ne\s*)|(\$eq\s*)|(\$gt\s*)|(\$gte\s*)|(\$lt\s*)|(\$lte\s*)/i;
const characterRegex = /^[^$*.,/<>?|\\"{}$@+£^":;'%&()¬`=~#?]+$/;
const noDidits = /^[^\d]+$/;
const isValid = (string) => {
  return (typeof string === 'string' && characterRegex.test(string) && !sqlRegex.test(string.toUpperCase()));
};
const validate = (req, res, next) => {
  const name = req.body.name;
  const userId = (req.params.user_id);
  console.log(userId);
  if (userId && !isValid(userId)) {
    res.status(400).json({ status: 'failed', errmsg: 'Please provide a valid user_id' });
    return;
  }
  if ((name && (!isValid(name) || !noDidits.test(name)))) {
    res.status(400).json({ status: 'failed', errmsg: 'Please provide a valid name' });
    return;
  }
  next();
};
export default validate;
