import React from 'react'

function Experience() {
    return (
        <>
            <div class="form-group add-exp mt-s">
                <h2>Add Experiences</h2>
                <div class="all-exps">
                    <div class="new-exp">
                        <label>Title:</label>
                        <input type="text" name="exp[]" class="form-control" placeholder="Ex: Web Developer" />
                        <label>Company:</label>
                        <input type="text" name="exp[]" class="form-control" placeholder="Ex: ProgressSoft" />
                        <div class="form-row">
                            <div class="col">
                                <label>From year:</label>
                                <input type="month" name="exp[]" class="form-control" />
                            </div>
                            <div class="col">
                                <label>To year (optional=present):</label>
                                <input type="month" name="exp[]" class="form-control" />
                            </div>
                        </div>
                        <label>Description (optional):</label>
                        <textarea name="exp[]" class="form-control"></textarea>
                    </div>
                </div>
                <div class="add-blk btn btn-info" id="add-exp">
                    <i class="fa fa-plus"></i>
                    <span>Add another experience</span>
                </div>
            </div>
        </>
    )
}

export default Experience