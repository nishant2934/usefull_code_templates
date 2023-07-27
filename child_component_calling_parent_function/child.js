import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { StateService } from "./services";
import {
    Button,
    classNames,
    Dialog,
    InputText
} from '../../helpers/utils'


const Edit = (props) => {
    const [visible, setVisible] = useState(false);
    const [scootyList, setScootyList] = useState([]);
    const [fields, setFields] = useState("");
    const { control, reset, handleSubmit, formState: { errors } } = useForm({});

    const onSubmit = (params) => {
        setFields('');
        reset();
        hideDialog(true)
        StateService.edit({ ...params, id: props.row.id }).then(() => {
            hideDialog(true);
        });


    }

    const hideDialog = (isRender = false) => {
        setVisible(false);
        setFields('');
        reset();
        props.handleclosedialog(false, isRender)
    };


    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFields({ ...fields, [name]: value })
    }

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };


    useEffect(() => {
        setVisible(props.show);
        if (props.show) {
            setFields(props.row);
        }
    }, [props])

    return (
        <React.Fragment>
            <Dialog visible={visible} style={{ width: '1000px' }} header="Edit Stock" modal className="p-fluid auto-mobile-dialog" onHide={hideDialog}>
                <form onSubmit={handleSubmit(onSubmit)} className="row" >
                    <div className="col-md-6">
                        <label htmlFor="name">Zipcode</label>
                        <Controller
                            name="zipcode"
                            control={control}
                            rules={{ required: 'zipCode is required.' }}
                            defaultValue={fields.zipcode || ''}
                            render={({ field, fieldState }) =>
                                <InputText value={fields.zipcode || ''}
                                    useGrouping={false} name="zipcode"
                                    onChange={(e) => { onInputChange(e); field.onChange(e.target.value) }}
                                    className={classNames({ 'p-invalid': fieldState.error })}

                                />
                            }
                        />
                        {getFormErrorMessage('zipcode')}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="name">Latitude</label>
                        <Controller
                            name="latitude"
                            control={control}
                            rules={{ required: 'latitude is required.' }}
                            defaultValue={fields.latitude || ''}
                            render={({ field, fieldState }) =>
                                <InputText value={fields.latitude || ''}
                                    useGrouping={false} name="latitude"
                                    onChange={(e) => { onInputChange(e); field.onChange(e.target.value) }}
                                    className={classNames({ 'p-invalid': fieldState.error })}

                                />
                            }
                        />
                        {getFormErrorMessage('latitude')}
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="name">Longitude</label>
                        <Controller
                            name="longitude"
                            control={control}
                            defaultValue={fields.longitude || ''}
                            rules={{ required: 'longitude is required.' }}
                            render={({ field, fieldState }) =>
                                <InputText value={fields.longitude || ''}
                                    useGrouping={false} name="longitude"
                                    onChange={(e) => { onInputChange(e); field.onChange(e.target.value) }}
                                    className={classNames({ 'p-invalid': fieldState.error })}

                                />
                            }
                        />
                        {getFormErrorMessage('longitude')}
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="name">City</label>
                        <Controller
                            name="city"
                            control={control}
                            rules={{ required: 'city is required.' }}
                            defaultValue={fields.city || ''}
                            render={({ field, fieldState }) =>
                                <InputText value={fields.city || ''}
                                    useGrouping={false} name="city"
                                    onChange={(e) => { onInputChange(e); field.onChange(e.target.value) }}
                                    className={classNames({ 'p-invalid': fieldState.error })}

                                />
                            }
                        />
                        {getFormErrorMessage('city')}
                    </div>


                    <div className="col-md-6">
                        <label htmlFor="name">State</label>
                        <Controller
                            name="state"
                            control={control}
                            defaultValue={fields.state || ''}
                            rules={{ required: 'state is required.' }}
                            render={({ field, fieldState }) =>
                                <InputText value={fields.state || ''}
                                    useGrouping={false} name="state"
                                    onChange={(e) => { onInputChange(e); field.onChange(e.target.value) }}
                                    className={classNames({ 'p-invalid': fieldState.error })}

                                />
                            }
                        />
                        {getFormErrorMessage('state')}
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="name">State Code</label>
                        <Controller
                            name="stateCode"
                            control={control}
                            rules={{
                                required: 'stateCode is required.',
                                maxLength: {
                                    value: 2,
                                    message: "Please enter only two characters."
                                },
                            }}
                            defaultValue={fields.stateCode || ''}
                            render={({ field, fieldState }) =>
                                <InputText value={fields.stateCode || ''}
                                    useGrouping={false} name="stateCode"
                                    onChange={(e) => {
                                        if (e.target.value.length < 3) {
                                            onInputChange(e);
                                            field.onChange(e.target.value)
                                        }
                                    }}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                />
                            }
                        />
                        {getFormErrorMessage('stateCode')}
                    </div>
                    <div className="p-dialog-footer mt-6">
                        <Button type="button" label="Cancel" icon="pi pi-times" outlined severity="danger" raised onClick={hideDialog} />
                        <Button type="submit" label="Save" icon="pi pi-check" outlined severity="success" raised />
                    </div>
                </form>
            </Dialog>
        </React.Fragment>
    )
}

export default Edit;
