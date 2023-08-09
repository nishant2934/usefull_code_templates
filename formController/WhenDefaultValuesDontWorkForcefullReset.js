import React, { useContext, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import {
    Button,
    InputText,
    useDebounce,
} from '../../helpers'
import { UserService } from './services';
import ToastContext from '../../provider/ToastProvider';
import { useAuth } from '../../provider/AuthProvider';

const AddressInfo = () => {
    const toast = useContext(ToastContext);
    const {userDetails} = useAuth();
    const [search,debouncedSearch,setSearch] = useDebounce('', 500);
    const [addressFields, setAddressFields] = useState({});
    const [loading, setLoading] = useState(false);





    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm();

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setAddressFields({ ...addressFields, [name]: value });

    };


    const onSubmitAddress = (data) => {
        setLoading(true);
        UserService.addAddress(data).then((result) => {
            toast.current.show({
                severity: "success",
                summary: "Success",
                detail: result.data.message, life: 3000
            });
            setLoading(false)
        }).catch((error) => {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: error.response.data.message, life: 3000
            });
            setLoading(false)
        });
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error p-0">{errors[name].message}</small> : '';
    };


    useEffect(() => {
        UserDetail();
    }, [])

    const UserDetail = async () => {
        let { data } = await UserService.getUserDetails({ id: userDetails.id});
        if (data?.results) {
            setAddressFields(data.results);
            reset(data.results);
        }
        else{
            setAddressFields({id:null,user_id:userDetails.id});
        }
    }
    useEffect(() => {
        if (addressFields?.zipcode) {
            getState();
        }
    }, [debouncedSearch])

    const getState = async () => {
        let { data } = await UserService.getState({ zipcode: addressFields?.zipcode });
        if (data?.results) {
            setAddressFields({ ...addressFields, state: data.results.state, city: data.results.city, postcode_id: data.results.id });
            reset({ ...addressFields, state: data.results.state, city: data.results.city, postcode_id: data.results.id });
        }
        else {
            setAddressFields({ ...addressFields, state: "", city: "", postcode_id: "" });
            reset({ ...addressFields, state: "", city: "", postcode_id: "" })
        }
    }



    return (
        <>
            <form onSubmit={handleSubmit(onSubmitAddress)}>
                <p className='Personalinfo__txt'>Address</p>
                <div className="row">
                    <div className="col-12 mb-3">
                        <label htmlFor="billing_address" className='p-0'>Billing address</label>
                        <Controller
                            name="billing_address"
                            control={control}
                            defaultValue={addressFields?.billing_address || ''}
                            rules={{
                                required: 'Business address is required.',
                            }}
                            render={({ field, fieldState }) => (
                                <InputText id="billing_address" name='billing_address' value={addressFields?.billing_address || ''}
                                    className={'form-control ' + ((fieldState?.error && ' p-invalid '))}
                                    autoComplete="new-password"
                                    onChange={(e) => { onInputChange(e); field.onChange(e.target.value) }}
                                />
                            )}
                        />
                        {getFormErrorMessage('billing_address')}
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="username">Apartment, Street, etc.</label>
                        <Controller
                            name="apartment"
                            control={control}
                            rules={{
                                required: 'Apartment address is required.',
                            }}
                            defaultValue={addressFields?.apartment || ''}
                            render={({ field, fieldState }) => (
                                <InputText id="apartment" name='apartment' value={addressFields?.apartment || ''}
                                    className={'form-control ' + ((fieldState?.error && ' p-invalid '))}
                                    onChange={(e) => { onInputChange(e); field.onChange(e.target.value) }}
                                />
                            )}
                        />
                        {getFormErrorMessage('apartment')}
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="username">Zipcode</label>
                        <Controller
                            name="zipcode"
                            control={control}
                            rules={{
                                required: 'Zipcode is required.',
                            }}
                            defaultValue={addressFields?.zipcode || ''}
                            render={({ field, fieldState }) => (
                                <InputText id="zipcode" name='zipcode' value={addressFields?.zipcode || ''}
                                    className={'form-control ' + ((fieldState?.error && ' p-invalid '))}
                                    onChange={(e) => { onInputChange(e); field.onChange(e.target.value);setSearch(e.target.value); }}
                                />
                            )}
                        />
                        {getFormErrorMessage('zipcode')}
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="username">City</label>
                        <Controller
                            name="city"
                            control={control}
                            rules={{
                                required: 'City is required.',
                            }}
                            defaultValue={addressFields?.city || ''}
                            render={({ field, fieldState }) => (
                                <InputText id="city" name='city' value={addressFields?.city || ''}
                                    readOnly
                                    className={'form-control ' + ((fieldState?.error && ' p-invalid '))}
                                    onChange={(e) => { onInputChange(e); field.onChange(e.target.value) }}
                                />
                            )}
                        />
                        {getFormErrorMessage('city')}
                    </div>
                    <div className="col">
                        <label htmlFor="username">State</label>
                        <Controller
                            name="state"
                            control={control}
                            rules={{
                                required: 'State is required.',
                            }}
                            defaultValue={addressFields?.state || ''}
                            render={({ field, fieldState }) => (
                                <InputText id="state" name='state' value={addressFields?.state || ''}
                                    readOnly
                                    className={'form-control ' + ((fieldState?.error && ' p-invalid '))}
                                    onChange={(e) => { onInputChange(e); field.onChange(e.target.value) }}
                                />
                            )}
                        />
                        {getFormErrorMessage('state')}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-3 text-end">
                        <Button label="Update" type='submitAddress' className="btn-theme btn-theme-dark" loading={loading} />
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddressInfo
