function sorting_searching()
 {
  let  arr = [11, 18, 14, 8, 4, 9, 7, 10, 1, 6, 3, 19, 2, 5, 12, 15, 13, 20, 17, 16]
  let array_ss = [];
  let index_card = arr.lenght - 1;
  let card = arr[index_card];
  let H_c = 0;
  let L_c = 0;
  let mid = 0;
  /* while (index_card >= 0) {
    if (array_ss.length == 0) {
      array_ss.push(card);
      index_card--;
      card = arr[index_card];
      console.log(array_ss);
    }
    if (array_ss.length == 1) {
      if (array_ss[0] < card) {
        array_ss.push(card);
        H_c = card;
        index_card--;
        card = arr[index_card];
        console.log(array_ss);
      } else {
        array_ss.unshift(card);
        L_c = card;
        index_card--;
        card = arr[index_card];
        console.log(array_ss);
      }
    }
    if (card > H_c) {
      array_ss.push(card);
      H_c = card;
      index_card--;
      card = arr[index_card];
      console.log(array_ss);
    } else if (card < L_c) {
      array_ss.unshift(card);
      L_c = card;
      index_card--;
      card = arr[index_card];
      console.log(array_ss);
    } else {
      mid = (array_ss.indexOf(H_c) + array_ss.indexOf(L_c)) / 2;
      if (card < array_ss[mid]) {
        for (let i = mid; i >= 1; i--) {
          if (card > array_ss[i]) {
            array_ss.splice(card, 0, i + 1);
            index_card--;
            card = arr[index_card];
            console.log(array_ss);
          }
        }
      } else {
        let j = mid;
        while (j < array_ss.lenght) {
          if (card < array_ss[j]) {
            array_ss.splice(card, 0, j);
            index_card--;
            card = arr[index_card];
            j += array_ss.length;
            console.log(array_ss);
          } else j++;
        }
      }
    }
  }

  return array_ss;*/

  for (let c = index_card; c >= 0; c--) {
    card = arr[c];
    switch (array_ss.length) {
      case 0:
        array_ss.push(card);

        console.log( array_ss);

        break;
      case 1:
        if (array_ss[0] < card) {
          array_ss.push(card);
          console.log( array_ss);
          break;
        } else {
          array_ss.unshift(card);
          console.log( array_ss);
          break;
        }

      default:
        if (card > array_ss[array_ss.length - 1]) {
          array_ss.push(card);
          break;
        } else if (card < array_ss[0]) {
          array_ss.unshift(card);
          break;
        } else {
          let mid = array_ss.length / 2;
          if (card < array_ss[mid]) {
            for (let i = mid; i >= 0; i--) {
              if (card > array_ss[i]) {
                array_ss.splice(card, 0, i + 1);
                break;
              }
            }
          } else {
            let j = mid;
            let check = 0;
            while (j < array_ss.lenght && check == 0) {
              if (card < array_ss[j]) {
                array_ss.splice(card, 0, j);
                check = 1;
                break;
              } else j++;
            }
            break;
          }
        }
    }
  }
}
