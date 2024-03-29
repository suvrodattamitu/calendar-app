<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Settings;
use Illuminate\Validation\ValidationException;

class SettingsController extends Controller
{
    public function getSettings($currency = ''){
        
        $all_settings   = Settings::where('name','general_settings')->first();

        if(empty($all_settings)){
            
            $all_settings   = array(
                'general_settings'=>array(
                    'currency_settings'  => array(
                        'currency_code'    => 'USD'
                    ),
                    'software_settings' => array(
                        'software_name'  => 'fluentPos'
                    )  
                )
            );
        }else{
            $all_settings = $all_settings->settings;
        }

        if (!$currency) {
            // If no currency is passed then default it to USD
            $currency = 'USD';
        }

        $currency = strtoupper($currency);

        $symbols = array(
            array( 'label' => 'AED', 'value'  => 'AED' ),
            array( 'label' => 'AFN' , 'value' => 'AFN' ),
            // 'ALL' => 'L',
            array( 'label' =>'AMD', 'value' => 'AMD'),
            array( 'label' =>'ANG', 'value' => 'ANG'),
            array( 'label' =>'AOA', 'value' => 'AOA'),
            array( 'label' =>'ARS', 'value' => 'ARS'),
            array( 'label' =>'AUD', 'value' => 'AUD'),
            array( 'label' =>'AWG', 'value' => 'AWG'),
            array( 'label' =>'AZN', 'value' => 'AZN'),
            array( 'label' =>'BAM', 'value' => 'BAM'),
            array( 'label' =>'BBD', 'value' => 'BBD'),
            array( 'label' =>'BDT', 'value' => 'BDT'),
            array( 'label' =>'BGN', 'value' => 'BGN'),
            array( 'label' =>'BHD', 'value' => 'BHD'),
            array( 'label' =>'BIF', 'value' => 'BIF'),
            array( 'label' =>'BMD', 'value' => 'BMD'),
            array( 'label' =>'BND', 'value' => 'BND'),
            array( 'label' =>'BOB', 'value' => 'BOB'),
            array( 'label' =>'BRL', 'value' => 'BRL'),
            array( 'label' =>'BSD', 'value' => 'BSD'),
            array( 'label' =>'BTC', 'value' => 'BTC'),
            array( 'label' =>'BTN', 'value' => 'BTN'),
            array( 'label' =>'BWP', 'value' => 'BWP'),
            array( 'label' =>'BYR', 'value' => 'BYR'),
            array( 'label' =>'BZD', 'value' => 'BZD'),
            array( 'label' =>'CAD', 'value' => 'CAD'),
            array( 'label' =>'CDF', 'value' => 'CDF'),
            array( 'label' =>'CHF', 'value' => 'CHF'),
            array( 'label' =>'CLP', 'value' => 'CLP'),
            array( 'label' =>'CNY', 'value' => 'CNY'),
            array( 'label' =>'COP', 'value' => 'COP'),
            array( 'label' =>'CRC', 'value' => 'CRC'),
            array( 'label' =>'CUC', 'value' => 'CUC'),
            array( 'label' =>'CUP', 'value' => 'CUP'),
            array( 'label' =>'CVE', 'value' => 'CVE'),
            array( 'label' =>'CZK', 'value' => 'CZK'),
            array( 'label' =>'DJF', 'value' => 'DJF'),
            array( 'label' =>'DKK', 'value' => 'DKK'),
            array( 'label' =>'DOP', 'value' => 'DOP'),
            array( 'label' =>'DZD', 'value' => 'DZD'),
            array( 'label' =>'EGP', 'value' => 'EGP'),
            array( 'label' =>'ERN', 'value' => 'ERN'),
            array( 'label' =>'ETB', 'value' => 'ETB'),
            array( 'label' =>'EUR', 'value' => 'EUR'),
            array( 'label' =>'FJD', 'value' => 'FJD'),
            array( 'label' =>'FKP', 'value' => 'FKP'),
            array( 'label' =>'GBP', 'value' => 'GBP'),
            array( 'label' =>'GEL', 'value' => 'GEL'),
            array( 'label' =>'GGP', 'value' => 'GGP'),
            array( 'label' =>'GHS', 'value' => 'GHS'),
            array( 'label' =>'GIP', 'value' => 'GIP'),
            array( 'label' =>'GMD', 'value' => 'GMD'),
            array( 'label' =>'GNF', 'value' => 'GNF'),
            array( 'label' =>'GTQ', 'value' => 'GTQ'),
            array( 'label' =>'GYD', 'value' => 'GYD'),
            array( 'label' =>'HKD', 'value' => 'HKD'),
            array( 'label' =>'HNL', 'value' => 'HNL'),
            array( 'label' =>'HRK', 'value' => 'HRK'),
            array( 'label' =>'HTG', 'value' => 'HTG'),
            array( 'label' =>'HUF', 'value' => 'HUF'),
            array( 'label' =>'IDR', 'value' => 'IDR'),
            array( 'label' =>'ILS', 'value' => 'ILS'),
            array( 'label' =>'IMP', 'value' => 'IMP'),
            array( 'label' =>'INR', 'value' => 'INR'),
            array( 'label' =>'IQD', 'value' => 'IQD'),
            array( 'label' =>'IRR', 'value' => 'IRR'),
            array( 'label' =>'ISK', 'value' => 'ISK'),
            array( 'label' =>'JEP', 'value' => 'JEP'),
            array( 'label' =>'JMD', 'value' => 'JMD'),
            array( 'label' =>'JOD', 'value' => 'JOD'),
            array( 'label' =>'JPY', 'value' => 'JPY'),
            array( 'label' =>'KES', 'value' => 'KES'),
            array( 'label' =>'KGS', 'value' => 'KGS'),
            array( 'label' =>'KHR', 'value' => 'KHR'),
            array( 'label' =>'KMF', 'value' => 'KMF'),
            array( 'label' =>'KPW', 'value' => 'KPW'),
            array( 'label' =>'KRW', 'value' => 'KRW'),
            array( 'label' =>'KWD', 'value' => 'KWD'),
            array( 'label' =>'KYD', 'value' => 'KYD'),
            array( 'label' =>'KZT', 'value' => 'KZT'),
            array( 'label' =>'LAK', 'value' => 'LAK'),
            array( 'label' =>'LBP', 'value' => 'LBP'),
            array( 'label' =>'LKR', 'value' => 'LKR'),
            array( 'label' =>'LRD', 'value' => 'LRD'),
            array( 'label' =>'LSL', 'value' => 'LSL'),
            array( 'label' =>'LYD', 'value' => 'LYD'),
            array( 'label' =>'MAD', 'value' => 'MAD'),
            array( 'label' =>'MDL', 'value' => 'MDL'),
            array( 'label' =>'MGA', 'value' => 'MGA'),
            array( 'label' =>'MKD', 'value' => 'MKD'),
            array( 'label' =>'MMK', 'value' => 'MMK'),
            array( 'label' =>'MNT', 'value' => 'MNT'),
            array( 'label' =>'MOP', 'value' => 'MOP'),
            array( 'label' =>'MRO', 'value' => 'MRO'),
            array( 'label' =>'MUR', 'value' => 'MUR'),
            array( 'label' =>'MVR', 'value' => 'MVR'),
            array( 'label' =>'MWK', 'value' => 'MWK'),
            array( 'label' =>'MXN', 'value' => 'MXN'),
            array( 'label' =>'MYR', 'value' => 'MYR'),
            array( 'label' =>'MZN', 'value' => 'MZN'),
            array( 'label' =>'NAD', 'value' => 'NAD'),
            array( 'label' =>'NGN', 'value' => 'NGN'),
            array( 'label' =>'NIO', 'value' => 'NIO'),
            array( 'label' =>'NOK', 'value' => 'NOK'),
            array( 'label' =>'NPR', 'value' => 'NPR'),
            array( 'label' =>'NZD', 'value' => 'NZD'),
            array( 'label' =>'OMR', 'value' => 'OMR'),
            array( 'label' =>'PAB', 'value' => 'PAB'),
            array( 'label' =>'PEN', 'value' => 'PEN'),
            array( 'label' =>'PGK', 'value' => 'PGK'),
            array( 'label' =>'PHP', 'value' => 'PHP'),
            array( 'label' =>'PKR', 'value' => 'PKR'),
            array( 'label' =>'PLN', 'value' => 'PLN'),
            array( 'label' =>'PRB', 'value' => 'PRB'),
            array( 'label' =>'PYG', 'value' => 'PYG'),
            array( 'label' =>'QAR', 'value' => 'QAR'),
            array( 'label' =>'RMB', 'value' => 'RMB'),
            array( 'label' =>'RON', 'value' => 'RON'),
            array( 'label' =>'RSD', 'value' => 'RSD'),
            array( 'label' =>'RUB', 'value' => 'RUB'),
            array( 'label' =>'RWF', 'value' => 'RWF'),
            array( 'label' =>'SAR', 'value' => 'SAR'),
            array( 'label' =>'SBD', 'value' => 'SBD'),
            array( 'label' =>'SCR', 'value' => 'SCR'),
            array( 'label' =>'SDG', 'value' => 'SDG'),
            array( 'label' =>'SEK', 'value' => 'SEK'),
            array( 'label' =>'SGD', 'value' => 'SGD'),
            array( 'label' =>'SHP', 'value' => 'SHP'),
            array( 'label' =>'SLL', 'value' => 'Le'),
            array( 'label' =>'SOS', 'value' => 'Sh'),
            array( 'label' =>'SRD', 'value' => 'SRD'),
            array( 'label' =>'SSP', 'value' => 'SSP'),
            array( 'label' =>'STD', 'value' => 'STD'),
            array( 'label' =>'SYP', 'value' => 'SYP'),
            array( 'label' =>'SZL', 'value' => 'SZL'),
            array( 'label' =>'THB', 'value' => 'THB'),
            array( 'label' =>'TJS', 'value' => 'TJS'),
            array( 'label' =>'TMT', 'value' => 'TMT'),
            array( 'label' =>'TND', 'value' => 'TND'),
            array( 'label' =>'TOP', 'value' => 'TOP'),
            array( 'label' =>'TRY', 'value' => 'TRY'),
            array( 'label' =>'TTD', 'value' => 'TTD'),
            array( 'label' =>'TWD', 'value' => 'TWD'),
            array( 'label' =>'TZS', 'value' => 'TZS'),
            array( 'label' =>'UAH', 'value' => 'UAH'),
            array( 'label' =>'UGX', 'value' => 'UGX'),
            array( 'label' =>'USD', 'value' => 'USD'),
            array( 'label' =>'UYU', 'value' => 'UYU'),
            array( 'label' =>'UZS', 'value' => 'UZS'),
            array( 'label' =>'VEF', 'value' => 'VEF'),
            array( 'label' =>'VND', 'value' => 'VND'),
            array( 'label' =>'VUV', 'value' => 'VUV'),
            array( 'label' =>'WST', 'value' => 'WST'),
            array( 'label' =>'XAF', 'value' => 'XAF'),
            array( 'label' =>'XCD', 'value' => 'XCD'),
            array( 'label' =>'XOF', 'value' => 'XOF'),
            array( 'label' =>'XPF', 'value' => 'XPF'),
            array( 'label' =>'YER', 'value' => 'YER'),
            array( 'label' =>'ZAR', 'value' => 'ZAR'),
            array( 'label' =>'ZMW', 'value' => 'ZMW'),
        );

        $currency_symbol = isset($symbols[$currency]) ? $symbols[$currency] : '';
        return response()->json([

            'currency_symbol'   => $currency_symbol,
            'currencies'        => $symbols,
            'settings'          => $all_settings

        ]);

    }

    public function updateSettings(Request $request){
        
        $request_settings   = array(
                'general_settings'=>array(
                    'currency_settings'  => array(
                    'currency_code'    => $request->currency_code
                ),
                'software_settings' => array(
                    'software_name'  => $request->software_name
                ) 
            )
        );

        $db_settings   = Settings::where('name','general_settings')->first();

        if(empty($db_settings)){

            $new_settings   =   Settings::create([
                'name'      => 'general_settings',
                'settings'  => $request_settings
            ]);

        }else{

            $id = $db_settings->id;
            Settings::find($id)->update([
                'name'      => 'general_settings',
                'settings'  => $request_settings
            ]);
        }

        //maybe repeted
        $all_settings   = Settings::where('name','general_settings')->first();

        if(empty($all_settings)){
            $all_settings   = array(
                'general_settings'=>array(
                    'currency_settings'  => array(
                        'currency_code'    => 'USD'
                    ),
                    'software_settings' => array(
                        'software_name'  => 'fluentPos'
                    )  
                )
            );
        }else{
            $all_settings = $all_settings->settings;
        }

        // if (!$currency) {
        //     // If no currency is passed then default it to USD
        //     $currency = 'USD';
        // }

        // $currency = strtoupper($currency);

        $symbols = array(
            'AED' => '&#x62f;.&#x625;',
            'AFN' => '&#x60b;',
            'ALL' => 'L',
            'AMD' => 'AMD',
            'ANG' => '&fnof;',
            'AOA' => 'Kz',
            'ARS' => '&#36;',
            'AUD' => '&#36;',
            'AWG' => '&fnof;',
            'AZN' => 'AZN',
            'BAM' => 'KM',
            'BBD' => '&#36;',
            'BDT' => '&#2547;&nbsp;',
            'BGN' => '&#1083;&#1074;.',
            'BHD' => '.&#x62f;.&#x628;',
            'BIF' => 'Fr',
            'BMD' => '&#36;',
            'BND' => '&#36;',
            'BOB' => 'Bs.',
            'BRL' => '&#82;&#36;',
            'BSD' => '&#36;',
            'BTC' => '&#3647;',
            'BTN' => 'Nu.',
            'BWP' => 'P',
            'BYR' => 'Br',
            'BZD' => '&#36;',
            'CAD' => '&#36;',
            'CDF' => 'Fr',
            'CHF' => '&#67;&#72;&#70;',
            'CLP' => '&#36;',
            'CNY' => '&yen;',
            'COP' => '&#36;',
            'CRC' => '&#x20a1;',
            'CUC' => '&#36;',
            'CUP' => '&#36;',
            'CVE' => '&#36;',
            'CZK' => '&#75;&#269;',
            'DJF' => 'Fr',
            'DKK' => 'DKK',
            'DOP' => 'RD&#36;',
            'DZD' => '&#x62f;.&#x62c;',
            'EGP' => 'EGP',
            'ERN' => 'Nfk',
            'ETB' => 'Br',
            'EUR' => '&euro;',
            'FJD' => '&#36;',
            'FKP' => '&pound;',
            'GBP' => '&pound;',
            'GEL' => '&#x10da;',
            'GGP' => '&pound;',
            'GHS' => '&#x20b5;',
            'GIP' => '&pound;',
            'GMD' => 'D',
            'GNF' => 'Fr',
            'GTQ' => 'Q',
            'GYD' => '&#36;',
            'HKD' => '&#36;',
            'HNL' => 'L',
            'HRK' => 'Kn',
            'HTG' => 'G',
            'HUF' => '&#70;&#116;',
            'IDR' => 'Rp',
            'ILS' => '&#8362;',
            'IMP' => '&pound;',
            'INR' => '&#8377;',
            'IQD' => '&#x639;.&#x62f;',
            'IRR' => '&#xfdfc;',
            'ISK' => 'Kr.',
            'JEP' => '&pound;',
            'JMD' => '&#36;',
            'JOD' => '&#x62f;.&#x627;',
            'JPY' => '&yen;',
            'KES' => 'KSh',
            'KGS' => '&#x43b;&#x432;',
            'KHR' => '&#x17db;',
            'KMF' => 'Fr',
            'KPW' => '&#x20a9;',
            'KRW' => '&#8361;',
            'KWD' => '&#x62f;.&#x643;',
            'KYD' => '&#36;',
            'KZT' => 'KZT',
            'LAK' => '&#8365;',
            'LBP' => '&#x644;.&#x644;',
            'LKR' => '&#xdbb;&#xdd4;',
            'LRD' => '&#36;',
            'LSL' => 'L',
            'LYD' => '&#x644;.&#x62f;',
            'MAD' => '&#x62f;. &#x645;.',
            'MDL' => 'L',
            'MGA' => 'Ar',
            'MKD' => '&#x434;&#x435;&#x43d;',
            'MMK' => 'Ks',
            'MNT' => '&#x20ae;',
            'MOP' => 'P',
            'MRO' => 'UM',
            'MUR' => '&#x20a8;',
            'MVR' => '.&#x783;',
            'MWK' => 'MK',
            'MXN' => '&#36;',
            'MYR' => '&#82;&#77;',
            'MZN' => 'MT',
            'NAD' => '&#36;',
            'NGN' => '&#8358;',
            'NIO' => 'C&#36;',
            'NOK' => '&#107;&#114;',
            'NPR' => '&#8360;',
            'NZD' => '&#36;',
            'OMR' => '&#x631;.&#x639;.',
            'PAB' => 'B/.',
            'PEN' => 'S/.',
            'PGK' => 'K',
            'PHP' => '&#8369;',
            'PKR' => '&#8360;',
            'PLN' => '&#122;&#322;',
            'PRB' => '&#x440;.',
            'PYG' => '&#8370;',
            'QAR' => '&#x631;.&#x642;',
            'RMB' => '&yen;',
            'RON' => 'lei',
            'RSD' => '&#x434;&#x438;&#x43d;.',
            'RUB' => '&#8381;',
            'RWF' => 'Fr',
            'SAR' => '&#x631;.&#x633;',
            'SBD' => '&#36;',
            'SCR' => '&#x20a8;',
            'SDG' => '&#x62c;.&#x633;.',
            'SEK' => '&#107;&#114;',
            'SGD' => '&#36;',
            'SHP' => '&pound;',
            'SLL' => 'Le',
            'SOS' => 'Sh',
            'SRD' => '&#36;',
            'SSP' => '&pound;',
            'STD' => 'Db',
            'SYP' => '&#x644;.&#x633;',
            'SZL' => 'L',
            'THB' => '&#3647;',
            'TJS' => '&#x405;&#x41c;',
            'TMT' => 'm',
            'TND' => '&#x62f;.&#x62a;',
            'TOP' => 'T&#36;',
            'TRY' => '&#8378;',
            'TTD' => '&#36;',
            'TWD' => '&#78;&#84;&#36;',
            'TZS' => 'Sh',
            'UAH' => '&#8372;',
            'UGX' => 'UGX',
            'USD' => '&#36;',
            'UYU' => '&#36;',
            'UZS' => 'UZS',
            'VEF' => 'Bs F',
            'VND' => '&#8363;',
            'VUV' => 'Vt',
            'WST' => 'T',
            'XAF' => 'Fr',
            'XCD' => '&#36;',
            'XOF' => 'Fr',
            'XPF' => 'Fr',
            'YER' => '&#xfdfc;',
            'ZAR' => '&#82;',
            'ZMW' => 'ZK',
        );

        $currency        = isset( $all_settings['general_settings']['currency_settings']['currency_code'] ) ? $all_settings['general_settings']['currency_settings']['currency_code'] : 'USD';
        $software_name   = isset( $all_settings['general_settings']['software_settings']['software_name'] ) ? $all_settings['general_settings']['software_settings']['software_name'] : '';

        $currency_symbol = isset($symbols[$currency]) ? $symbols[$currency] : '';

        $settings = array(
            'software_name'     => $software_name,
            'currency_symbol'   => $currency_symbol
        );


        return response()->json([

            'settings'   => $settings

        ]);

        
        
    }

    public function getGlobalSettings(){
        
        $all_settings   = Settings::where('name','general_settings')->first();

        if(empty($all_settings)){
            $all_settings   = array(
                'general_settings'=>array(
                    'currency_settings'  => array(
                        'currency_code'    => 'USD'
                    ),
                    'software_settings' => array(
                        'software_name'  => 'fluentPos'
                    )  
                )
            );
        }else{
            $all_settings = $all_settings->settings;
        }

        // if (!$currency) {
        //     // If no currency is passed then default it to USD
        //     $currency = 'USD';
        // }

        // $currency = strtoupper($currency);

        $symbols = array(
            'AED' => '&#x62f;.&#x625;',
            'AFN' => '&#x60b;',
            'ALL' => 'L',
            'AMD' => 'AMD',
            'ANG' => '&fnof;',
            'AOA' => 'Kz',
            'ARS' => '&#36;',
            'AUD' => '&#36;',
            'AWG' => '&fnof;',
            'AZN' => 'AZN',
            'BAM' => 'KM',
            'BBD' => '&#36;',
            'BDT' => '&#2547;&nbsp;',
            'BGN' => '&#1083;&#1074;.',
            'BHD' => '.&#x62f;.&#x628;',
            'BIF' => 'Fr',
            'BMD' => '&#36;',
            'BND' => '&#36;',
            'BOB' => 'Bs.',
            'BRL' => '&#82;&#36;',
            'BSD' => '&#36;',
            'BTC' => '&#3647;',
            'BTN' => 'Nu.',
            'BWP' => 'P',
            'BYR' => 'Br',
            'BZD' => '&#36;',
            'CAD' => '&#36;',
            'CDF' => 'Fr',
            'CHF' => '&#67;&#72;&#70;',
            'CLP' => '&#36;',
            'CNY' => '&yen;',
            'COP' => '&#36;',
            'CRC' => '&#x20a1;',
            'CUC' => '&#36;',
            'CUP' => '&#36;',
            'CVE' => '&#36;',
            'CZK' => '&#75;&#269;',
            'DJF' => 'Fr',
            'DKK' => 'DKK',
            'DOP' => 'RD&#36;',
            'DZD' => '&#x62f;.&#x62c;',
            'EGP' => 'EGP',
            'ERN' => 'Nfk',
            'ETB' => 'Br',
            'EUR' => '&euro;',
            'FJD' => '&#36;',
            'FKP' => '&pound;',
            'GBP' => '&pound;',
            'GEL' => '&#x10da;',
            'GGP' => '&pound;',
            'GHS' => '&#x20b5;',
            'GIP' => '&pound;',
            'GMD' => 'D',
            'GNF' => 'Fr',
            'GTQ' => 'Q',
            'GYD' => '&#36;',
            'HKD' => '&#36;',
            'HNL' => 'L',
            'HRK' => 'Kn',
            'HTG' => 'G',
            'HUF' => '&#70;&#116;',
            'IDR' => 'Rp',
            'ILS' => '&#8362;',
            'IMP' => '&pound;',
            'INR' => '&#8377;',
            'IQD' => '&#x639;.&#x62f;',
            'IRR' => '&#xfdfc;',
            'ISK' => 'Kr.',
            'JEP' => '&pound;',
            'JMD' => '&#36;',
            'JOD' => '&#x62f;.&#x627;',
            'JPY' => '&yen;',
            'KES' => 'KSh',
            'KGS' => '&#x43b;&#x432;',
            'KHR' => '&#x17db;',
            'KMF' => 'Fr',
            'KPW' => '&#x20a9;',
            'KRW' => '&#8361;',
            'KWD' => '&#x62f;.&#x643;',
            'KYD' => '&#36;',
            'KZT' => 'KZT',
            'LAK' => '&#8365;',
            'LBP' => '&#x644;.&#x644;',
            'LKR' => '&#xdbb;&#xdd4;',
            'LRD' => '&#36;',
            'LSL' => 'L',
            'LYD' => '&#x644;.&#x62f;',
            'MAD' => '&#x62f;. &#x645;.',
            'MDL' => 'L',
            'MGA' => 'Ar',
            'MKD' => '&#x434;&#x435;&#x43d;',
            'MMK' => 'Ks',
            'MNT' => '&#x20ae;',
            'MOP' => 'P',
            'MRO' => 'UM',
            'MUR' => '&#x20a8;',
            'MVR' => '.&#x783;',
            'MWK' => 'MK',
            'MXN' => '&#36;',
            'MYR' => '&#82;&#77;',
            'MZN' => 'MT',
            'NAD' => '&#36;',
            'NGN' => '&#8358;',
            'NIO' => 'C&#36;',
            'NOK' => '&#107;&#114;',
            'NPR' => '&#8360;',
            'NZD' => '&#36;',
            'OMR' => '&#x631;.&#x639;.',
            'PAB' => 'B/.',
            'PEN' => 'S/.',
            'PGK' => 'K',
            'PHP' => '&#8369;',
            'PKR' => '&#8360;',
            'PLN' => '&#122;&#322;',
            'PRB' => '&#x440;.',
            'PYG' => '&#8370;',
            'QAR' => '&#x631;.&#x642;',
            'RMB' => '&yen;',
            'RON' => 'lei',
            'RSD' => '&#x434;&#x438;&#x43d;.',
            'RUB' => '&#8381;',
            'RWF' => 'Fr',
            'SAR' => '&#x631;.&#x633;',
            'SBD' => '&#36;',
            'SCR' => '&#x20a8;',
            'SDG' => '&#x62c;.&#x633;.',
            'SEK' => '&#107;&#114;',
            'SGD' => '&#36;',
            'SHP' => '&pound;',
            'SLL' => 'Le',
            'SOS' => 'Sh',
            'SRD' => '&#36;',
            'SSP' => '&pound;',
            'STD' => 'Db',
            'SYP' => '&#x644;.&#x633;',
            'SZL' => 'L',
            'THB' => '&#3647;',
            'TJS' => '&#x405;&#x41c;',
            'TMT' => 'm',
            'TND' => '&#x62f;.&#x62a;',
            'TOP' => 'T&#36;',
            'TRY' => '&#8378;',
            'TTD' => '&#36;',
            'TWD' => '&#78;&#84;&#36;',
            'TZS' => 'Sh',
            'UAH' => '&#8372;',
            'UGX' => 'UGX',
            'USD' => '&#36;',
            'UYU' => '&#36;',
            'UZS' => 'UZS',
            'VEF' => 'Bs F',
            'VND' => '&#8363;',
            'VUV' => 'Vt',
            'WST' => 'T',
            'XAF' => 'Fr',
            'XCD' => '&#36;',
            'XOF' => 'Fr',
            'XPF' => 'Fr',
            'YER' => '&#xfdfc;',
            'ZAR' => '&#82;',
            'ZMW' => 'ZK',
        );

        $currency        = isset( $all_settings['general_settings']['currency_settings']['currency_code'] ) ? $all_settings['general_settings']['currency_settings']['currency_code'] : 'USD';
        $software_name   = isset( $all_settings['general_settings']['software_settings']['software_name'] ) ? $all_settings['general_settings']['software_settings']['software_name'] : '';

        $currency_symbol = isset($symbols[$currency]) ? $symbols[$currency] : '';

        $settings = array(
            'software_name'     => $software_name,
            'currency_symbol'   => $currency_symbol
        );

        return response()->json([

            'symbols'           => $symbols,
            'settings'          => $settings

        ]);

    }
}
