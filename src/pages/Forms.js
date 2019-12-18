import React, { Component } from 'react';
import TimePicker from 'react-time-picker';
import axios from 'axios';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class Forms extends Component {
  state = {
    flightNumber      : '',
    id_flight_airline : '',

    fromCity          : '',
    from_id_city      : '',
    from_airport      : '',
    from_airport_code : '',
    from_at           : '',

    to_city           : '',
    to_id_city        : '',
    to_airport        : '',
    to_airport_code   : '',
    to_at             : new Date(),

    price             : ''
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log({
      flightNumber      : this.state.flightNumber,        ////
      id_flight_airline : this.state.id_flight_airline,

      fromCity          : this.state.fromCity,            ////
      from_id_city      : this.state.from_id_city,
      from_airport      : this.state. from_airport ,
      from_airport_code : this.state.from_airport_code,
      from_at           : this.state.from_at,

      to_city           : this.state.to_city,
      to_id_city        : this.state.to_id_city,
      to_airport        : this.state.to_airport,
      to_airport_code   : this.state.to_airport_code,
      to_at             : this.state.to_at,

      price             : this.state.price
    })
    const formData = new FormData()
    formData.append('id_flight_airline', this.state.id_flight_airline)
    formData.append('flight_number', this.state.flightNumber) ///
        
    formData.append('from_city', this.state.fromCity) ///
    formData.append('from_id_city', this.state.from_id_city)
    formData.append('from_airport', this.state.from_airport)
    formData.append('from_airport_code', this.state.from_airport_code)
    formData.append('from_at', this.state.from_at)

    formData.append('to_city', this.state.to_city)
    formData.append('to_id_city', this.state.to_id_city)
    formData.append('to_airport', this.state.to_airport)
    formData.append('to_airport_code', this.state.to_airport_code)
    formData.append('to_at', this.state.to_at)

    formData.append('price', this.state.price)


    axios.post('http://192.168.6.180:9600/api/v1/flight', formData)
    .then(result => window.location.href = '/forms')
    .catch(err => console.log(err))
  }

  

  render() {
    return (
      <div id="page-wrapper">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">Flight Data Panel</h1>
          </div>
          {/* <!-- /.col-lg-12 --> */}
        </div>
        {/* <!-- /.row --> */}
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-default">
              <div className="panel-heading">
              Input below to edit or add data
                        </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-lg-6">
                    <form role="form">
                     {/*<div className="form-group">
                        <label>Text Input</label>
                        <input className="form-control" />
    </div>*/}
                      
                      <div className="form-group">
                      <label>Flight Airline ID</label>
                        <select className="form-control" name='id_flight_airline'  onChange={(event) => this.setState({
                          id_flight_airline: event.target.value
                        })}>
                          <option value='00000000001' >
                          00000000001 
                          </option>
                          <option value='00000000002' >
                          00000000002
                          </option>
                          <option value='00000000003' >
                          00000000003
                          </option>
                          <option value='00000000004' >
                          00000000004
                          </option>
                          <option value='00000000005' >
                          00000000005
                          </option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Flight Number</label>
                        <input className="form-control" name='flight_number' 
                        placeholder="ex: GA-421" 
                        value={this.state.flightNumber} 
                        onChange={(event) => this.setState({
                          flightNumber: event.target.value
                        })}/>
                        <label><br /><br /></label>
                      </div>

                      <div className="form-group">
                      <label>From City</label>
                        <select className="form-control" name='from_city'  onChange={(event) => this.setState({
                          fromCity: event.target.value
                        })}>
                          <option value='Semarang' >
                          Semarang 
                          </option>
                          <option value='Yogyakarta' >
                          Yogyakarta 
                          </option>
                          <option value='Jakarta' >
                          Jakarta
                          </option>
                          <option value='Bali' >
                          Bali
                          </option>
                          <option value='Kendari' >
                          Kendari
                          </option>
                          <option value='Makassar' >
                          Makassar
                          </option>
                        </select>
                      </div>

                      <div className="form-group">
                      <label>From City ID</label>
                        <select className="form-control" name='from_id_city'  onChange={(event) => this.setState({
                          from_id_city: event.target.value
                        })}>
                          <option value='00000000001' >
                          00000000001-Semarang 
                          </option>
                          <option value='00000000002' >
                          00000000002-Jakarta
                          </option>
                          <option value='00000000003' >
                          00000000003-Bali
                          </option>
                          <option value='00000000004' >
                          00000000004-Kendari
                          </option>
                          <option value='00000000005' >
                          00000000005-Makassar
                          </option>
                          <option value='00000000006' >
                          00000000006-Yogyakarta
                          </option>
                        </select>
                      </div>

                      <div className="form-group">
                      <label>From Airport</label>
                        <select className="form-control" name='from_airport'  onChange={(event) => this.setState({
                          from_airport: event.target.value
                        })}>
                          <option value='Achmad Yani' >
                          Achmad Yani 
                          </option>
                          <option value='Adi Sucipto' >
                          Adi Sucipto
                          </option>
                          <option value='Haluoleo' >
                          Haluoleo
                          </option>
                          <option value='Ngurah Rai' >
                          Ngurah Rai
                          </option>
                          <option value='Soekarno Hatta' >
                          Soekarno Hatta
                          </option>
                          <option value='Sultan Hasanuddin' >
                          Sultan Hasanuddin
                          </option>
                        </select>
                      </div>


                      <div className="form-group">
                      <label>From Airport Code</label>
                        <select className="form-control" name='from_airport_code'  onChange={(event) => this.setState({
                          from_airport_code: event.target.value
                        })}>
                          <option value='SRG' >
                          SRG - Achmad Yani 
                          </option>
                          <option value='JOG' >
                          JOG - Adi Sucipto
                          </option>
                          <option value='KDI' >
                          KDI - Haluoleo
                          </option>
                          <option value='DPS' >
                          DPS - Ngurah Rai
                          </option>
                          <option value='CGK' >
                          CGK - Soekarno Hatta
                          </option>
                          <option value='UPG' >
                          UPG - Sultan Hasanuddin
                          </option>
                        </select>
                      </div>

                      <div class="form-group">
                      <label>From At &nbsp; &nbsp;</label><br />
                      <label> &nbsp; &nbsp;&nbsp; &nbsp;Date &nbsp; &nbsp;&nbsp; &nbsp;</label>
                      <DatePicker />
                      <br />
                      <label> &nbsp; &nbsp;&nbsp; &nbsp;Time &nbsp; &nbsp;&nbsp; &nbsp;</label>
                      <TimePicker />
                      </div>

                      <div className="form-group">
                      <br /><br />
                      <label>To City</label>
                        <select className="form-control" name='to_city'  onChange={(event) => this.setState({
                          to_city: event.target.value
                        })}>
                          <option value='Semarang' >
                          Semarang
                          </option>
                          <option value='Jakarta' >
                          Jakarta
                          </option>
                          <option value='Bali' >
                          Bali
                          </option>
                          <option value='Kendari' >
                          Kendari
                          </option>
                          <option value='Makassar' >
                          Makassar
                          </option>
                        </select>
                      </div>

                      <div className="form-group">
                      <label>To City ID</label>
                        <select className="form-control" name='to_id_city'  onChange={(event) => this.setState({
                          to_id_city: event.target.value
                        })}>
                          <option value='00000000001' >
                          00000000001-Semarang
                          </option>
                          <option value='00000000002' >
                          00000000002-Jakarta
                          </option>
                          <option value='00000000003' >
                          0000000003-Bali
                          </option>
                          <option value='00000000004' >
                          00000000004-Kendari
                          </option>
                          <option value='00000000005' >
                          00000000005-Makassar
                          </option>
                        </select>
                      </div>                      

                      <div className="form-group">
                      <label>To Airport</label>
                        <select className="form-control" name='to_airport'  onChange={(event) => this.setState({
                          to_airport: event.target.value
                        })}>
                          <option value='Achmad Yani' >
                          Achmad Yani 
                          </option>
                          <option value='Adi Sucipto' >
                          Adi Sucipto
                          </option>
                          <option value='Haluoleo' >
                          Haluoleo
                          </option>
                          <option value='Ngurah Rai' >
                          Ngurah Rai
                          </option>
                          <option value='Soekarno Hatta' >
                          Soekarno Hatta
                          </option>
                        </select>
                      </div>

                      <div className="form-group">
                      <label>To Airport Code</label>
                        <select className="form-control" name='to_airport_code'  onChange={(event) => this.setState({
                          to_airport_code: event.target.value
                        })}>
                          <option value='SRG' >
                          SRG - Achmad Yani 
                          </option>
                          <option value='JOG' >
                          JOG - Adi Sucipto
                          </option>
                          <option value='KDI' >
                          KDI - Haluoleo
                          </option>
                          <option value='DPS' >
                          DPS - Ngurah Rai
                          </option>
                          <option value='CGK' >
                          CGK - Soekarno Hatta
                          </option>
                          <option value='UPG' >
                          UPG - Sultan Hasanuddin
                          </option>
                        </select>
                      </div>

                      <div class="form-group">
                      <label>To At &nbsp; &nbsp;</label><br />
                      <label> &nbsp; &nbsp;&nbsp; &nbsp;Date &nbsp; &nbsp;&nbsp; &nbsp;</label>
                      <DatePicker onChange={(date)=> this.setState({
                        to_at: date
                      })} />
                      <br />
                      <label> &nbsp; &nbsp;&nbsp; &nbsp;Time &nbsp; &nbsp;&nbsp; &nbsp;</label>
                      <TimePicker />
                      </div>

                      <div className="form-group">
                        <br /> <br />
                        <label>Price</label>
                        <input className="form-control" name='price' 
                        placeholder="Rp. 12345678" 
                        value={this.state.price} 
                        onChange={(event) => this.setState({
                          price: event.target.value
                        })}/>
                        <label><br /><br /></label>
                      </div>

                     {/* <div className="form-group">
                        <label>File input</label>
                        <input type="file" />
                      </div>

                      <div className="form-group">
                      <br />
                        <label>Price</label>
                        <input className="form-control" placeholder="Rp. 1100000" />
                      </div>

                      <div className="form-group">
                        <label>Text area</label>
                        <textarea className="form-control" rows="3"></textarea>
                      </div>
                      <div className="form-group">
                        <label>Checkboxes</label>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" value="" />Checkbox 1
                                                </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" value="" />Checkbox 2
                                                </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" value="" />Checkbox 3
                                                </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Inline Checkboxes</label>
                        <label className="checkbox-inline">
                          <input type="checkbox" />1
                                            </label>
                        <label className="checkbox-inline">
                          <input type="checkbox" />2
                                            </label>
                        <label className="checkbox-inline">
                          <input type="checkbox" />3
                                            </label>
                      </div>
                      <div className="form-group">
                        <label>Radio Buttons</label>
                        <div className="radio">
                          <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked />Radio 1
                                                </label>
                        </div>
                        <div className="radio">
                          <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />Radio 2
                                                </label>
                        </div>
                        <div className="radio">
                          <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" />Radio 3
                                                </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Inline Radio Buttons</label>
                        <label className="radio-inline">
                          <input type="radio" name="optionsRadiosInline" id="optionsRadiosInline1" value="option1" checked />1
                                            </label>
                        <label className="radio-inline">
                          <input type="radio" name="optionsRadiosInline" id="optionsRadiosInline2" value="option2" />2
                                            </label>
                        <label className="radio-inline">
                          <input type="radio" name="optionsRadiosInline" id="optionsRadiosInline3" value="option3" />3
                                            </label>
                      </div>
                      <div className="form-group">
                        <label>Selects</label>
                        <select className="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Multiple Selects</label>
                        <select multiple className="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
  </div> */}
                      <button type="submit" className="btn btn-default" onClick={this.onSubmit}>Submit Button</button> 
                      <button type="reset" className="btn btn-default">Reset Button</button>
                    </form>
                  </div>
                  {/* <!-- /.col-lg-6 (nested) --> */}
                  {/*
                  <div className="col-lg-6">
                    <h1>Disabled Form States</h1>
                    <form role="form">
                      <fieldset disabled>
                        <div className="form-group">
                          <label for="disabledSelect">Disabled input</label>
                          <input className="form-control" id="disabledInput" type="text" placeholder="Disabled input" disabled />
                        </div>
                        <div className="form-group">
                          <label for="disabledSelect">Disabled select menu</label>
                          <select id="disabledSelect" className="form-control">
                            <option>Disabled select</option>
                          </select>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" />Disabled Checkbox
                                                </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Disabled Button</button>
                      </fieldset>
                    </form>
                    <h1>Form Validation States</h1>
                    <form role="form">
                      <div className="form-group has-success">
                        <label className="control-label" for="inputSuccess">Input with success</label>
                        <input type="text" className="form-control" id="inputSuccess" />
                      </div>
                      <div className="form-group has-warning">
                        <label className="control-label" for="inputWarning">Input with warning</label>
                        <input type="text" className="form-control" id="inputWarning" />
                      </div>
                      <div className="form-group has-error">
                        <label className="control-label" for="inputError">Input with error</label>
                        <input type="text" className="form-control" id="inputError" />
                      </div>
                    </form>
                    <h1>Input Groups</h1>
                    <form role="form">
                      <div className="form-group input-group">
                        <span className="input-group-addon">@</span>
                        <input type="text" className="form-control" placeholder="Username" />
                      </div>
                      <div className="form-group input-group">
                        <input type="text" className="form-control" />
                        <span className="input-group-addon">.00</span>
                      </div>
                      <div className="form-group input-group">
                        <span className="input-group-addon"><i className="fa fa-eur"></i>
                        </span>
                        <input type="text" className="form-control" placeholder="Font Awesome Icon" />
                      </div>
                      <div className="form-group input-group">
                        <span className="input-group-addon">$</span>
                        <input type="text" className="form-control" />
                        <span className="input-group-addon">.00</span>
                      </div>
                      <div className="form-group input-group">
                        <input type="text" className="form-control" />
                        <span className="input-group-btn">
                          <button className="btn btn-default" type="button"><i className="fa fa-search"></i>
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                  */}
                  {/* <!-- /.col-lg-6 (nested) --> */}
                </div>
                {/* <!-- /.row (nested) --> */}
              </div>
              {/* <!-- /.panel-body --> */}
            </div>
            {/* <!-- /.panel --> */}
          </div>
          {/* <!-- /.col-lg-12 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
    );
  }
}

export default Forms;