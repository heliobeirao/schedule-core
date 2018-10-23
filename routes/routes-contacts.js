var express = require('express');
var router = express.Router();
var contactsService = require('../services/contacts.service');

/**
   * @swagger
   * /contacts:
   *   get:
   *     description: Returns Contacts
   *     responses:
   *       200:
   *         description: Contacts
   */
router.get('/', function (req, res, next) {
  res.send(new contactsService().getContacts());
});

/**
* @swagger
* /contacts/{contactId}:
*   get:
*     description: Returns Contact By Id
*     parameters:
*       - in: path
*         name: contactId
*         schema:
*           type: integer
*         required: true
*         escription: Numeric ID of the contact to get
*     responses:
*       200:
*         description: Contact
*/
router.get('/:id', function (req, res, next) {
  res.send(new contactsService().getContactById(Number(req.params.id)));
});

module.exports = router;