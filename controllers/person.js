import Person from '../models/person.js';
export const addPerson = async (req, res) => {
  const name = req.body.name;
  if (!name) {
    res.status(400).json({ status: 'failed', errmsg: 'Please enter a valid name' });
    return;
  }
  try {
    const createdPerson = await Person.create({ name });
    res.status(200).json({ status: 'success', createdPerson });
  } catch (error) {
    res.status(400).json({ status: 'failed', errmsg: 'Error creating person: possible duplicate values' });
  }
};
export const getPerson = async (req, res) => {
  const userId = (req.params.user_id);
  if (!userId) {
    res.status(400).json({ status: 'failed', errmsg: 'Please enter a valid user_id' });
    return;
  }
  try {
    let person = await Person.findById(userId);
    if (!person) {
      person = await Person.findOne({ name: userId });
      if (!person) {
        res.status(404).json({ status: 'failed', errmsg: 'Person was not found' });
        return;
      }
      res.status(200).json({ status: 'success', person });
      return;
    }
    res.status(200).json({ status: 'success', person });
  } catch (error) {
    const person = await Person.findOne({ name: userId });
    if (!person) {
      res.status(404).json({ status: 'failed', errmsg: 'Person was not found' });
      return;
    }
    res.status(200).json({ status: 'success', person });
  }
};
export const deletePerson = async (req, res) => {
  const userId = (req.params.user_id);
  if (!userId) {
    res.status(400).json({ status: 'failed', errmsg: 'Please enter a valid user_id' });
    return;
  }
  try {
    let person = await Person.findByIdAndDelete(userId);
    if (!person) {
      person = await Person.findOneAndDelete({ name: userId });
      if (!person) {
        res.status(404).json({ status: 'failed', errmsg: 'Person was not found' });
        return;
      }
      res.status(200).json({ status: 'success', person });
      return;
    }
    res.status(200).json({ status: 'success', person });
  } catch (error) {
    const person = await Person.findOneAndDelete({ name: userId });
    if (!person) {
      res.status(404).json({ status: 'failed', errmsg: 'Person was not found' });
      return;
    }
    res.status(200).json({ status: 'success', person });
  }
};
export const editPerson = async (req, res) => {
  const userId = (req.params.user_id);
  const name = req.body.name;
  if (!userId) {
    res.status(400).json({ status: 'failed', errmsg: 'Please enter a valid user_id' });
    return;
  }
  if (!name) {
    res.status(400).json({ status: 'failed', errmsg: 'Please enter a valid name' });
    return;
  }
  try {
    let person = await Person.findByIdAndUpdate(userId, { name }, { runValidators: true, new: true });
    if (!person) {
      person = await Person.findOneAndUpdate({ name: userId }, { name }, { runValidators: true, new: true });
      if (!person) {
        res.status(404).json({ status: 'failed', errmsg: 'Person was not found' });
        return;
      }
      res.status(200).json({ status: 'success', person });
      return;
    }
    res.status(200).json({ status: 'success', person });
  } catch (error) {
    const person = await Person.findOneAndUpdate({ name: userId }, { name }, { runValidators: true, new: true });
    if (!person) {
      res.status(404).json({ status: 'failed', errmsg: 'Person was not found' });
      return;
    }
    res.status(200).json({ status: 'success', person });
  };
};
export const replacePerson = async (req, res) => {
  const userId = (req.params.user_id);
  const name = req.body.name;
  if (!userId) {
    res.status(400).json({ status: 'failed', errmsg: 'Please enter a valid user_id' });
    return;
  }
  if (!name) {
    res.status(400).json({ status: 'failed', errmsg: 'Please enter a valid name' });
    return;
  }
  try {
    let person = await Person.findOneAndReplace({ _id: userId }, { name }, { runValidators: true, new: true });
    if (!person) {
      person = await Person.findOneAndReplace({ name: userId }, { name }, { runValidators: true, new: true });
      if (!person) {
        res.status(404).json({ status: 'failed', errmsg: 'Person was not found' });
        return;
      }
      res.status(200).json({ status: 'success', person });
      return;
    }
    res.status(200).json({ status: 'success', person });
  } catch (error) {
    const person = await Person.findOneAndUpdate({ name: userId }, { name }, { runValidators: true, new: true });
    if (!person) {
      res.status(404).json({ status: 'failed', errmsg: 'Person was not found' });
      return;
    }
    res.status(200).json({ status: 'success', person });
  };
};
