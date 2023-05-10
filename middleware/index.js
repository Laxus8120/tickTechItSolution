const validate  = (req,res,next) =>{
    const id = req.params.id;
  
    // Validating uuid ID
    if (!validate(id)) {
      return res.status(400).json({
        message: 'Not a valid uuid'
      });
    }
    next();
}
